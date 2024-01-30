import { useQuestionsStore } from '../store/useQuestionsStore'
import './Question.css'

export function Question ({ info }) {
  const { nextQuestion, selectAnswer } = useQuestionsStore()
  const handleSelectAnswer = (index) => () => {
    selectAnswer(info.id, index)
    nextQuestion()
  }
  if (!info) {
    return (
      <p>Cargando</p>
    )
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
