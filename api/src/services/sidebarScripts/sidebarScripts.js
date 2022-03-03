import { db } from 'src/lib/db'

export const sideBarScripts = () => {
  return db.sideBarScript.findMany()
}

export const sideBarScript = ({ id }) => {
  return db.sideBarScript.findUnique({
    where: { id },
  })
}

export const createSideBarScript = ({ input }) => {
  return db.sideBarScript.create({
    data: input,
  })
}

export const updateSideBarScript = ({ id, input }) => {
  return db.sideBarScript.update({
    data: input,
    where: { id },
  })
}

export const deleteSideBarScript = ({ id }) => {
  return db.sideBarScript.delete({
    where: { id },
  })
}

export const SideBarScript = {
  Learning: (_obj, { root }) =>
    db.sideBarScript.findUnique({ where: { id: root.id } }).Learning(),
}
