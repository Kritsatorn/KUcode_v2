import { db } from 'src/lib/db'

export const sidebarScripts = () => {
  return db.sidebarScript.findMany()
}

export const sidebarScript = ({ id }) => {
  return db.sidebarScript.findUnique({
    where: { id },
  })
}

export const createSidebarScript = ({ input }) => {
  return db.sidebarScript.create({
    data: input,
  })
}

export const updateSidebarScript = ({ id, input }) => {
  return db.sidebarScript.update({
    data: input,
    where: { id },
  })
}

export const deleteSidebarScript = ({ id }) => {
  return db.sidebarScript.delete({
    where: { id },
  })
}
