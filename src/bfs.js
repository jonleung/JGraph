var J = J || {};

/*
  [
    [1,2],
    [2,4],
    [2,3,3]
  ]
*/

J.Graph.bfsFind = function(nameToFind, startingNode) {
  var unexploredQueue = new Array();
  var seenSet = new nodeSet();

  var isSeen = function(node) {
    return seenHash.contains(node)
  }
  var see = function(node) {
    seenHash.add(node)
  }

  unexploredQueue.push(startingNode);

  while(unexploredQueue.length != 0) {
    var curNode = unexploredQueue.shift();
    if (curNode.name === nameToFind) {
      return curNode;
    }
    for (var connectedNode in curNode.connectedNodes) {
      if ( !isSeen(connectedNode) ) {
        see(connectedNode);
        unexploredQueue.add(connectedNode)
      }
      else {
        
      }
    }
  }


}

