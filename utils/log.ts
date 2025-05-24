import winston ,{ createLogger, Logger, format } from "winston";

import DailyRotateFile from "winston-daily-rotate-file";

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