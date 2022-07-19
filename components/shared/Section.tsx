import styled from 'styled-components'

import { ColumnContainer, RowContainer, Text, Tooltip } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

interface Props {
  title: string
  subtitle?: string
  children: {
    body: JSX.Element
    tip: JSX.Element
  }
}

const Section = ({ title, subtitle, children }: Props) => {
  return (
    <StyledSection>
      <Reference>
        <Tooltip>
          {{
            icon: <FontAwesomeIcon icon={faCircleInfo} />,
            tip: children.tip,
          }}
        </Tooltip>
        <ColumnContainer>
          <Text size='small'>{title}</Text>
          {subtitle && <Text bold>{subtitle}</Text>}
        </ColumnContainer>
      </Reference>
      <Body>
        {children.body}
      </Body>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const Reference = styled(RowContainer)`
 align-items: center;
 padding-top: var(--spacing-minor);
 gap: var(--spacing-minor);
`

const Body = styled(ColumnContainer)`
  width: 75ch;
`

export default Section
