J.DfsBlueprints = function() {

  var DfsContainer = {
    create: function(graph, startingNode) {
      if (graph.contains(startingNode) === false) {
        throw("The specified starting node does not exist in this Graph: " + this.toString() );
      }

      var self = J.Object.create(this);

      self.graph = graph;
      self.seenNodes = J.NodeSet.create();
      self.seenNodes.add(startingNode);

      self.path = {};
      
      startingNode.parentPath = self.path;
      startingNode.currentPath = {};
      startingNode.parentPath[startingNode.value] = startingNode.currentPath

      return this.extend(self)
      
    },

    hasSeenNode: function(node) {
      return this.seenNodes.contains(node);
    },

    dfs: function(curNode, fn) {
      if ( typeof(fn) === "function" ) {
        fn(curNode);
      }

      curNode.connectedNodes.each(this, function(adjNode){
        if ( this.seenNodes.contains(adjNode) == false) {
          this.seenNodes.add(adjNode);

          adjNode.parentPath = curNode.currentPath;
          adjNode.currentPath = {};

          curNode.currentPath[adjNode.value] = adjNode.currentPath;

          this.dfs(adjNode, fn);
        }
      });
    }

  };

  this.findValueByDfs = function(startingNode, matchParameter) {
    
    var matchingNodes = J.SearchResults.create();

    var dfsContainer = DfsContainer.create(this, startingNode);
    dfsContainer.dfs(startingNode, function(curNode){
      if ( J.SearchHelpers.matches(curNode, matchParameter) ){
        matchingNodes.push(curNode);
      }
    });

    matchingNodes.path = dfsContainer.path;
    return matchingNodes;
  }

  this.topologicallySort = function(startingNode, matchParameter) {
    var sortedNodes = J.SearchResults.create();

    var dfsContainer = DfsContainer.create(this, startingNode);

    this.each(this, function(node){
      if (dsfContainer.hasSeenNode(node) === false) {

        dfsContainer.dfs(node, function(curNode){
          if (node.connectedNodes.isEmpty()) {
            
          }
        });

      }
    });

    matchingNodes.path = dfsContainer.path;
    return matchingNodes;
  }

};