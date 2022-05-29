import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import ModalRoot from './ModalRoot'

function PageLayout({
  pageTitle,
  children,
}: {
  pageTitle: string
  children: ReactNode
}) {
  return (
    <div className="font-jost flex min-h-screen flex-col bg-gray-900 text-white">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
      <Footer />

      <ModalRoot />
    </div>
  )
}

export default PageLayout
