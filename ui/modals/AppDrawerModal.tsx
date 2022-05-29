import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { appDrawerModalState } from '../../lib/recoil/modalAtom'
import Modal from '../Modal'

interface LinkComponentProps {
  to: string
  text: string
}

function LinkComponent({ to, text }: LinkComponentProps) {
  return (
    <Link href={to}>
      <span className="w-full cursor-pointer text-center text-lg transition-all ease-in hover:translate-x-3">
        {text}
      </span>
    </Link>
  )
}

function AppDrawerModal() {
  return (
    <Modal
      modalState={appDrawerModalState}
      modalContent={
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle text-gray-400 shadow-xl transition-all">
          <Dialog.Title as="span">
            <Image src="/logo-text.svg" height="24" width="152.34" />
          </Dialog.Title>

          <section className="font-jost mt-10 flex flex-col items-center space-y-4">
            <a
              className="w-full cursor-pointer text-center text-lg outline-none transition-all ease-in hover:translate-x-3"
              href="https://sanity.io"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Content Studio
            </a>
            <LinkComponent to="/about" text="About" />
            <LinkComponent to="/donate" text="Donate" />
          </section>
        </Dialog.Panel>
      }
    />
  )
}

export default AppDrawerModal
