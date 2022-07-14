import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Timer from '../components/Timer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Go Time</title>
      </Head>

      <main>
        <h1>
          It&apos;s GO TIME!
        </h1>
        <Timer seconds={60} />
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
