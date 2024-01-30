import { useQuestionsStore } from '../store/useQuestionsStore'
import { Question } from './Question'

export function Game () {
  const { questions, currentQuestion, goNextQuestion } = useQuestionsStore()
  const questionInfo = questions[currentQuestion]
  return (
    <Question info={questionInfo} />
  )
}
