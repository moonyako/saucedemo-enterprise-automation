## Why this project?
Instead of building a generic test script for a random site, I chose SauceDemo as the benchmark to intentionally focus on **advanced engineering patterns**. By working on a standardized platform, I can eliminate business logic ambiguity and shift 100% of the focus to demonstrating **framework scalability, architectural refactoring (from scratch to clean POM), and robust custom fixtures.**

## 🛠️ Tech Stack & Key Features
- **Language & Runtime:** TypeScript, Node.js
- **Testing Framework:** Playwright (E2E Test Runner)
- **Architecture Pattern:** Page Object Model (POM) for maximum maintainability and reusability.
- **Custom Fixtures:** Isolated test contexts and clean setup/teardown encapsulation to eliminate flaky tests.
- **Reporter & CI Ready:** Comprehensive HTML test reporting.

## 🏗️ Architecture & Project Structure
The project is structured following enterprise-level best practices to separate test logic from page interactions:
- `pages/`: Contains Page Object classes encapsulating UI elements and page-specific actions (e.g., Login, Inventory).
- `tests/`: Contains the actual test specs, keeping assertions declarative and clean.
- `fixtures/`: Custom Playwright fixtures to streamline authentication and test setup.
- `playwright.config.ts`: Centralized configuration for multi-browser execution, timeouts, and reporting.

## 🚀 Quick Start
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/moonyako/saucedemo-enterprise-automation.git]
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run tests:**
   ```bash
   npx playwright test
   ```
