var J = J || {}

J.NodeSet = function() {
  this.hash = {};
  this.keys = []
}

J.NodeSet.prototype.add = function(node) {
  this.hash[node.id] = node;
}

J.NodeSet.prototype.remove = function(node) {
  this.hash[node.id] = undefined;
}

J.NodeSet.prototype.contains = function(node) {
  return this.hash[node.id] != undefined;
}

J.NodeSet.prototype.length = function() {
  return Object.keys(this.hash).length;
}
J.NodeSet.prototype.size = function() {
  return this.length;
}

J.NodeSet.prototype.clear = function() {
  this.hash = {}
}

J.NodeSet.prototype.toArray = function() {
  var nodeArray = new Array();
  for (var key in this.hash) {
    nodeArray.push( this.hash[key] );
  }
  return nodeArray;
}

J.NodeSet.prototype.iterable = function() {
  return this.hash
}