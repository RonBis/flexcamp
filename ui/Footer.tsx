function Footer() {
  return (
    <div className="mt-auto flex w-full flex-col items-center space-y-3 bg-neutral-700 py-3">
      <a
        className="flex items-center space-x-1"
        target="_blank"
        referrerPolicy="no-referrer"
        href="http://sayanmayra.tumblr.com"
      >
        <img
          className="h-5"
          src="/img/tumblr.svg"
          alt="tumblr social link image"
        />
        <span>Tumblr</span>
      </a>
      <p>© Copyright under FlexLUSI, 2022</p>
    </div>
  )
}

export default Footer
