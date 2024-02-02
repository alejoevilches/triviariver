import { useQuestionsStore } from '../store/useQuestionsStore'
import './GameOver.css'

export function GameOver () {
  const { points } = useQuestionsStore()
  return (
    <div className='gameover-container'>
      <h1>Gracias por participar en la Trivia River! Tu nuevo puntaje es {points} puntos</h1>
      <h2>Podes volver a jugar o canjear tus puntos por premios en la Tienda River</h2>
      <div className='buttons-container'>
        <a href='https://www.tiendariver.com/'>
          <button>
            Ir a la tienda
          </button>
        </a>
        <button onClick={() => location.reload()}>
          Volver a empezar
        </button>
      </div>
    </div>
  )
}
