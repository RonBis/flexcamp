import { XCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Donation() {
  const router = useRouter()
  const [show, setShow] = useState(true)

  return (
    <>
      {show && (
        <div className="bgColorSecondary fgTextSecondary relative flex h-9 items-center justify-center">
          <p
            className=" cursor-pointer text-center text-xs font-bold uppercase text-gray-900 "
            onClick={() => {
              router.push('/donate')
            }}
          >
            Loveing flexcamp ? Donate
          </p>

          <XCircleIcon
            className="absolute right-3 h-5 cursor-pointer text-gray-800"
            onClick={() => setShow(false)}
          />
        </div>
      )}
    </>
  )
}

export default Donation
