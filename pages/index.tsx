import { ChevronDownIcon } from '@heroicons/react/solid'
import { GetStaticProps } from 'next'
import { sanityClient } from '../lib/sanity'
import FeaturedSection from '../ui/homepage/FeaturedSection'
import LatestSection from '../ui/homepage/LatestSection'
import PageLayout from '../ui/PageLayout'

interface props {
  featuredPosts: PostPair[]
  latestPosts: Post[]
}

const Home = ({ featuredPosts, latestPosts }: props) => {
  return (
    <PageLayout pageTitle="flexcamp">
      <section className="flex flex-col items-center px-8">
        {/** Greet text */}
        <div className="flex flex-col items-center py-10 px-4">
          <p className="mb-2 font-light">
            Welcome to <b>flexcamp</b>, our blog site
          </p>
          <ChevronDownIcon className="h-6 animate-bounce" />
        </div>

        <FeaturedSection postPairsProp={featuredPosts} />
        <LatestSection latestPosts={latestPosts} />
      </section>
    </PageLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = await sanityClient.fetch(
    `*[_type == "post" && isFeatured]{ _createdAt, title, slug, author -> { name }, description, mainImage }`
  )
  const latestPosts = await sanityClient.fetch(
    `*[_type == "post"]{ _id, _createdAt, title, slug, author -> { name }, description, mainImage }`
  )

  let _postPairs = []
  for (let i = 0; i < featuredPosts.length; i += 2) {
    _postPairs.push({
      index: i / 2,
      post1: featuredPosts[i],
      post2: featuredPosts[i + 1] ?? null, // important because undefined cannot be serialised as JSON
    })
  }

  return {
    props: {
      featuredPosts: _postPairs,
      latestPosts: latestPosts,
    },
    revalidate: 3600 * 12, // Incremental Static Regeneration
  }
}
