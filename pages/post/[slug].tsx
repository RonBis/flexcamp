import { PortableText } from '@portabletext/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { sanityClient, urlForImage } from '../../lib/sanity'
import { toStandardDate } from '../../lib/util/date'
import LatestSection from '../../ui/homepage/LatestSection'
import PageLayout from '../../ui/PageLayout'

function Post({ post, latestPosts }: { post: Post; latestPosts: Post[] }) {
  return (
    <PageLayout pageTitle={`${post.title} - flexcamp`}>
      <section className="flex flex-col items-center p-10">
        {/** post title */}
        <p className="mb-5 text-2xl">{post.title}</p>

        {/** main image */}
        <img
          src={urlForImage(post.mainImage).url()}
          className="mb-6 rounded-xl"
          alt="Post main image"
        />

        {/** author section */}
        <div className="mb-8 flex flex-col items-center">
          <p className="flex items-center">
            Posted by&nbsp;
            <Image
              src={urlForImage(post.author.image).url()}
              alt="Authors's image"
              height={32}
              width={32}
              className="rounded-full"
            />
            &nbsp;
            <span className="text-yellow-500">{post.author.name}</span>
          </p>
          <p className="text-sm">on {toStandardDate(post._createdAt)}</p>
        </div>

        {/** content section */}
        <div className="max-w-3xl">
          <PortableText value={post.body as any} />
        </div>

        <hr className="mt-6 mb-16 w-24" />

        <LatestSection latestPosts={latestPosts} />
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

  // match for post body
  // if post body is blank(undefined)
  // then we should conclude that the post doesn't exist
  if (post.body === undefined) {
    return {
      redirect: {
        destination: '/post/error',
        permanent: false,
      },
    }
  }

  const latestPosts = await sanityClient.fetch(
    `*[_type == "post" && slug.current != $slug]{ _id, _createdAt, title, slug, author -> { name }, description, mainImage }`,
    { slug: params?.slug }
  )

  return {
    props: {
      post,
      latestPosts: latestPosts,
    },
    revalidate: 3600 * 12, // ISR
  }
}
