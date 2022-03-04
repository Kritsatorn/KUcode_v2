import { db } from 'src/lib/db'

export const imageByLID = ({ learningId }) => {
  return db.image.findMany({ where: { learningId } })
}

export const images = () => {
  return db.image.findMany()
}

export const image = ({ id }) => {
  return db.image.findUnique({
    where: { id },
  })
}

export const createImage = ({ input }) => {
  return db.image.create({
    data: input,
  })
}

export const updateImage = ({ id, input }) => {
  return db.image.update({
    data: input,
    where: { id },
  })
}

export const deleteImage = ({ id }) => {
  return db.image.delete({
    where: { id },
  })
}

export const Image = {
  Learning: (_obj, { root }) =>
    db.image.findUnique({ where: { id: root.id } }).Learning(),
}
