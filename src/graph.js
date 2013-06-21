var J = J || {}

J.Graph = function() {
  this.nodeSet = new J.NodeSet();
}

J.Graph.prototype.createNode = function(name) {
  var newNode = new J.Node();
  this.nodeSet.add( newNode );
  return newNode;
}
