import './Start.css'
import { useQuestionsStore } from '../store/useQuestionsStore'
const QUESTION_LIMIT = 3

export function Start () {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)
  const handleStartButton = () => {
    fetchQuestions(QUESTION_LIMIT)
  }
  return (
    <section className='start-section'>
      <h1>Bienvenido a Trivia River</h1>
      <p>Respondé preguntas sobre El Mas Grande, sumá puntos y canjealos por premios y experiencias exclusivas</p>
      <button onClick={handleStartButton}>
        Empezar
      </button>
      <img src='public/gif.gif' alt='Promocion de Meridional Seguros' />
    </section>
  )
}
