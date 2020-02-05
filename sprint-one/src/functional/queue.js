var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.first = null;
  someInstance.last = null;

  // Implement the methods below

  someInstance.enqueue = function(value) {
  };

  someInstance.dequeue = function() {

  };

  someInstance.size = function() {
    return Object.keys(this.storage).length;
  };

  return someInstance;
};
