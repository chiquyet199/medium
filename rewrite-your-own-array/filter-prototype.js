Array.prototype.myFilter = function(callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    let itemMatch = callback(this[i], i, this)
    if (itemMatch) result.push(this[i])
  }
  return result
}
