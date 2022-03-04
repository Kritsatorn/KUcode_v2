import { db } from 'src/lib/db'

export const cursorScriptByLID = ({ learningId }) => {
  return db.cursorScript.findMany({
    where: { learningId },
    orderBy: [{ order: 'asc' }],
  })
}

export const cursorScripts = () => {
  return db.cursorScript.findMany()
}

export const cursorScript = ({ id }) => {
  return db.cursorScript.findUnique({
    where: { id },
  })
}

export const createCursorScript = ({ input }) => {
  return db.cursorScript.create({
    data: input,
  })
}

export const updateCursorScript = ({ id, input }) => {
  return db.cursorScript.update({
    data: input,
    where: { id },
  })
}

export const deleteCursorScript = ({ id }) => {
  return db.cursorScript.delete({
    where: { id },
  })
}
