export const tips = () => {
  return db.tip.findMany()
}

export const tip = ({ id }) => {
  return db.tip.findOne({
    where: { id },
  })
}

export const createTip = ({ input }) => {
  return db.tip.create({
    data: input,
  })
}

export const updateTip = ({ id, input }) => {
  return db.tip.update({
    data: input,
    where: { id },
  })
}

export const deleteTip = ({ id }) => {
  return db.tip.delete({
    where: { id },
  })
}
