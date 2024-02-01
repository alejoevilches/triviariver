import { create } from 'zustand'

export const useQuestionsStore = create((set) => {
  const questions = []
  const currentQuestion = 0
  const endGame = false
  const points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0

  const calculatePoints = () => {
    set((state) => {
      const { questions, points } = state
      console.log(questions)
      const newPoints = questions.reduce((acc, question) => {
        return acc + (question.isCorrectAnswer ? 1 : 0)
      }, 0)
      const totalPoints = newPoints + points
      localStorage.setItem('points', totalPoints)
      return { points: newPoints }
    })
  }

  const fetchQuestions = async (limit) => {
    const res = await fetch('public/data.json')
    const data = await res.json()
    const shuffledData = data.sort(() => Math.random() - 0.5)
    const questions = shuffledData.slice(0, limit)
    set({ questions })
  }

  const selectAnswer = (questionId, answerIndex) => {
    set((state) => {
      const { questions } = state
      const newQuestions = structuredClone(questions)
      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      const questionInfo = newQuestions[questionIndex]
      const isCorrectAnswer = questionInfo.answerIndex === answerIndex
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectAnswer,
        userSelectedAnswer: answerIndex
      }
      return { questions: newQuestions }
    })
  }

  const nextQuestion = () => {
    set((state) => {
      const { currentQuestion } = state
      const nextQuestion = currentQuestion + 1
      if (nextQuestion <= 2) {
        return { currentQuestion: nextQuestion }
      }
      return { endGame: true }
    })
  }

  return { questions, fetchQuestions, currentQuestion, selectAnswer, nextQuestion, endGame, points, calculatePoints }
})
