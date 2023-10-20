/**
 * Builds a graph representation of staged assets and connections from the provided data.
 *
 * @param {Object} data - The data object containing staged assets and connections.
 * @returns {Object} - A graph representation with staged assets and connections.
 *
 * This function processes the provided data to create a graph representation. It iterates through the staged assets and connections, preserving important information for each, such as IDs, names, and connection details. The resulting graph object contains two main sections: 'stagedAssets' and 'connections', each organized for efficient access to related data.
 */
function buildGraph({ connections, stagedAssets }) {
  const graph = {
    stagedAssets: {},
    connections: {},
  };

  // Process staged assets
  for (const stagedAssetId in stagedAssets) {
    const stagedAsset = stagedAssets[stagedAssetId];

    // Copy relevant data from the staged asset and structure it in the 'stagedAssets' section of the graph.
    graph.stagedAssets[stagedAssetId] = {
      id: stagedAsset.id,
      name: stagedAsset.name,
      connectionsAsFrom: stagedAsset.connectionsAsFrom,
      connectionsAsTo: stagedAsset.connectionsAsTo,
    };
  }

  // Process connections
  for (const connectionId in connections) {
    const connection = connections[connectionId];

    // Copy relevant data from the connection and structure it in the 'connections' section of the graph.
    graph.connections[connectionId] = {
      id: connection.id,
      from: connection.from,
      to: connection.to,
      params: { label: connection.params.label },
    };
  }

  return graph;
}

/**
 * Finds all possible paths in a given graph from a starting asset to all reachable assets using a Depth-First Search (DFS) approach.
 *
 * @param {object} graph - The graph object representing asset connections.
 * @param {string} startAssetId - The unique identifier of the asset to start the path from.
 * @param {string[]} currentPath - (Optional) The current path being explored (default is an empty array).
 * @param {Set} visited - (Optional) A set of visited asset IDs to prevent cycles (default is an empty Set).
 *
 * @returns {string[]} - An array of strings, each representing a unique path from the start asset to a destination.
 *
 * Algorithm:
 * - This function uses a Depth-First Search (DFS) approach to traverse the graph and find all possible paths.
 * - The DFS algorithm explores the graph by following these key principles:
 *   1. Recursive Exploration: The function explores as far as possible along one branch before backtracking, achieved through recursion.
 *   2. Stack-Like Behavior: Recursion effectively simulates a stack, with function calls pushed onto the call stack as deeper exploration occurs.
 *   3. Visiting and Marking: A 'visited' set is used to keep track of visited assets, preventing revisiting and infinite loops.
 *   4. Termination Conditions: The DFS terminates a path when it reaches an asset with no outgoing connections, effectively marking the end of a path.
 * - The function starts at a specified asset and explores all paths by recursively traversing the graph, backtracking when necessary.
 * - It records all found paths as strings and returns them in an array.
 *
 */
function findAllPaths(
  graph,
  startAssetId,
  currentPath = [],
  visited = new Set()
) {
  // Check if the start asset exists in the graph
  if (!graph.stagedAssets[startAssetId]) {
    console.log("Asset not found:", startAssetId);
    return [];
  }

  // Get the current asset from the graph
  const currentAsset = graph.stagedAssets[startAssetId];

  // Add the current asset ID to the current path
  currentPath.push(currentAsset.id);

  // Mark the current asset as visited
  visited.add(startAssetId);

  // Check if the current asset has no outgoing connections (end of the path)
  if (Object.keys(currentAsset.connectionsAsTo).length === 0) {
    console.log("Reached end of path:", currentPath);
    return [currentPath.join(" > ")]; // Return the path as a single string
  }

  let paths = [];

  // Explore all connections from the current asset
  for (const connectionId in currentAsset.connectionsAsTo) {
    // Add the connection ID to the current path
    currentPath.push(connectionId);

    // Get the connection details from the graph
    const connection = graph.connections[connectionId];
    const nextAssetId = connection.from; // used from (not to)

    // If the next asset has not been visited, recursively explore it
    if (!visited.has(nextAssetId)) {
      const newPaths = findAllPaths(
        graph,
        nextAssetId,
        [...currentPath], // Create a new copy of the current path
        visited
      );

      // Concatenate the new paths to the existing paths
      paths = paths.concat(newPaths);
    }
  }

  return paths;
}

export { buildGraph, findAllPaths };
