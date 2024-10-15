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

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/)

Additionally, ensure that the **PetClinic backend is running** on `http://localhost:9966/petclinic` before running the Cypress tests. You can start the backend locally using the following command:

``bash
./mvnw spring-boot:run


---
### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Hlulani/spring-petclinic-rest-qa.git
    ```

2. Navigate into the project directory:

    ```bash
    cd spring-petclinic-rest-qa
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

### Cypress Configuration

Make sure Cypress is properly set up by verifying the `cypress.config.ts` file is in place and configured for your environment.

If Cypress configuration is missing or incorrect, refer to [Cypress Docs](https://docs.cypress.io) for more details on setting up.


