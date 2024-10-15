# PetClinic Test Automation

This project contains automated tests for the PetClinic application using Cypress. The tests cover various functionalities of the PetClinic API, including specialties, pet owners, and vets.

## Table of Contents

- [Project Setup](#project-setup)
- [Running the Tests](#running-the-tests)
- [Test Structure](#test-structure)
- [Additional Information](#additional-information)

---

## Project Setup

### Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Hlulani/spring-petclinic-rest-qa.git
    ```

2. Navigate into the project directory:

    ```bash# PetClinic Test Automation

This project contains automated tests for the PetClinic application using Cypress. The tests cover various functionalities of the PetClinic API, including specialties, pet owners, and vets.

## Table of Contents

- [Project Setup](#project-setup)
- [Running the Tests](#running-the-tests)
- [Test Structure](#test-structure)
- [Additional Information](#additional-information)

---

## Project Setup

### Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/)

Additionally, ensure that the **PetClinic backend is running** on `http://localhost:9966/petclinic` before running the Cypress tests. You can start the backend locally using the following command:

```bash
./mvnw spring-boot:run

    cd petclinic-test-automation
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

### Cypress Configuration

Make sure Cypress is properly set up by verifying the `cypress.config.ts` file is in place and configured for your environment.

If Cypress configuration is missing or incorrect, refer to [Cypress Docs](https://docs.cypress.io) for more details on setting up.

---

## Running the Tests

### Run All Tests in Headless Mode

To run the tests without opening the Cypress UI (headless mode):

```bash
npx cypress run


Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Hlulani/spring-petclinic-rest-qa.git
Navigate into the project directory:

bash
Copy code
cd petclinic-test-automation
Install the project dependencies:

bash
Copy code
npm install
Cypress Configuration
Make sure Cypress is properly set up by verifying the cypress.config.ts file is in place and configured for your environment.

If Cypress configuration is missing or incorrect, refer to Cypress Docs for more details on setting up.

----

Running the Tests
Ensure Backend is Running
Before running the tests, ensure that the PetClinic backend is running on:

bash
Copy code
http://localhost:9966/petclinic
If the backend is not running, start it using the following command:

bash
Copy code
./mvnw spring-boot:run
Run All Tests in Headless Mode
To run the tests without opening the Cypress UI (headless mode):

bash
Copy code
npx cypress run
Run Tests in Interactive Mode (with Cypress UI)
To open Cypress in interactive mode:

bash
Copy code
npx cypress open
Once Cypress opens, select the test you wish to run.

Run a Specific Test File
If you wish to run a specific test file (e.g., specialty tests):

bash
Copy code
npx cypress run --spec "cypress/e2e/specialty/addSpeciality.cy.js"
Test Structure
The tests are organized in the cypress/e2e/ folder and cover the following features:

Specialty Tests: cypress/e2e/specialty/

Create, Update, Get, and Delete specialty operations.
Pet Owner Tests: cypress/e2e/pet-owner/

Create, Update, Get, and Delete pet owner operations.
Vet Tests: cypress/e2e/vet/

Create, Update, Get, and Delete vet operations.
