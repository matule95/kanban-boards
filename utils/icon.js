import $http from 'axios'
const cache = {}

function isCached(icon) {
  return objectGet(icon, cache, false)
}

function getCached(icon) {
  return objectGet(icon, cache)
}
export const objectGet = (path, obj, defaultVal = null) => {
  return path.split('.').reduce((obj, path) => {
    return obj ? obj[path] : defaultVal
  }, obj)
}

export async function fetchIcon(icon) {
  if (isCached(icon)) return getCached(icon)
  const { data } = await $http.get(`/icons/${icon}.svg`)
  cache[icon] = data
  return data
}
