# PetClinic Test Automation

This project contains automated tests for the PetClinic application using Cypress. The tests cover various functionalities of the PetClinic API, including specialties, pet owners, and vets.

## Table of Contents

- [Project Setup](#project-setup)
- [Running the Tests](#running-the-tests)
- [Test Structure](#test-structure)
- [GitHub Actions](#github-actions)
- [Additional Information](#additional-information)

---

## Project Setup

### Prerequisites

1. **Node.js**: Ensure that you have [Node.js](https://nodejs.org/) installed (v12.x or higher).
2. **npm**: [npm](https://www.npmjs.com/) comes with Node.js.
3. **Cypress**: Cypress must be installed for running tests.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Hlulani/spring-petclinic-rest-qa.git
    cd spring-petclinic-rest-qa
    ```

2. Install the project dependencies:

    ```bash
    npm install
    ```

### Cypress Configuration

Make sure Cypress is properly set up by verifying the `cypress.config.ts` file is in place and configured for your environment. If the configuration is missing or incorrect, refer to the [Cypress Docs](https://docs.cypress.io) for more details.

---

## Running the Tests

### Ensure Backend is Running

Before running the tests, ensure that the **PetClinic backend** is running on:

    http://localhost:9966/petclinic

If the backend is not running, start it using the following command:

    ./mvnw spring-boot:run

### Run All Tests in Headless Mode

To run the tests without opening the Cypress UI (headless mode):

    npx cypress run

### Run Tests in Interactive Mode (with Cypress UI)

To open Cypress in interactive mode:

    npx cypress open

Once Cypress opens, select the test you wish to run.

### Run a Specific Test File

If you wish to run a specific test file (e.g., specialty tests):

    npx cypress run --spec "cypress/e2e/specialty/addSpeciality.cy.js"

---

## Test Structure

The tests are organized in the `cypress/e2e/` folder and cover the following features:

- **Specialty Tests**: `cypress/e2e/specialty/`
  - Create, Update, Get, and Delete specialty operations.

- **Pet Owner Tests**: `cypress/e2e/pet-owner/`
  - Create, Update, Get, and Delete pet owner operations.

- **Vet Tests**: `cypress/e2e/vet/`
  - Create, Update, Get, and Delete vet operations.
 
- **Pet Type Tests**: `cypress/e2e/pet-types/`
  - Create, Update, Get, and Delete vet operations.

---

## GitHub Actions

This project uses **GitHub Actions** for Continuous Integration (CI) to automatically run the Cypress tests when code is pushed or pull requests are opened.

### GitHub Actions Setup

A workflow file named `cypress.yml` is located in `.github/workflows/`. It is configured to:

- Run the tests in headless mode on push and pull request events for the main branch.

### Workflow Summary:

```yaml
name: Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  run-tests:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run --headless
        env:
          CYPRESS_BASE_URL: "http://localhost:9966/petclinic"
