var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.top] = value;
    someInstance.top++;
    return value;
  };

  someInstance.pop = function() {
    if (top === 0) {
      return null;
    }
    someInstance.top--;
    var result = someInstance.storage[someInstance.top];
    delete someInstance.storage[someInstance.top];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
