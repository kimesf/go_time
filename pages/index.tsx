import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Task from '../components/Task'
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
        <Card>
          Actions needed
        </Card>
        {HARD_CODED_TASKS.map((task) => {
          return <Card key={task.name}><Task props={task} /></Card>
        })}
      </Main>

      <footer>
        <Link href="https://github.com/kimesf/go_time">
          <a>Open Source at Github</a>
        </Link>
      </footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85ch;
`

const Card = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
  padding: 1rem 1rem;
  width: 75ch;
  border: 1px solid lightgrey;
  box-shadow: -2px 2px 5px grey;
`

export default Home
