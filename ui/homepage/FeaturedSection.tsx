import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'
import { urlForImage } from '../../lib/sanity'
import { toStandardDate } from '../../lib/util/date'

function FeaturedSection({ postPairsProp }: { postPairsProp: PostPair[] }) {
  const [postPairs, _] = useState(postPairsProp)
  const [currentPostPair, setCurrentPostPair] = useState(postPairsProp[0])

  const showNextCardPair = () => {
    if (currentPostPair?.index! < postPairs.length - 1) {
      let nextPostPairIndex = currentPostPair?.index! + 1
      setCurrentPostPair(postPairs[nextPostPairIndex!])
    }
  }

  const showPreviousCardPair = () => {
    if (currentPostPair?.index! > 0) {
      let nextPostPairIndex = currentPostPair?.index! - 1
      setCurrentPostPair(postPairs[nextPostPairIndex!])
    }
  }

  return (
    <section className="mb-20 flex flex-col items-center">
      <header className="mb-10 font-medium uppercase">featured</header>

      {currentPostPair && (
        <>
          {/** post pairs */}
          <div className="flex max-w-2xl space-x-6">
            <Link href={`/post/${currentPostPair.post1.slug.current}`}>
              <div className="flex skew-y-3 flex-col space-y-3 transition-all ease-in hover:skew-y-0">
                <img
                  className="rounded-xl"
                  src={urlForImage(
                    (currentPostPair.post1 as any).mainImage
                  ).url()}
                />
                <p className="text-lg">{currentPostPair.post1.title}</p>
                <p className="text-sm">{currentPostPair.post1.description}</p>
                <p className="text-center text-sm">
                  <span className="font-bold text-yellow-400">
                    {currentPostPair.post1.author.name}
                  </span>{' '}
                  at {toStandardDate(currentPostPair.post1._createdAt)}
                </p>
              </div>
            </Link>

            {currentPostPair.post2 && (
              <Link href={`/post/${currentPostPair.post2.slug.current}`}>
                <div className="flex skew-y-3 flex-col space-y-3 transition-all ease-in hover:skew-y-0 hover:scale-105">
                  <img
                    className="rounded-xl"
                    src={urlForImage(currentPostPair.post2.mainImage).url()}
                  />
                  <p className="text-lg">{currentPostPair.post2.title}</p>
                  <p className="text-sm">{currentPostPair.post2.description}</p>
                  <p className="text-center text-sm">
                    <span className="font-bold text-yellow-400">
                      {currentPostPair.post1.author.name}
                    </span>{' '}
                    at {toStandardDate(currentPostPair.post1._createdAt)}
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/** left-right button */}
          <div className="-mr-3 mt-6 flex w-full skew-y-3 justify-end space-x-2">
            <ChevronLeftIcon
              className={`h-6 cursor-pointer ${
                currentPostPair.index === 0 && 'cursor-default text-gray-500'
              }`}
              onClick={showPreviousCardPair}
            />
            <ChevronRightIcon
              className={`h-6 cursor-pointer ${
                currentPostPair.index === postPairs.length - 1 &&
                'cursor-default text-gray-500'
              }`}
              onClick={showNextCardPair}
            />
          </div>
        </>
      )}
    </section>
  )
}

export default FeaturedSection
