import { Navbar } from './components/Navbar'
import { Start } from './components/Start'
import './App.css'
import { useQuestionsStore } from './store/useQuestionsStore'
import { Game } from './components/Game'
import { useEffect } from 'react'
import { GameOver } from './components/GameOver'

function App () {
  const questions = useQuestionsStore(state => state.questions)
  const endGame = useQuestionsStore(state => state.endGame)
  const calculatePoints = useQuestionsStore(state => state.calculatePoints)
  if (endGame) calculatePoints()
  return (
    <main>
      <Navbar />
      <div className='container'>
        {
        !endGame && (
          questions.length === 0 ? <Start /> : <Game />
        )
        }
        {endGame && <GameOver />}
      </div>
    </main>
  )
}

export default App
