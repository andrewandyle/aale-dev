import styled from 'styled-components'
import { fadeInFromTop, fadeInFromBottom } from './keyframes'

export const SkillsContainer = styled.div`
  animation: ${fadeInFromTop};
  animation-duration: 500ms;

  border: 1px solid rgba(255,255,255,0.4);
  background-color: rgba(255,255,255,0.25);
  border-radius: 30px;
  backdrop-filter: blur(5px);

  width: 100%;
  margin-top: 30px;

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
  ${({ delay }) => `animation-duration: ${delay && `${500 + delay * 200}ms`};};`}

  span {
    margin-top: 5px;
  }
`

export const TimelineContainer = styled.div`
  animation: ${fadeInFromBottom};
  animation-duration: 500ms;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;

  .vertical-timeline-element-content {
    border: 1px solid rgba(255,255,255,0.4);
    background-color: rgba(255,255,255,0.25);
    border-radius: 30px;
    backdrop-filter: blur(5px);
    box-shadow: none;

    & h3 {
      margin-top: 10px;
      margin-bottom: 5px;
    }

    & h4 {
      margin-top: 5px;
      font-weight: 400;
    }

    & p {
      font-size: 0.8rem;
      font-weight: normal;
    }

    & ul {
      padding-inline-start: 20px;
    }
  }

  .vertical-timeline-element-date {
    margin: 0 10px;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid rgba(255, 255, 255, 0.4);
  }

  @media only screen and (max-width: 1170px) {
    #citi {
      width: 35px;
    }

    #utaustin {
      width: 40px;
    }

    #promazo {
      width: 20px;
    }

    #edgelearning {
      width: 40px;
    }
  }
`

export const SkillBubbles = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Skill = styled.div`
  font-size: 0.8125rem;
  padding: 5px 15px;
  margin: 2.5px;
  background: #e0e0e0;
  border: none;
  border-radius: 16px;
  color: #333;
`