var J = J || {};

J.Node = {

  create: function(value) {
    var self = J.Object.create(this);
    self.value = value || "n"+self.getObjectId();
    self.connectedNodes = J.NodeSet.create();
    return self;
  },

  connectTo: function(otherNode) {
    this.connectedNodes.add(otherNode);
    otherNode.connectedNodes.add(this);
    return this;
  },

  isConnectedTo: function(otherNode) {
    return this.connectedNodes.contains(otherNode);
  },

  toString: function() {
    return StringUtils.format("<Node {0}: [{1}]>", this.value, this.connectedNodes);
  }

};