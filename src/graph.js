var J = J || {};

J.Graph = {

  create: function() {
    var self = J.Object.create(this);
    self.nodes = J.NodeSet.create();
    return self;
  },

  createNode: function(value) {
    var newNode = J.Node.create(value);
    this.nodes.add(newNode);
    return newNode;
  },

  toNodeArray: function() {
    return this.nodes.toArray();
  },

  each: function(fn) {
    this.nodes.each(function(node){
      fn(node);
    });
  }

}