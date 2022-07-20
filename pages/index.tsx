import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import ActionsNeeded from '../components/ActionsNeeded'
import Task from '../components/Task'
import { HARD_CODED_TASKS } from '../utils/hardCodedTasks'
import { ColumnContainer } from '../components/shared'

const tempActions = [
  {
    task: { name: 'Pedido #9889' },
    subtask: {
      name: 'New York',
      tags: ['1x Lemon Up', '3x Nutellas'],
    },
    currentStep: { name: 'Forno primeiro lado' },
    nextStep: { name: 'Forno segundo lado' },
  },
  {
    task: { name: 'Pedido #1234' },
    subtask: {
      name: 'Recheado',
      tags: ['1x Lemon Up', '3x Nutellas'],
    },
    currentStep: { name: 'Forno segundo lado' },
    nextStep: { name: 'Descanso' },
  }
]

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
        <ActionsNeeded actions={tempActions} />
        <Tasks>
          {HARD_CODED_TASKS.map((task) => {
            return <Task props={task} key={task.name} />
          })}
        </Tasks>
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

const Tasks = styled(ColumnContainer)`
  width: 100%;
  gap: var(--spacing-medium);
`

const Footer = styled.footer`
  background-color: orange; /* temp */
`

export default Home
