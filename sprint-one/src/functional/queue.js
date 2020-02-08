var Queue = function() {
  var q = {};

  // Use an object with numeric keys to store values
  q.storage = {};
  q.first = 0;
  q.nextIn = 0;

  // Implement the methods below

  q.enqueue = function(value) {
    q.storage[q.nextIn] = value;
    q.nextIn++;
    return value;
  };

  q.dequeue = function() {
    if (q.first === q.nextIn) {
      return null;
    } else {
      var next = q.storage[q.first];
      delete q.storage[q.first];
      q.first++;
      return next;
    }
  };

  q.size = function() {
    return Object.keys(q.storage).length;
  };

  return q;
};
