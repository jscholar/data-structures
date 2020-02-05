var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
