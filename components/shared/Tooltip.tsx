import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

interface Props {
  children: JSX.Element
}

const Tooltip = ({ children }: Props) => {
  return (
    <StyledTooltip>
      <Icon>
        <FontAwesomeIcon icon={faCircleInfo} />
      </Icon>
      <Tip>
        {children}
      </Tip>
    </StyledTooltip>
  )
}

const Tip = styled.div`
  position: absolute;
  padding: var(--spacing-minor);
  margin-top: var(--spacing-minor);
  background-color: white;
  border: 1px solid var(--color-grey);
`

const StyledTooltip = styled.div`
  & ${Tip} {
    visibility: hidden;
  }

  &:hover ${Tip} {
    visibility: visible;
  }
`

const Icon = styled.span`
  color: var(--color-info);
`

export default Tooltip
