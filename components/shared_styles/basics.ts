import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Card = styled.section`
  width: 100%;
  box-shadow: -2px 2px 5px var(--color-grey);
`

export { ColumnContainer, RowContainer, Card }
