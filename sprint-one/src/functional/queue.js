var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = null;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (this.last === null) {
      this.last = 0;
    } else {
      this.last++;
    }
    this.storage[this.last] = value;
  };

  someInstance.dequeue = function() {
    if (this.size() === 0) {
      return null;
    } else {
      var next = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return next;
    }
  };

  someInstance.size = function() {
    return Object.keys(this.storage).length;
  };

  return someInstance;
};
