import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/post">Go to pages/post/[pid].js</Link>
      </li>
      <li>
        <Link href="/contact">
           Contact
        </Link>
      </li>
      <li>
        <Link href="/post/abc/a-comment">
          Go to pages/post/[pid]/[comment].js
        </Link>
      </li>
    </ul>
  )
}

export default Home