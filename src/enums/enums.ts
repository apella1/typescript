enum LogLevel {
  DEBUG,
  INFO,
  ERROR,
}

const func = (logLevel: LogLevel.ERROR) => {};
const func2 = (logLevel: LogLevel.ERROR) => {};

// enums offering a single source of truth as the valuues
// can be edited right from the enum declaration