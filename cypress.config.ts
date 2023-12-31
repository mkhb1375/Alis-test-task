import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    baseUrl: "http://localhost:5000/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
