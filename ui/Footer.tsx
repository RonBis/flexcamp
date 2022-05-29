function Footer() {
  return (
    <div className="mt-auto flex w-full flex-col items-center bg-neutral-700 py-3 space-y-3">
      <a
        className='flex space-x-1 items-center'
        target="_blank"
        referrerPolicy="no-referrer"
        href="http://sayanmayra.tumblr.com"
      >
        <img className="h-5" src="/tumblr.svg" />
        <span>Tumblr</span>
      </a>
      <p>© Copyright under FlexLUSI, 2022</p>
    </div>
  )
}

export default Footer
