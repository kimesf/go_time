import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Task from '../../components/Task'

import Subtask from '../../components/Subtask'
// jest.mock('../../components/Subtask', jest.fn)

import Pills from '../../components/shared/Pills'
// jest.mock('../../components/shared/Pills', jest.fn)

import Section from '../../components/shared/Section'
import styled from 'styled-components'
jest.mock('../../components/shared/Section', jest.fn)

describe('Task', () => {
  const subtask1 = {
    name: 'desc 1',
    steps: [
      {
        time: 1,
        name: 'desc step 1',
      },
    ],
    tags: ['tag 1']
  }

  const subtask2 = {
    name: 'desc 2',
    steps: [
      {
        time: 2,
        name: 'desc step 2',
      },
    ],
    tags: ['tag 2']
  }

  const task = {
    name: 'name',
    tags: ['Custom'],
    subtasks: [subtask1, subtask2]
  }

  describe('When initialized', () => {
    beforeEach(() => {
      render(<Task props={task} />)
    })

    it('passes substasks to Section body', () => {
      // TODO: (id: 1) Custom matcher to simplify readability, or something else
      // expect.extend({
      //   toHaveComponentChild(received, expected) {
      //     const { props: expectedProps, type: expectedType, underKey } = expected

      //     const receivedType = received.children[underKey].type
      //     const receivedProps = received.children[underKey].props

      //     const matchesFn = receivedType == expectedType
      //     const matchesProps = this.equals(receivedProps, expectedProps)

      //     const pass = matchesFn && matchesProps

      //     const message = pass
      //       ? () =>
      //         `expected ${received} not to have child component called ${expectedType} with ${expectedProps}`
      //       : () =>
      //         `expected ${received} to have child component called ${expectedType} with ${expectedProps}`

      //     return { actual: received, pass, message }
      //   },
      // })

      // expect(Section).toHaveBeenCalledWith(
      //   expect.toHaveComponentChild({
      //     underKey: 'tip',
      //     type: Pills,
      //     props: { props: task.tags },
      //   }),
      //   {}
      // )
      expect(Section).toHaveBeenCalledWith(
        expect.objectContaining({
          children: expect.objectContaining({
            body: expect.objectContaining({
              props: expect.objectContaining({
                children: expect.arrayContaining([
                  expect.objectContaining({
                    type: Subtask,
                    props: { props: subtask1 },
                  }),
                  expect.objectContaining({
                    type: Subtask,
                    props: { props: subtask2 },
                  })
                ])
              })
            })
          })
        }),
        {}
      )
    })

    it('passes title to Section', () => {
      expect(Section).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'name' }),
        {},
      )
    })

    // TODO: (id: 1) Custom matcher to simplify readability, or something else
    it('passes pills to Section tip', () => {
      expect(Section).toHaveBeenCalledWith(
        expect.objectContaining({
          children: expect.objectContaining({
            tip: expect.objectContaining({
              type: Pills,
              props: { props: task.tags }
            })
          }),
        }),
        {},
      )
    })
  })
})
