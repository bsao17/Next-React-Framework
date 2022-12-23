import Link from 'next/link'

function Navigation({children}) {
  return (
    <div>
      <ul style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: "10"}}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>  
        </li>
        <li>
          <Link href="/post/abc">
            Go to articles
          </Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default Navigation