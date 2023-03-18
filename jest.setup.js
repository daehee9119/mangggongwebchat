// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/user-event";
import { setConfig } from "next/config";
import config from "./next.config";

global.console = {
  log: jest.fn,
  warn: jest.fn,
  debug: jest.fn,
  error: jest.fn,
};

setConfig(config);
