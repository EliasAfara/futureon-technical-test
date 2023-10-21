import { getFieldData } from "./api.js";
import { buildGraph, findAllPaths } from "./graph.js";
import getLogger from "./logger.js";

// The ID of the starting asset
const startAssetId = "-MA1551S-odms4rVbJ8K";

// Function to log data to a file
async function logDataToFile(logger, data, logName) {
  logger.info(logName, { response: data });
}

// Function to fetch data and log it, handling errors
async function fetchDataAndLog(projectId, subProjectId) {
  try {
    const fieldData = await getFieldData(projectId, subProjectId);
    return fieldData;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return null;
  }
}

async function main() {
  const projectId = process.env.PROJECT_ID;
  const subProjectId = process.env.SUB_PROJECT_ID;

  // Fetch and log the field data
  const fieldData = await fetchDataAndLog(projectId, subProjectId);

  // Check if data was successfully fetched
  if (fieldData) {
    // Logging the API response
    const apiResponseLogger = getLogger("response.log");
    await logDataToFile(apiResponseLogger, fieldData, "API Response");

    // Build a graph representation from the fetched field data
    const graphData = buildGraph(fieldData);

    // Logging the graph data
    const graphLogger = getLogger("graph.log");
    await logDataToFile(graphLogger, graphData, "Graph Data");

    // Find all possible paths in the graph starting from the specified asset
    const paths = findAllPaths(graphData, startAssetId);

    // Logging the discovered paths
    const pathsLogger = getLogger("paths.log");
    await logDataToFile(pathsLogger, paths, "Paths");

    // Display the discovered paths as text to the console
    paths.forEach((path) => {
      console.log(path);
    });
  }
}

main();
