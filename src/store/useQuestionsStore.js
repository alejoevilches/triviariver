import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useQuestionsStore = create(persist((set) => {
  const questions = []
  const currentQuestion = 0

  const fetchQuestions = async (limit) => {
    const res = await fetch('public/data.json')
    const data = await res.json()
    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
    set({ questions })
  }

  const selectAnswer = (questionId, answerIndex) => {
    set((state) => {
      const { questions } = state
      const newQuestions = structuredClone(questions)
      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      const questionInfo = newQuestions[questionIndex]
      const isCorrectAnswer = questionInfo.answerIndex === answerIndex
      newQuestions[questionInfo] = {
        ...questionInfo,
        isCorrectAnswer,
        userSelectedAnswer: answerIndex
      }
      return { questions: newQuestions }
    })
  }

  return { questions, fetchQuestions, currentQuestion, selectAnswer }
}))
