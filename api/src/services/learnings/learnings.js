import { db } from 'src/lib/db'

export const learnings = () => {
  return db.learning.findMany()
}

export const learning = ({ id }) => {
  return db.learning.findUnique({
    where: { id },
  })
}

export const createLearning = ({ input }) => {
  return db.learning.create({
    data: input,
  })
}

export const updateLearning = ({ id, input }) => {
  return db.learning.update({
    data: input,
    where: { id },
  })
}

export const deleteLearning = ({ id }) => {
  return db.learning.delete({
    where: { id },
  })
}
