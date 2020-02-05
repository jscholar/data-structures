var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.top = 0;
  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
    return value;
  },

  pop: function() {
    if (top === 0) {
      return null;
    }
    this.top--;
    var result = this.storage[this.top];
    delete this.storage[this.top];
    return result;
  },

  size: function() {
    return Object.keys(this.storage).length;
  },
};


