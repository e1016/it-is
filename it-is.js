(function (global, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    global.is = factory();
  }
})(this, function() {
  return {
    String: function (it) {
      return (
        typeof it === 'string'
      )
    },
    Number: function(it) {
      return (
        typeof it === 'number'
      )
    },
    Integer: function(it) {
      return (
        typeof it === 'number' &&
        it % 1 === 0
      )
    },
    Floating: function(it) {
      return (
        typeof it === 'number' &&
        it % 1 !== 0
      )
    },
    Function: function(it) {
      return (
        typeof it === 'function'
      )
    },
    Object: function(it) {
      return (
        typeof it === 'object'
      )
    },
    Array: function (it) {
      return (
        typeof it === 'object' &&
        it.length !== undefined &&
        it.length !== null
      )
    }
  }
})
