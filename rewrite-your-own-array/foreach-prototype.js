Array.prototype.myForeach = function(callback){
  //this keyword reference to the array itself
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}