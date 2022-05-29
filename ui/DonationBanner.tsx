import { XCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Donation() {
  const router = useRouter()
  const [show, setShow] = useState(true)

  return (
    <>
      {show && (
        <div
          className="bgColorSecondary fgTextSecondary relative flex h-9 cursor-pointer items-center justify-center"
          onClick={() => {
            router.push('/donate')
          }}
        >
          <p
            className=" text-center text-xs font-bold uppercase text-gray-900"
            onClick={() => {}}
          >
            Love flexcamp ? Donate
          </p>

          <XCircleIcon
            className="absolute right-3 h-5 text-gray-800"
            onClick={() => setShow(false)}
          />
        </div>
      )}
    </>
  )
}

export default Donation
