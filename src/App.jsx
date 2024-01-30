import { Navbar } from './components/Navbar'
import { Start } from './components/Start'
import './App.css'
import { useQuestionsStore } from './store/useQuestionsStore'
import { Game } from './components/Game'

function App () {
  const questions = useQuestionsStore(state => state.questions)
  return (
    <main>
      <Navbar />
      <div className='container'>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </div>
    </main>
  )
}

export default App
