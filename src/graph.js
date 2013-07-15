var J = J || {};

J.Graph = {

  create: function() {
    debugger
    var self = this.extend(J.NodeSet.create())
    J.SearchBlueprint.call(self);
    return self;
  },

  createNode: function(value) {
    var newNode = J.Node.create(value);
    this.add(newNode);
    return newNode;
  }

};