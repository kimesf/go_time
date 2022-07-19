import styled from 'styled-components'

interface Props {
  children: {
    icon: JSX.Element
    tip: JSX.Element
  }
}

const Tooltip = ({ children }: Props) => {
  return (
    <StyledTooltip>
      <Icon>
        {children.icon}
      </Icon>
      <Tip>
        {children.tip}
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
