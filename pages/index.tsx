import { ChevronDownIcon } from '@heroicons/react/solid'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { sanityClient } from '../lib/sanity'
import Header from '../ui/Header'
import FeaturedSection from '../ui/homepage/FeaturedSection'
import LatestSection from '../ui/homepage/LatestSection'
import ModalRoot from '../ui/ModalRoot'

interface props {
  featuredPosts: PostPair[]
}

const Home = ({ featuredPosts }: props) => {
  return (
    <div className="font-jost flex min-h-screen flex-col bg-gray-900 text-white">
      <Head>
        <title>flexcamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="flex flex-col items-center px-8">
        {/** Greet text */}
        <div className="flex flex-col items-center py-10 px-4">
          <p className="mb-2 font-light">
            Welcome to <b>flexcamp</b>, our blog site
          </p>
          <ChevronDownIcon className="h-6 animate-bounce" />
        </div>

        <FeaturedSection postPairsProp={featuredPosts} />
        <LatestSection />
      </section>

      <ModalRoot />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanityClient.fetch(
    // groq
    `*[_type == "post"]{
      _id,
      _createdAt,
      title,
      slug,
      author -> {
        name
      },
      description,
      mainImage,
    }`
  )

  let _postPairs = []

  for (let i = 0; i < posts.length; i += 2) {
    _postPairs.push({
      index: i / 2,
      post1: posts[i],
      post2: posts[i + 1] ?? null, // important because undefined cannot be serialised as JSON
    })
  }

  return {
    props: {
      featuredPosts: _postPairs,
    },
    revalidate: 3600 * 24 // Incremental Static Regeneration
  }
}
