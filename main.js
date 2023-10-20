import { getFieldData } from "./api.js";
import { buildGraph, findAllPaths } from "./graph.js";
import getLogger from "./logger.js";

// Define an asynchronous main function to execute the program
async function main() {
  // Retrieve project and sub-project IDs from environment variables
  const projectId = process.env.PROJECT_ID;
  const subProjectId = process.env.SUB_PROJECT_ID;

  const startAssetId = "-MA1551S-odms4rVbJ8K";

  try {
    const fieldData = await getFieldData(projectId, subProjectId);

    // Log the API response to a file for reference
    const apiResponseLogger = getLogger("response.log");
    apiResponseLogger.info("API Response:", { response: fieldData });

    // Build a graph representation from the fetched field data
    const graphData = buildGraph(fieldData);

    // Log the graph data for debugging and analysis
    const graphLogger = getLogger("graph.log");
    graphLogger.info("graph:", { response: graphData });

    // Find all possible paths in the graph starting from the specified asset
    const paths = findAllPaths(graphData, startAssetId);

    // Log the discovered paths for reference and analysis
    const pathsLogger = getLogger("paths.log");
    pathsLogger.info("paths:", { response: paths });

    // Display the discovered paths as text to the console
    paths.forEach((path) => {
      console.log(path);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
