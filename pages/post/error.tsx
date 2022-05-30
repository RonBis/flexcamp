import Link from 'next/link'
import PageLayout from '../../ui/PageLayout'

function NoPostFoundErrorPage() {
  return (
    <PageLayout pageTitle="Post not found - flexcamp">
      <div className="flex flex-1 flex-col items-center justify-center space-y-5 p-8">
        <p className="text-lg">Uh Oh, no post was found in that name :(</p>
        <Link href="/" className="text-sm cursor-pointer">
          <u>Back to homepage</u>
        </Link>
      </div>
    </PageLayout>
  )
}

export default NoPostFoundErrorPage
