import styled from 'styled-components'

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

export default Text
