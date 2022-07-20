import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Section } from '../../../components/shared'

import Tooltip from '../../../components/shared/Tooltip'
jest.mock('../../../components/shared/Tooltip', jest.fn)

describe('Section', () => {
  describe('when initialized', () => {
    const expectedTip = <div>test tip</div>

    const section = () => {
      return (
        <Section
          title='test title'
          subtitle='test subtitle'
        >
          {{
            body: <div>test body</div>,
            tip: expectedTip,
          }}
        </Section>
      )
    }

    beforeEach(() => {
      render(section())
    })

    it('renders title', () => {
      expect(screen.getByText(/test title/i)).toBeInTheDocument()

    })

    it('renders subtitle', () => {
      expect(screen.getByText(/test subtitle/i)).toBeInTheDocument()
    })

    it('renders body', () => {
      expect(screen.getByText(/test body/i)).toBeInTheDocument()
    })

    it('calls ToolTip with children.tip', () => {
      expect(Tooltip).toHaveBeenCalledWith({ children: expectedTip }, {})
    })
  })
})
