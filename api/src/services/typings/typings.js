import { db } from 'src/lib/db'

export const typings = () => {
  return db.typing.findMany()
}

export const typing = ({ id }) => {
  return db.typing.findUnique({
    where: { id },
  })
}

export const Typing = {
  TypingScript: (_obj, { root }) =>
    db.typing.findUnique({ where: { id: root.id } }).TypingScript(),
}
