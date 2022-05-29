import { DotsVerticalIcon, SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { appDrawerModalState } from '../lib/recoil/modalAtom'
import Donation from './DonationBanner'

function Header() {
  const router = useRouter()
  const setAppDrawerModalOpen = useSetRecoilState(appDrawerModalState)

  return (
    <div className="sticky top-0 z-50 flex flex-col ">
      <div className="flex h-14 items-center justify-between bg-black px-4">
        <DotsVerticalIcon
          className="h-6 cursor-pointer text-gray-500"
          onClick={() => setAppDrawerModalOpen(true)}
        />
        <Image
          className="cursor-pointer"
          src="/logo-text.svg"
          height="24"
          width="152.34"
          onClick={() => router.push('/')}
        />
        <SearchIcon className="h-6 cursor-pointer text-gray-500" />
      </div>

      <Donation />
    </div>
  )
}

export default Header
