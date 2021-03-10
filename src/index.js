module.exports = function reverse (n) {
    n > 0 ? n : n = n*(-1)
    let newArr = n.toString().split('')
    let newStr = ''
  
    for (let i = newArr.length; i > 0; i--){
        newStr += newArr[i-1]
    }
  return Number(newStr)
}
