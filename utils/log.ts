import winston ,{ createLogger, Logger, format } from "winston";

import DailyRotateFile from "winston-daily-rotate-file";

/**
 * Logging utility class using Winston for structured and persistent logging.
 *
 * - Logs are written to both the console and daily rotating log files.
 * - Console logs are colorized and simple for quick debugging during development.
 * - File logs are rotated daily with a maximum size of 10MB per file.
 * - File logs include timestamps and formatted messages for easier analysis.
 *
 * Usage:
 * ```ts
 * Log.logger.info('This is an info message');
 * Log.logger.error('This is an error message');
 * ```
 *
 * @class Log
 * @static logger {Logger} A Winston logger instance configured with console and file transports.
 */
export class Log{
    static logger:Logger = createLogger({
        transports: [
          new winston.transports.Console({
            format: format.combine(
              format.colorize(),
              format.simple(),
              //format.prettyPrint()
            )
          }),
          new DailyRotateFile({
            filename: './logs/logs-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '10m',
            level: 'info',
            format: format.combine(
              format.timestamp(),
              format.printf( (info) => `${info.timestamp} - [${info.level}]: ${info.message}`,)
            )
        })
        ]
      });
}