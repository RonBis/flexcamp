import PageLayout from '../ui/PageLayout'

function OfflinePage() {
  return (
    <PageLayout pageTitle="Offline - flexcamp">
      <div className="flex flex-1 items-center justify-center space-y-5 p-8">
        <p className="text-lg">Uh Oh, looks like you're offline :(</p>
      </div>
    </PageLayout>
  )
}

export default OfflinePage
