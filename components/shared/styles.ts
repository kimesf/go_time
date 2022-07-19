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

const Text = styled.span<{
  uppercase?: boolean
  lowercase?: boolean
  bold?: boolean
  light?: boolean
  size?: 'large' | 'small'
}>`
  ${props => props.uppercase && 'text-transform: uppercase;'}
  ${props => props.lowercase && 'text-transform: lowercase;'}
  ${props => props.bold && 'font-weight: bold;'}
  ${props => props.light && 'font-weight: light;'}
  font-size: ${props => `var(--text-size-${props.size});`}
`

export { Card, ColumnContainer, RowContainer, Text }
