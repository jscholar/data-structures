var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.last] = value;
    someInstance.last++;
    return value;
  };

  someInstance.dequeue = function() {
    if (someInstance.first === someInstance.last) {
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
