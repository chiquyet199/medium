Array.prototype.myReduce = function(callback, initialValue) {
  for (let i = 0; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this)
  }
  return initialValue
}
