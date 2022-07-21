import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ActionNeeded from '../../components/ActionNeeded'
import ActionsNeeded from '../../components/ActionsNeeded'
import Pills from '../../components/shared/Pills'

import Section from '../../components/shared/Section'
jest.mock('../../components/shared/Section', jest.fn)

describe('ActionsNeeded', () => {
  // TODO: (id: 3) move to fixtures
  const actionsNeededMock = [
    {
      task: { name: 'action 1 task name' },
      subtask: {
        name: 'action 1 subtask name',
        tags: ['action 1 tag subtask'],
      },
      currentStep: { name: 'action 1current step name' },
      nextStep: { name: 'action 1 next step name' },
    },
    {
      task: { name: 'action 2 task name' },
      subtask: {
        name: 'action 2 subtask name',
        tags: ['action 2 tag subtask'],
      },
      currentStep: { name: 'action 2 current step name' },
      nextStep: { name: 'action 2 next step name' },
    },
  ]

  describe('when initialized', () => {
    beforeEach(() => {
      render(<ActionsNeeded actions={actionsNeededMock} />)
    })

    // TODO: (id: 1) Custom matcher to simplify readability, or something else
    it('renders sections for all actions', () => {
      expect(Section).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          title: actionsNeededMock[0].task.name,
          subtitle: actionsNeededMock[0].subtask.name,
          children: expect.objectContaining({
            tip: expect.objectContaining({
              type: Pills,
              props: { props: actionsNeededMock[0].subtask.tags }
            }),
            body: expect.objectContaining({
              type: ActionNeeded,
              props: { action: actionsNeededMock[0] }
            })
          })
        }), {}
      )

      // TODO: (id: 1) Custom matcher to simplify readability, or something else
      expect(Section).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
          title: actionsNeededMock[1].task.name,
          subtitle: actionsNeededMock[1].subtask.name,
          children: expect.objectContaining({
            tip: expect.objectContaining({
              type: Pills,
              props: { props: actionsNeededMock[1].subtask.tags }
            }),
            body: expect.objectContaining({
              type: ActionNeeded,
              props: { action: actionsNeededMock[1] }
            })
          })
        }), {}
      )
    })
  })
})
