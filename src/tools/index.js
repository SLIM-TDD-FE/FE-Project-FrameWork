
// 解析路由路径为数组
// 将数组第一个元素默认设置为 'Home'
export function getPathArray (fullPath) {
  const pathArray = fullPath.split('/')
  pathArray[0] = 'Home'

  return pathArray
}
