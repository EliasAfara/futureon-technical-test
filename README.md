# FutureOn Code Test Repository

This repository contains a solution for the FutureOn Code Test, which focuses on subsea field design and data processing. The provided code and files demonstrate your ability to interact with an API, build a graph representation, and find paths within the data.

## Table of Contents

- [Code Test Description](#code-test-description)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Thoughts and Questions](#thoughts-and-questions)

## Code Test Description

The FutureOn Code Test involves building a subsea field design tool and working with its REST API. The test requires you to complete the following tasks:

1. Use the provided REST API to retrieve field data.
2. Generate a graph representation of staged assets and connections.
3. Find and display all possible paths starting from a specified staged asset.

## Project Structure

The project's file structure is organized as follows:

- **elias_logs_example**: A directory containing example log files used for reference and documentation.
- **api.js**: Contains functions for interacting with the provided REST API.
- **graph.js**: Includes functions for building a graph representation and finding paths in the graph.
- **logger.js**: A module for logging data to log files.
- **main.js**: The main program that orchestrates data retrieval, processing, and analysis.

## Usage

To use this code and run the program:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/EliasAfara/futureon-technical-test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd futureon-technical-test
   ```

3. Install the project's dependencies:

   ```bash
   npm install
   ```

4. Configuration

   Before running the project, you need to set up your configuration by creating an environment file. Follow these steps:

   **Create a Copy of the Environment File**: Start by creating a copy of the `.env.example` file and name it `.env`. You can do this by running:

   ```bash
   cp .env.example .env
   ```

5. Run the program:

   ```bash
   npm start
   ```

## Dependencies

This project relies on several external dependencies to function correctly. You can find the list of these dependencies and their versions below:

```json
"dependencies": {
  "dotenv": "^16.3.1",
  "node-fetch": "^3.3.2",
  "winston": "^3.11.0"
}
```

- **[dotenv](https://www.npmjs.com/package/dotenv)**: Used for loading environment variables from a .env file.
- **[node-fetch](https://www.npmjs.com/package/node-fetch)**: Provides a fetch API for making HTTP requests.
- **[winston](https://www.npmjs.com/package/winston)**: A logging library for creating log files.

## Thoughts and Questions

### Initial Impressions

I found the code test to be a valuable exercise in working with a complex data structure and integrating with an external API.

### Thought Process

1. **Data Retrieval**: The first step was to retrieve the data from the API. I used the provided API documentation to understand the structure of the data and the endpoints to use. I then used the `node-fetch` library to make HTTP requests to the API and retrieve the data. I also used the `dotenv` library to load the API token from the `.env` file.

2. **Graph Representation**: The next step was to build a graph representation of the data. After retrieving the data, my first thought was that it was very big to console log it, so I created a logger to write the data to a log file. I then used the log file to understand the structure of the data and how to build a graph representation.

   I used the `graph.js` file to create a `graph` object with `stagedAssets`, `connections`. It populates the `stagedAssets` and `connections` sections as nodes and edges based on the provided data.

   - `stagedAssets` in the `graph` object represents the nodes of the graph. Each staged asset is a node in the graph, and information about each staged asset is stored within this section. Each node includes properties like `id`, `name`, `connectionsAsFrom`, and `connectionsAsTo`.

   - `connections` in the `graph` object represents the edges of the graph. Each connection between staged assets is an edge in the graph, and information about each connection is stored within this section. Each edge includes properties like `id`, `from`, `to`, and `params`.

3. **Finding Paths**: The final step was to find all possible paths starting from a specified staged asset. I went online and did some reading on graph and found that utilizing a Depth-First Search (DFS) approach and leveraging recursion would be the best way to find all possible paths.

While going over the retrieved data, I have noticed that the `stagedAssets` `ids` are in alphabetical order D -> V and that `connections` `ids` ending with (a, b, c, w, x, y, z) are not staged.

### Questions and Challenges Faced

- I was not sure if the example path given "-MA1551S-odms4rVbJ8K > -MA1551S-odms4rVbJ8n > -MA1551S-odms4rVbJ8E > etc" was a correct path. I used this example as a base while trying to manual build the path but each time I got lost. That's why I am not sure if my solution for part 2 and 3 are correct.

- Visualisation of the data was a bit challenging, I have tried to use the jpeg image provided to help me visualize the paths but it was still difficult and bit confusing. Even for the provided link, I was not able to figure out how to use it. [View Link](https://master-presenter.futureon-qa.fieldtwin.com/-MIIeS15P3gFMIAd8cBC)

- I did not send an email and ask questions because I though that not that much time have gone since I started working on it yesterday. I thought that I should try to figure it out on my own and if I get stuck I will send an email. I hope that was the right thing to do.
