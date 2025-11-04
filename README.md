# e2e-playwright

End-to-end testing project using Playwright for testing web applications.

## 📋 Overview

This project contains automated E2E tests for web application testing using Playwright. It demonstrates:

- Comprehensive test coverage with 252 tests across 25 test files
- Page Object Model (POM) pattern with 8 reusable page objects
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
│       └── playwright.yml           # GitHub Actions CI/CD workflow
├── pages/                            # Page Object Model classes
│   ├── AddRemoveElementsPage.js     # Add/Remove elements interactions
│   ├── DragAndDropPage.js           # Drag and drop functionality
│   ├── FileUploadPage.js            # File upload operations
│   ├── FramesPage.js                # Iframe and nested frames
│   ├── HoversPage.js                # Hover interactions
│   ├── JavaScriptAlertsPage.js     # Alert, confirm, prompt dialogs
│   ├── LoginPage.js                 # Form authentication
│   └── SortableDataTablesPage.js    # Table interactions
├── tests/                            # Test specifications (25 files)
│   ├── login.spec.js
│   ├── addRemoveElements.spec.js
│   ├── checkboxes.spec.js
│   ├── dragAndDrop.spec.js
│   └── ... (21 more test files)
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies and scripts
└── README.md                         # Project documentation
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

The project includes comprehensive test coverage for **The Internet Heroku App** with **252 tests** across **25 test files** covering:

### Core Features

- **Form Authentication** - Login with valid/invalid credentials, POM pattern
- **Add/Remove Elements** - Dynamic element addition and removal
- **Checkboxes** - Checkbox interactions and toggling
- **Dropdown** - Select dropdown options and validation
- **Inputs** - Number input validation and keyboard interactions

### Advanced Interactions

- **Drag and Drop** - Element dragging between containers
- **Hovers** - Mouse hover interactions and profile displays
- **JavaScript Alerts** - Alert, Confirm, and Prompt dialogs
- **Key Presses** - Keyboard event detection
- **Context Menu** - Right-click context menu handling

### File Operations

- **File Upload** - File selection and upload functionality
- **File Download** - File download verification

### Dynamic Content

- **Dynamic Content** - Content refresh and validation
- **Dynamic Loading** - Elements that load after trigger
- **Infinite Scroll** - Scroll-triggered content loading

### Frames & Windows

- **Frames** - Iframe content access and interaction
- **Nested Frames** - Multi-level frame navigation
- **Multiple Windows** - New window handling and navigation
- **WYSIWYG Editor** - Rich text editor interaction

### UI Components

- **Sortable Data Tables** - Table sorting and data access
- **Horizontal Slider** - Range slider interactions
- **Floating Menu** - Menu persistence on scroll
- **Notification Messages** - Notification display and dismissal

### Navigation & Status

- **Status Codes** - HTTP status code navigation (200, 301, 404, 500)
- **Redirect Link** - Redirect functionality

### Visual Testing

- **Broken Images** - Image loading validation

All tests run across **Chromium, Firefox, and WebKit** browsers for cross-browser compatibility.

## 📦 Page Object Model (POM)

The project implements the Page Object Model pattern to improve code maintainability and reusability. The following page objects are available:

### Available Page Objects

- **`LoginPage`** - Handles form authentication, login, and logout operations
- **`JavaScriptAlertsPage`** - Manages JavaScript alert, confirm, and prompt dialogs
- **`SortableDataTablesPage`** - Provides methods for table interactions, sorting, and data access
- **`FileUploadPage`** - Handles file upload operations with helper methods for test file management
- **`DragAndDropPage`** - Manages drag and drop interactions between elements
- **`HoversPage`** - Handles hover interactions and user profile displays
- **`AddRemoveElementsPage`** - Manages dynamic element addition and removal
- **`FramesPage`** - Handles iframe and nested frame interactions

### Using Page Objects

Example usage in tests:

```javascript
const LoginPage = require("../pages/LoginPage");

test("login test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("username", "password");
  await expect(loginPage.flash).toContainText("Success");
});
```

### Benefits

- **Reusability**: Encapsulate page logic for reuse across multiple tests
- **Maintainability**: Update selectors in one place when UI changes
- **Readability**: Tests read like business logic, not technical implementation
- **Organization**: Clear separation between page logic and test logic

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
