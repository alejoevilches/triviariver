import { useQuestionsStore } from '../store/useQuestionsStore'
import { useEffect } from 'react'
import './GameOver.css'

export function GameOver () {
  const { points, calculatePoints } = useQuestionsStore()
  useEffect(() => {
    calculatePoints()
  },[])
  return (
    <div className='gameover-container'>
      <h1>Gracias por participar en la Trivia River! Tu nuevo puntaje es {points} puntos</h1>
    </div>
  )
}
