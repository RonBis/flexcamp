import Link from 'next/link'
import { urlForImage } from '../../lib/sanity'
import { toStandardDate } from '../../lib/util/date'

function LatestSection({ latestPosts }: { latestPosts: Post[] | null }) {
  return (
    <section className="mb-20 flex flex-col items-center">
      <header className="mb-8 font-medium uppercase">latest</header>

      {!latestPosts && <p>Uh Oh, no content right now :(</p>}

      {latestPosts && (
        <div className="grid max-w-2xl grid-cols-1 gap-10 lg:grid-cols-2">
          {latestPosts.map((post) => (
            <Link href={`/post/${post.slug.current}`} key={post._id}>
              <div className="flex skew-y-3 flex-col space-y-3 transition-all ease-in hover:skew-y-0 hover:scale-105">
                <img
                  className="rounded-xl"
                  src={urlForImage(post.mainImage).url()}
                  alt="Main image for the post"
                />
                <p className="text-lg">{post.title}</p>
                <p className="text-sm">{post.description}</p>
                <p className="text-center text-sm">
                  <span className="font-bold text-yellow-400">
                    {post.author.name}
                  </span>{' '}
                  at {toStandardDate(post._createdAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default LatestSection
