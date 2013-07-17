J = J || {};

J.SearchResults = {

  create: function() {
    var self = Object.create(Array.prototype);
    self.levels = [];
    return self;
  },

};

J.SearchHelpers = {

  matches: function(node, matchParameter) {
    if (typeof(a) === "function") {
      return matchParameter(node);
    }
    else {
      return node.value === matchParameter || node === matchParameter;
    }
  }

};