import { createLogger, transports, format } from "winston";
import fs from "fs";
import path from "path";

// Define the directory where log files will be stored
const logDirectory = "logs";

// Ensure the log directory exists; create it if not
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Define a custom log format for the logger
const customFormat = format.printf(({ message, response }) => {
  // Custom format for log messages, including 'message' and 'response'
  return `${message}\n${JSON.stringify(response, null, 2)}`;
});

/**
 * Creates and configures a Winston logger for logging to a file.
 *
 * @param {string} logFileName - The name of the log file to create.
 * @returns {object} - A configured Winston logger instance.
 */
function getLogger(logFileName) {
  // Create the full log file path by joining the log directory and the provided log file name
  const logFilePath = path.join(logDirectory, logFileName);

  // Create a new logger instance with 'winston'
  const logger = createLogger({
    transports: [
      new transports.File({
        filename: logFilePath,
        options: { flags: "w" }, // Set write mode to overwrite if the file already exists
      }),
    ],
    format: format.combine(format.timestamp(), format.json()), // Configure log timestamp and JSON format
  });

  // Apply the custom log format to the logger
  logger.format = customFormat;

  return logger;
}

export default getLogger;
