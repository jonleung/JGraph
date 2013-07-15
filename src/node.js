var J = J || {};

J.Node = {

  create: function(value) {
    var self = J.Object.create();
    self.value = value || "n"+self.getObjectId(),
    self.connectedNodes = J.NodeSet.create()
    return this.extend(self)
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
    debugger
    return this.wrappedToString( StringUtils.format("value: {0}: => {1}>", this.value, this.connectedNodes) );
  }

};