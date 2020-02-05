class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
    this.storage = {};
  }
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
  return value;
};

Queue.prototype.dequeue = function() {
  if (this.first === this.last) {
    return null;
  } else {
    var next = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return next;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};