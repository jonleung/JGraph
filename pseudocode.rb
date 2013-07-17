#==================================
#= BFS

def bfs(start_node, value)

  # Datastructures
  unexplored_queue = Array.new
  seen_nodes = Set.new
  matching_nodes = Array.new

  # Initialize
  unexplored_queue << start_node
  seen_nodes.add(start_node)

  # Run
  while cur_node = unexplored_queue.shift do

    if cur_node.value == value
      matching_nodes << cur_node
    end
    
    cur_node.adj_nodes.each do |adj_node|
      if seen_nodes.include?(adj_node) == false
        unexplored_queue << adj_node
        seen_nodes.add(adj_node)
      end
    end

  end

  return matching_nodes
end

#==================================
#= Undirected Graph: Connected Components

class Graph

  def connected_components(graph)

    # Datastructures
    queue = Array.new
    seen_nodes = Set.new
    connected_components = []

    # Running
    self.nodes.each do |cur_node|
      if seen_nodes.include?(cur_node) == false

        cur_connected_components = []
        queue << cur_node

        while cur_node = queue.shift do
          queue.adj_nodes.each do |adj_node|
            if seen_nodes.include?(adj_node) == false
              stack.push(adj_node)
              seen_nodes.add(adj_node)
            end
          end
        end

        connected_components << cur_connected_components

      end

    end

    return connected_components
  end

end


#==================================
#= DFS

# Stack Implementation
def dfs(start_node, value)

  # Datastructures
  seen_nodes = Set.new
  stack = Array.new
  matching_nodes = Array.new

  # Initialization
  stack.push(start_node)
  seen_nodes.add(start_node)

  while cur_node = stack.pop do

    if cur_node.value == value
      @matching_nodes << cur_node
    end

    cur_node.adj_nodes.each do |adj_node|
      if seen_nodes.include?(adj_node) == false
        stack.push(adj_node)
        seen_nodes.add(adj_node)
      end
    end

  end

  return @matching_nodes
end

# Recursive Implementation
class DfsContainer

  def initialize
    @seen_nodes = Set.new
    @matching_nodes = Array.new
  end

  def run(start_node, desired_value)
    @desired_value = desired_value
    @seen_nodes.add(start_node)
    dfs(start_node)
    return @matching_nodes
  end

  def dfs(cur_node)
    if cur_node.value == @desired_value
      @matching_nodes << cur_node
    end

    cur_node.adj_nodes.each do |adj_node|
      if @seen_nodes.include?(adj_node) == false
        @seen_nodes.add(adj_node)
        dfs(adj_node)
      end
    end
  end

end


#==================================
#= Topological Sort

class Graph

  def topologicalSort(graph)

    # Datastructures
    stack = Array.new
    seen_nodes = Set.new
    
    # Initialization
    cur_rank = self.size

    # Running
    self.nodes.each do |cur_node|
      if seen_nodes.include?(cur_node) == false
        stack.push(cur_node) 

        while cur_node = stack.pop do
          cur_node.rank = cur_rank
          cur_rank -= 1
          
          cur_node.adj_nodes.each do |adj_node|
            if seen_nodes.include?(adj_node) == false
              stack.push(adj_node)
              seen_nodes.add(adj_node)
            end
          end
        end

      end
    end 

  end

end

#==================================
#= Directed Graph: Strongly Connected Componentsk

class Graph

  def connected_components
    phase1_ordering = get_first_ordering
    inverted_graph = self.inverted_graph
    return find_connected_components(inverted_graph, phase1_ordering)
  end


  def get_first_ordering(graph)

    # Datastructures
    stack = Array.new
    seen_nodes = Set.new
    
    # Initialization
    phase_1_ordering = []

    # Compute Phase 1 Ordering
    graph.nodes.each do |cur_node|
      if seen_nodes.include?(cur_node) == false
        stack.push(cur_node)

        while cur_node = stack.pop do
          phase_1_order << cur_node
          
          cur_node.adj_nodes.each do |adj_node|
            if seen_nodes.include?(adj_node) == false
              stack.push(adj_node)
              seen_nodes.add(adj_node)
            end
          end
        end

      end
    end

    return phase_1_ordering
  end

  def find_connected_components(inverted_graph, phase1_ordering)
    decreasing_order = phase1_ordering.reverse

    # Datastructures
    stack = Array.new
    seen_nodes = Set.new
    
    # Initialization
    connected_components = []

    # Compute Phase 1 Ordering
    decreasing_order.nodes.each do |cur_node|
      if seen_nodes.include?(cur_node) == false
        stack.push(cur_node)

        while cur_node = stack.pop do
          phase_1_order << cur_node
          
          cur_node.adj_nodes.each do |adj_node|
            if seen_nodes.include?(adj_node) == false
              stack.push(adj_node)
              seen_nodes.add(adj_node)
            end
          end
        end

      end
    end

    return phase_1_ordering
  end




end




#==================================
#= Shortest Path (Disktra)

#==================================
#= Minimum Spanning Tree (Kruskal)