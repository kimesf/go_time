import type { NextPage } from 'next'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import Tasks from '../components/Tasks'
import { ColumnContainer } from '../components/shared'
import { HARD_CODED_TASKS } from '../utils/hardCodedTasks'
import StoreProvider from '../components/StoreProvider'

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
        <StoreProvider tasks={HARD_CODED_TASKS} actionsNeeded={tempActions}>
          <Tasks />
        </StoreProvider>
      </Main>

      <Footer>
        <Link href="https://github.com/kimesf/go_time">
          <a>Open Source at Github</a>
        </Link>
      </Footer>
    </Container >
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
