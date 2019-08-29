export const apiDataToStateObject = (items) => {
  const obj = {}
  items.forEach((item) => {
    obj[item.id] = item
  })
  return obj
}
