class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

}
Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
  return value;
}

Stack.prototype.pop = function() {
  if (top === 0) {
    return null;
  }
  this.top--;
  var result = this.storage[this.top];
  delete this.storage[this.top];
  return result;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


