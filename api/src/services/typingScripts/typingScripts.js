import { db } from 'src/lib/db'

export const typingScriptByLID = ({ learningId }) => {
  return db.typingScript.findMany({
    where: { learningId },
    orderBy: [{ order: 'asc' }],
  })
}

export const typingScripts = () => {
  return db.typingScript.findMany()
}

export const typingScript = ({ id }) => {
  return db.typingScript.findUnique({
    where: { id },
  })
}

export const createTypingScript = ({ input }) => {
  return db.typingScript.create({
    data: input,
  })
}

export const updateTypingScript = ({ id, input }) => {
  return db.typingScript.update({
    data: input,
    where: { id },
  })
}

export const deleteTypingScript = ({ id }) => {
  return db.typingScript.delete({
    where: { id },
  })
}
