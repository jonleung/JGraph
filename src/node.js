// http://stackoverflow.com/questions/12720771/adjacency-list-and-graph

var J = J || {};

J.Node = function(name) {
  this.id = ++J.Node.nodeCounter;
  this.name = name || "n{0}".format(this.id);
  this.adjacencyList = new J.NodeSet();
}

J.Node.nodeCounter = 0

J.Node.prototype.connect = function(node) {
  this.adjacencyList.add(node);
  node.adjacencyList.add(this)
}

J.Node.prototype.isConnectedTo = function(node) {
  return this.adjacencyList.contains(node)
}

J.Node.prototype.toString = function() {
  return StringUtils.format("<Node {0}: {1}", this.name, this.nodeList)
}

J.Node.prototype.connectedNodes = function() {
  return this.adjacencyList;
}