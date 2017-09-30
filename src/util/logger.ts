type logFunctionType = (message: string, ...optionalParams: Array<any>) => void;
type logObjectType = {
  debug: logFunctionType;
  info: logFunctionType;
  warn: logFunctionType;
  error: logFunctionType;
  verbose: logFunctionType;
  http: logFunctionType;
  silly: logFunctionType;
};

/**
 * noop fn for default log behavior.
 */
const noopLog = (..._args: Array<any>) => {
  //noop
};

const log: Readonly<logObjectType> = {
  debug: noopLog,
  info: noopLog,
  warn: noopLog,
  error: noopLog,
  http: noopLog,
  verbose: noopLog,
  silly: noopLog
};

/**
 * Set logger for prints out internal behavior.
 * @param {logFunctionType | logObjectType} logger Logger object contains loglevel function (debug, info, warn, error)
 * or single function to log. If single function is provided, all loglevel will use given function.
 * If logger object is provided, it should have all loglevel function.
 */
function enableLogger(logger: logFunctionType): void;
function enableLogger(logger: Partial<logObjectType>): void;
function enableLogger(logger: logFunctionType | Partial<logObjectType>) {
  const isLogFunction = typeof logger === 'function';
  Object.keys(log).forEach(key => (log[key] = isLogFunction ? logger : logger[key] || noopLog));
}

export { logFunctionType, logObjectType, enableLogger, log };
