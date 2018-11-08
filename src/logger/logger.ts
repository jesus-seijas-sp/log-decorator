/**
 * Log interface
 */
import { injectable } from 'inversify';
import { Log, LogLevel } from './log';

/**
 * Basic class for a Logger that implements the interface Log.
 */
@injectable()
export abstract class Logger implements Log {
  public log(level: LogLevel, message: any) : void {
    switch (level) {
      case LogLevel.Trace:
        this.trace(message);
        break;
      case LogLevel.Debug:
        this.debug(message);
        break;
      case LogLevel.Info:
        this.info(message);
        break;
      case LogLevel.Warn:
        this.warn(message);
        break;
      case LogLevel.Error:
        this.error(message);
        break;
      case LogLevel.Fatal:
        this.fatal(message);
        break;
      default:
        this.debug(message);
    }
  }

  public abstract trace(message: any): void;

  public abstract debug(message: any): void;

  public abstract info(message: any): void;

  public abstract warn(message: any): void;

  public abstract error(message: any): void;

  public abstract fatal(message: any): void;
}
