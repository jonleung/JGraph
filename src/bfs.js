J.BfsBlueprints = function() {

 this.findValueByBfs = function(startingNode, matchParameter)  {
   if (this.contains(startingNode) === false) {
     throw("The specified starting node does not exist in this Graph: " + this.toString() );
   }


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

     if ( J.SearchHelpers.matches(nodeToBeExplored, matchParameter) ) {
       matchingNodes.push(nodeToBeExplored);
     }

     nodeToBeExplored.connectedNodes.each(this, function(adjNode){
       if ( seenNodes.contains(adjNode) == false) {
         adjNode._tempBfsLevel = nodeToBeExplored._tempBfsLevel + 1;
         matchingNodes.levels[adjNode._tempBfsLevel] = matchingNodes.levels[adjNode._tempBfsLevel] || []
         matchingNodes.levels[adjNode._tempBfsLevel].push(adjNode);

         seenNodes.add(adjNode);
         unexploredQueue.push(adjNode);
       }
       
     });

   }

   this.each(this, function(node){
     delete node._tempBfsLevel;
   });

   return matchingNodes;
 }

  
}