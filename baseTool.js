/**
 * 随机数0-10
 * @returns  返回的是 随机数0-10
 * 0 - 0.9999999
 */
function random0_10() { // 0-10
  return Math.floor(Math.random() * (10 + 1))
}

/**
 * 生成min-max的随机数？ 最大数和最小数都包含
 * @param {*} min 小的一个任意数
 * @param {*} max 大的一个任意数
 * @returns  返回的是任意数到任意数的值
 */
function getRandom(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 求数组的任意下标
 * @param {*} arrLength  数组的长度
 * @returns  数组中任意下标
 */
function getArrRandom(arrLength = 0) {
  return Math.floor(Math.random() * arrLength)
}


