var J = J || {}

J.Graph = function() {
  this.nodeSet = new J.NodeSet();
}

J.Graph.prototype.createNode = function(name) {
  var newNode = new J.Node();
  this.nodeSet.add( newNode );
  return newNode;
}

J.Graph.prototype.nodes = function() {
  return this.nodeSet.toArray();
}

J.Graph.prototype.each = function(fn) {
  this.nodeSet.each(function(node){
    fn(node);
  });
}