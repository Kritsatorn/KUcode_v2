import { db } from 'src/lib/db'

export const slideScripts = () => {
  return db.slideScript.findMany()
}

export const slideScript = ({ id }) => {
  return db.slideScript.findUnique({
    where: { id },
  })
}

export const createSlideScript = ({ input }) => {
  return db.slideScript.create({
    data: input,
  })
}

export const updateSlideScript = ({ id, input }) => {
  return db.slideScript.update({
    data: input,
    where: { id },
  })
}

export const deleteSlideScript = ({ id }) => {
  return db.slideScript.delete({
    where: { id },
  })
}

export const SlideScript = {
  Learning: (_obj, { root }) =>
    db.slideScript.findUnique({ where: { id: root.id } }).Learning(),
}
