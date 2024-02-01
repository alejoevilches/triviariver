import { useQuestionsStore } from '../store/useQuestionsStore'
import { Question } from './Question'

export function Game () {
  const { questions, currentQuestion } = useQuestionsStore()
  const questionInfo = questions[currentQuestion]
  return (
    <Question info={questionInfo} />
  )
}
