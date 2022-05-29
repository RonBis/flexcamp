import { toHTML } from '@portabletext/to-html'
import { GetStaticPaths, GetStaticProps } from 'next'
import { sanityClient, urlForImage } from '../../lib/sanity'
import { toStandardDate } from '../../lib/util/date'
import PageLayout from '../../ui/PageLayout'

function Post({ post }: { post: Post }) {
  return (
    <PageLayout pageTitle={`${post.title} - flexcamp`}>
      <section className="flex flex-col items-center p-10">
        {/** post title */}
        <p className="text-xl mb-5">{post.title}</p>

        {/** author section */}
        <div className='mb-8 items-center flex flex-col'>
          <p className="flex items-center">
            Posted by
            <img
              src={urlForImage(post.author.image).url()}
              className="mx-2 h-8 rounded-full"
            />
            <span className="text-yellow-500">{post.author.name}</span>
          </p>
          <p className='text-sm'>on {toStandardDate(post._createdAt)}</p>
        </div>

        {/** content section */}
        <div>
          {toHTML(post.body as any, {})}
        </div>

        <hr className='mt-6 w-24' />
      </section>
    </PageLayout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{ slug { current } }`
  )
  const paths = await posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ _createdAt, title, author -> { name, image }, mainImage, body }`,
    { slug: params?.slug }
  )

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 3600 * 12, // ISR
  }
}
