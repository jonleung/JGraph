var J = J || {}

J.NodeSet = function() {
  this.hash = {};
}

J.NodeSet.prototype.add = function(node) {
  this.hash[node] = node;
}

J.NodeSet.prototype.remove = function(node) {
  this.hash[node] = undefined;
}

J.NodeSet.prototype.contains = function(node) {
  return this.hash[node] != undefined;
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

J.NodeSet.prototype.each = function(fn) {
  for (var key in this.hash) {
    fn( this.hash[key] );
  }
}