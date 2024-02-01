import { useQuestionsStore } from '../store/useQuestionsStore'
import './Question.css'

export function Question ({ info }) {
  const { calculatePoints, nextQuestion, selectAnswer, currentQuestion } = useQuestionsStore()
  const handleSelectAnswer = (index) => () => {
    selectAnswer(info.id, index)
    if (currentQuestion < 3) {
      return nextQuestion()
    }
    return calculatePoints()
  }
  return (
    <section className='question-container'>
      <h2>{info.question}</h2>
      <ul className='options-container'>
        {info.options.map((op, index) => {
          return (
            <button
              className='option'
              key={index}
              onClick={handleSelectAnswer(index)}
            >{op}
            </button>
          )
        })}
      </ul>
    </section>
  )
}
