import fetch from "node-fetch";
import "dotenv/config";

// Define the base URL and API token using environment variables.
const baseUrl = process.env.BASE_URL;
const apiToken = process.env.API_TOKEN;

/**
 * A function to retrieve field data from the API.
 *
 * @param {string} projectId - The ID of the project.
 * @param {string} subProjectId - The ID of the subproject within the project.
 * @returns {Promise<Object>} The retrieved field data as an object.
 * @throws {Error} If an error occurs during the API request.
 */
async function getFieldData(projectId, subProjectId) {
  // Construct the API endpoint URL.
  const url = `${baseUrl}API/v1.9/${projectId}/subProject/${subProjectId}`;

  // Define the request headers, including the API token.
  const headers = {
    token: apiToken,
  };

  try {
    const response = await fetch(url, { headers });

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle and log any errors that occur during the request.
    console.error("Error while fetching field data:", error);
    throw error;
  }
}

export { getFieldData };
