export enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  ERROR = "ERROR",
}

console.log(LogLevel.INFO);

const func = (logLevel: LogLevel.ERROR) => {};
export const func2 = (logLevel: LogLevel.INFO) => {};

// enums offering a single source of truth as the values
// can be edited right from the enum declaration

export const shapes = {
  circle: "circle",
  square: "square",
  rectangle: "rectangle",
  hexagon: "hexagon",
} as const;

export type Shape = typeof shapes[keyof typeof shapes];

const resolveShape = (shape: Shape) => {};

resolveShape("rectangle")

// ! Drawbacks of enums
