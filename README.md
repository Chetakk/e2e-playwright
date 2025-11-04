# e2e-playwright

End-to-end testing project using Playwright for testing web applications.

## 📋 Overview

This project contains automated E2E tests for web application testing using Playwright. It demonstrates:

- Form authentication testing
- Page Object Model (POM) pattern
- Multi-browser testing (Chromium, Firefox, WebKit)
- CI/CD integration with GitHub Actions

## 🚀 Prerequisites

- Node.js (v20 or higher)
- npm or yarn

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Chetakk/e2e-playwright.git
cd e2e-playwright
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## 🏃 Running Tests

Run all tests:

```bash
npm test
```

Run tests in UI mode (interactive):

```bash
npm run test:ui
```

Run tests in headed mode (visible browser):

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

## 📁 Project Structure

```
e2e-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml    # GitHub Actions CI/CD workflow
├── pages/
│   └── LoginPage.js          # Page Object Model for login page
├── tests/
│   └── login.spec.js         # Test specifications
├── playwright.config.js       # Playwright configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## ⚙️ Configuration

The project is configured to test against `https://the-internet.herokuapp.com` by default. The configuration includes:

- **Test Directory**: `tests/`
- **Timeout**: 30 seconds per test
- **Retries**: 1 retry on failure
- **Browsers**: Chromium, Firefox, WebKit
- **Screenshots**: Captured on failure
- **Videos**: Retained on failure
- **Traces**: Collected on first retry

## 🧪 Test Cases

### Form Authentication Tests

1. **Successful Login**: Validates that a valid login redirects to the secure area
2. **Invalid Login**: Validates that invalid credentials show an error message
3. **POM Login**: Demonstrates Page Object Model pattern usage

## 🔄 CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:

- Runs tests on push and pull requests
- Tests across multiple browsers
- Uploads test reports as artifacts

## 🛠️ Technologies

- [Playwright](https://playwright.dev/) - Modern end-to-end testing framework
- Node.js - JavaScript runtime
- GitHub Actions - CI/CD platform

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Issues

Report issues at: https://github.com/Chetakk/e2e-playwright/issues
