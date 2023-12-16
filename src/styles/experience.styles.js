import styled from 'styled-components'
import { fadeInFromTop } from './keyframes'

export const SkillsContainer = styled.div`
  border: 1px solid rgba(255,255,255,0.4);
  background-color: rgba(255,255,255,0.25);
  border-radius: 30px;
  backdrop-filter: blur(5px);

  width: 100%;

  p {
    font-size: 18px;
    padding: 0 20px;
  }
`

export const SingleSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  margin: 0 20px;
  animation: ${fadeInFromTop};
  ${({ delay }) => `animation-duration: ${delay && `${delay * 200}ms`};};`}

  span {
    margin-top: 5px;
  }
`