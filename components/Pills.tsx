import styled from "styled-components"

const Pills = ({ props }: { props: string[] }) => {
  return (
    <StyledPills>
      {props.map((text, index) => {
        return <Pill key={index}>{text}</Pill>
      })}
    </StyledPills>
  )
}

const StyledPills = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Pill = styled.div`
  border: 1px solid grey;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.25rem 0.4rem;
  border-radius: 15px;
  background-color: pink;
  font-size: 0.8rem;
`

export default Pills
