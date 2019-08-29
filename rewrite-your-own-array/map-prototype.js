Array.prototype.myMap = function(callback) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    let newMappedItem = callback(this[i], i, this)
    newArray.push(newMappedItem)
  }
  return newArray
}
