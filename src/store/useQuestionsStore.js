import { create } from 'zustand'

export const useQuestionsStore = create((set) => {
  const questions = []
  const currentQuestion = 0

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
      newQuestions[questionInfo] = {
        ...questionInfo,
        isCorrectAnswer,
        userSelectedAnswer: answerIndex
      }
      return { questions: newQuestions }
    })
  }

  const nextQuestion = () => {
    set((state) => {
      const { currentQuestion, questions } = state
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        return { currentQuestion: nextQuestion }
      }
    })
  }

  return { questions, fetchQuestions, currentQuestion, selectAnswer, nextQuestion }
})
