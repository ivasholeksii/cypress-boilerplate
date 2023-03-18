# Cypress Boilerplate

This repository provides a boilerplate setup for Cypress testing using JavaScript and TypeScript with Yarn as the package manager. It includes essential configurations and tools to ensure a clean and consistent codebase.

## Features

-   Cypress for end-to-end testing
-   JavaScript and TypeScript support
-   Yarn package manager
-   ESLint with Cypress plugins for linting
-   Husky for Git hooks
-   Lint-staged for staged files linting
-   Prettier for code formatting

## Prerequisites

-   Node.js >= 12.x
-   Yarn >= 1.22.x

## Installation

Clone the repository: `git clone https://github.com/ivasholeksii/cypress-boilerplate.git`

Change to the project directory: `cd cypress-boilerplate`

Install dependencies: `yarn install`

## Usage

To run Cypress tests in interactive mode: `yarn open-cypress`

To run Cypress test in CLI mode: `yarn test`

To lint your code using ESLint: `yarn lint`

## Configuration

### ESLint

The ESLint configuration is located in the `.eslintrc.json` file. You can customize the rules according to your preferences.

### Husky

Husky configuration is located in the `.husky` folder. You can add or modify Git hooks by editing the corresponding files.

### Prettier

The Prettier configuration is located in the `.prettierrc.json` file. You can customize the formatting options according to your preferences.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

[MIT](LICENSE)
