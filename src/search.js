J = J || {};

J.SearchBlueprint = function() {

  this.findByValue = function(startingNode, soughtValue, strategy) {
    strategy = strategy.toLowerCase();

    if(strategy === "bfs") {
      var algo = this.findValueByBfs;
    }
    else if(strategy === "dfs") {
      var algo = this.findValueByDfs;
    }
    else {
      throw( StringUtils.format("{0} is an invalid findByValue format!", strategy) );
    }

    return algo.call(this, startingNode, soughtValue);
  };

  var matches = function(node, matchParameter) {
    if (typeof(a) === "function") {
      return matchParameter(node);
    }
    else {
      return node.value === matchParameter || node === matchParameter;
    }
  };

  ensureValidStartingNode = function(startingNode) {
    if (this.contains(startingNode) === false) {
      throw("The specified starting node does not exist in this Graph: " + this.toString() );
    }
  };

  this.findValueByDfs = function(startingNode, matchParameter) {
    ensureValidStartingNode.call(this, startingNode);

    var seenNodes = J.NodeSet.create();
    var matchingNodes = J.SearchResults.create();
    
    (function initialize(){
      seenNodes.add(startingNode);
      matchingNodes.path = {};

      startingNode.parentPath = matchingNodes.path;
      startingNode.currentPath = {};

      startingNode.parentPath[startingNode.value] = startingNode.currentPath
    })();

    (function dfs(curNode) {

      if ( matches(curNode, matchParameter) ) {
        matchingNodes.push(curNode);
      }

      curNode.connectedNodes.each(function(adjNode){

        if ( seenNodes.contains(adjNode) == false) {
          seenNodes.add(adjNode);

          adjNode.parentPath = curNode.currentPath;
          adjNode.currentPath = {};

          curNode.currentPath[adjNode.value] = adjNode.currentPath;

          dfs(adjNode);
        }
        
      });
    })(startingNode);

    return matchingNodes;
  }


  this.findValueByBfs = function(startingNode, matchParameter)  {
    ensureValidStartingNode.call(this, startingNode);

    var seenNodes = J.NodeSet.create();
    var unexploredQueue = Object.create(Array.prototype);
    var matchingNodes = J.SearchResults.create();

    (function initialize(){
      seenNodes.add(startingNode);
      unexploredQueue.push(startingNode);
      startingNode._tempBfsLevel = 0;
      matchingNodes.levels[startingNode._tempBfsLevel] = [startingNode];
    })();

    for(var nodeToBeExplored = unexploredQueue.shift(); nodeToBeExplored !== undefined; nodeToBeExplored = unexploredQueue.shift() ){

      if ( matches(nodeToBeExplored, matchParameter) ) {
        matchingNodes.push(nodeToBeExplored);
      }

      nodeToBeExplored.connectedNodes.each(function(adjNode){
        if ( seenNodes.contains(adjNode) == false) {
          adjNode._tempBfsLevel = nodeToBeExplored._tempBfsLevel + 1;
          matchingNodes.levels[adjNode._tempBfsLevel] = matchingNodes.levels[adjNode._tempBfsLevel] || []
          matchingNodes.levels[adjNode._tempBfsLevel].push(adjNode);

          seenNodes.add(adjNode);
          unexploredQueue.push(adjNode);
        }
        
      });

    }

    this.each(function(node){
      delete node._tempBfsLevel;
    });

    return matchingNodes;
  }

};

J.SearchResults = Array.extend({

  create: function() {
    var self = Object.create(Array.prototype);
    self.levels = [];
    return self;
  },

});