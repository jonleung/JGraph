var J = J || {};

J.Graph = J.NodeSet.extend({

  create: function() {
    var self = J.NodeSet.create.call(this);
    J.SearchBlueprint.call(self);
    return self;
  },

  createNode: function(value) {
    var newNode = J.Node.create(value);
    this.add(newNode);
    return newNode;
  }

});