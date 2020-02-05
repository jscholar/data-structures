var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.first = 0,
  newQueue.last = 0,
  newQueue.storage = {},
  Object.assign(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
    return value;
  },

  dequeue: function() {
    if (this.first === this.last) {
      return null;
    } else {
      var next = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return next;
    }
  },

  size: function() {
    return Object.keys(this.storage).length;
  }

};
