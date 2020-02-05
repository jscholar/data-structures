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
    if (this.storage[this.first] === undefined) {
      return null;
    } else {
      this.first++;
      return this.storage[this.first - 1];
    }
  };

  someInstance.size = function() {
    return Object.keys(this.storage).length;
  };

  return someInstance;
};
