var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = null;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.last === null) {
      someInstance.last = 0;
    } else {
      someInstance.last++;
    }
    someInstance.storage[someInstance.last] = value;
    return value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() === 0) {
      return null;
    } else {
      var next = someInstance.storage[someInstance.first];
      delete someInstance.storage[someInstance.first];
      someInstance.first++;
      return next;
    }
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
