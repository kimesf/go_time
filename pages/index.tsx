import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Go Time</title>
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
      </Head>

      <main>
        <h1>
          It's GO TIME!
        </h1>
      </main>

      <footer>
        <Link href="https://github.com/kimesf/go_time">
          <a>Open Source at Github</a>
        </Link>

      </footer>
    </div>
  )
}

export default Home
