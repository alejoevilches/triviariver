import './Start.css'
import { useQuestionsStore } from '../store/useQuestionsStore'

export function Start () {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)
  const handleStartButton = () => {
    fetchQuestions(3)
  }
  return (
    <section className='start-section'>
      <h1>Bienvenido a Trivia River</h1>
      <p>Respondé preguntas sobre El Mas Grande, sumá puntos y canjealos por premios y experiencias exclusivas</p>
      <button onClick={handleStartButton}>
        Empezar
      </button>
    </section>
  )
}
