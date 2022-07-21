import type { NextPage } from 'next'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import Tasks from '../components/Tasks'
import { ColumnContainer } from '../components/shared'
import { HARD_CODED_TASKS } from '../utils/hardCodedTasks'


const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Go Time</title>
      </Head>

      <Main>
        <h1>
          It&apos;s GO TIME!
        </h1>
        <Tasks tasks={HARD_CODED_TASKS} />
      </Main>

      <Footer>
        <Link href="https://github.com/kimesf/go_time">
          <a>Open Source at Github</a>
        </Link>
      </Footer>
    </Container>
  )
}

const Container = styled(ColumnContainer)`
  align-items: center;
  gap: var(--spacing-medium);
`

const Main = styled(Container)`
  width: 95ch;
`

const Footer = styled.footer`
  background-color: orange; /* temp */
`

export default Home
