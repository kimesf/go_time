import styled from 'styled-components'

const Clock = ({ time }: { time: number }) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const format = (number: number): string => {
    return String(number).padStart(2, '0')
  }

  return (
    <StyledClock>
      {format(minutes)}
      :
      {format(seconds)}
    </StyledClock>
  )
}
const StyledClock = styled.div`
  font-size: 4rem;
`

export default Clock
