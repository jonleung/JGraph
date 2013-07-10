var J = J || {};

J.Node = {

  create: function(value) {
    var self = J.Object.create(this);
    self.value = value || "n"+self.getObjectId();
    self.connectedNodes = J.NodeSet.create();
    return self;
  },

  connectTo: function(node) {
    this.connectedNodes.add(node)
    return this;
  },

  isConnectedTo: function(otherNode) {
    return this.connectedNodes.contains(node);
  },

  toString: function() {
    return StringUtils.format("<Node {0}: [{1}]>", this.value, this.connectedNodes);
  }

};