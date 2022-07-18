import styled from 'styled-components'
import { Text } from '.'

const Pills = ({ props }: { props: string[] }) => {
  return (
    <StyledPills>
      {props.map((text, index) => {
        return (
          <Pill key={index}>
            <Text size='small'>{text}</Text>
          </Pill>
        )
      })}
    </StyledPills>
  )
}

const StyledPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Pill = styled.div`
  padding: 0.25rem 0.4rem;
  border-radius: 15px;
  background-color: var(--color-highlight);
  color: white;
`

export default Pills
