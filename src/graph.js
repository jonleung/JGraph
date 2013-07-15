var J = J || {};

J.Graph = {

  create: function() {
    var self = this.extend(J.NodeSet.create())
    self.isDirected = false;
    J.SearchBlueprint.call(self);
    return self;
  },

  createNode: function(value) {
    var newNode = J.Node.create(value);
    newNode.graph = this;
    this.add(newNode);
    return newNode;
  }

};

J.DirectedGraph = {
  create: function() {
    return J.Graph.create().extend({
      isDirected: true
    })
  }
}