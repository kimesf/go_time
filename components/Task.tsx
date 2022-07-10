import styled from 'styled-components'
import Subtask from './Subtask'

interface Task {
  name: string
  tags: string[]
  subtasks: Subtask[]
}

const Task = ({ props }: { props: Task }) => {
  const { name, tags, subtasks } = props

  return (
    <StyledTask>
      {name}
      {tags.map((tag) => {
        return <div key={tag}>{tag}</div>
      })}
      <div>
        {subtasks.map((subtask, index) => {
          return <Subtask key={index} props={subtask} />
        })}
      </div>
    </StyledTask>
  )
}

const StyledTask = styled.div``

export default Task

