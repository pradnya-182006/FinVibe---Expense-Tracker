# FinVibe — Expense Tracker

FinVibe is a client-side personal finance dashboard built with React and Vite. It helps users record income and expenses, monitor their balance, set budgets, and review spending through charts and reports. Transaction data and preferences are stored in the browser using local storage.

## Features

- **Dashboard:** View financial summaries, including income, expenses, savings, and net balance.
- **Transaction management:** Add, edit, delete, and review income and expense transactions.
- **Budgets:** Set a monthly budget and category-level budgets, then monitor spending against those limits.
- **Charts and reports:** Explore spending patterns and transaction summaries visually.
- **Month filtering:** Review figures for a selected month or across all available transactions.
- **CSV support:** Import transaction data and export transactions to CSV.
- **Preferences:** Configure currency and date display format.
- **Browser persistence:** Keep transaction data and preferences between visits using local storage.
- **Demo data:** Start with sample transactions or restore the demo dataset.
- **Responsive navigation:** Includes desktop and mobile navigation components.
- **Interface feedback:** Toast notifications, confirmation dialogs, and celebratory confetti for recorded income.

> **Note:** This project is a front-end application. The repository does not include a backend API, user authentication, or cloud synchronization. Data is stored locally in the browser and is not automatically shared across devices.

## Tech Stack

- **React 19** — component-based user interface
- **Vite 8** — development server and production build tooling
- **JavaScript (ES modules)**
- **Tailwind CSS 3** — utility-first styling configuration
- **Recharts 3** — charts and data visualization
- **Lucide React** — interface icons
- **canvas-confetti** — income-entry celebration
- **Oxlint** — linting

## Getting Started

### Prerequisites

Install a current version of **Node.js** with npm. Use a Node.js version compatible with the installed Vite version.

### 1. Extract and open the project

```bash
unzip FinVibe---Expense-Tracker-main.zip
cd FinVibe---Expense-Tracker-main
```

If you have already extracted the project, simply open its root folder in your terminal.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print a local URL in the terminal (commonly `http://localhost:5173`). Open that URL in your browser.

### 4. Create a production build

```bash
npm run build
```

The optimized production files are generated in the `dist/` directory.

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Vite development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs Oxlint |

## Project Structure

```text
FinVibe---Expense-Tracker-main/
├── public/                    # Public assets and icons
├── src/
│   ├── assets/                # Images and bundled assets
│   ├── components/
│   │   ├── budget/            # Budget overview, category budgets, budget modal
│   │   ├── common/            # Shared cards, modals, toast and empty-state UI
│   │   ├── dashboard/         # Summary cards, charts and recent transactions
│   │   ├── layout/            # Navbar, sidebar and mobile navigation
│   │   ├── reports/           # Reports screen
│   │   ├── settings/          # Settings screen
│   │   └── transactions/      # Transaction table and transaction modal
│   ├── context/
│   │   └── FinanceContext.jsx # Shared finance state and calculations
│   ├── utils/
│   │   ├── constants.js       # Default settings and budget constants
│   │   ├── csvHelper.js       # CSV import/export helpers
│   │   ├── formatters.js      # Formatting and ID utilities
│   │   ├── sampleData.js      # Demo transactions
│   │   └── storage.js         # Safe browser-storage helpers
│   ├── App.css                # App-level styles
│   ├── index.css              # Global styles
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## How It Works

1. The app initializes its finance state from browser local storage. If no transaction data is present, it loads the bundled sample transactions.
2. Users add income or expense entries through the transaction interface.
3. The finance context updates the shared transaction state and persists changes to local storage.
4. Dashboard metrics are calculated from the transactions and the configured opening balance and monthly budget.
5. Charts, transaction views, and reports use this shared data to present the selected period's financial activity.

### Main calculations

- **Net balance** = opening balance + all income − all expenses
- **Period savings** = selected-period income − selected-period expenses
- **Savings rate** = (period savings ÷ period income) × 100, when period income is greater than zero
- **Remaining monthly budget** = monthly budget − selected-period expenses
- **Budget used (%)** = (selected-period expenses ÷ monthly budget) × 100, when the monthly budget is greater than zero

These figures are intended for personal tracking and should not be treated as audited financial records.

## Data and Privacy

- The application uses browser local storage for transactions and preferences.
- Clearing browser site data, using a different browser/profile, or switching devices may make locally stored records unavailable.
- Use the app's data-clearing controls carefully; clearing transaction data may be irreversible unless you have exported a backup.
- Do not enter sensitive banking credentials or payment-card details. This application does not connect to a bank.

## CSV Import and Export

Use the CSV controls in the application to move transaction records in or out of the app. Before importing a file, ensure its columns and values match the format expected by the application's CSV helper. Keep an exported copy of important records as a backup.

## Troubleshooting

- **`npm` or `node` not found:** Install Node.js and npm, then reopen your terminal.
- **Dependencies fail to install:** Check your Node.js/npm versions and retry `npm install`.
- **Port already in use:** Use the alternative local URL or port reported by Vite.
- **Data appears missing:** Check that you are using the same browser and browser profile. Local storage is browser-specific.
- **Production build fails:** Review the terminal output for the first reported error, then run `npm install` again if dependencies are incomplete.

## Future Improvements

Potential enhancements include backend persistence, secure user accounts, cloud synchronization, recurring transactions, scheduled budget alerts, automated tests, and more advanced financial analytics.

## Contributing

1. Fork or copy the repository.
2. Create a branch for your change.
3. Keep changes focused and follow the existing component structure.
4. Run `npm run lint` and `npm run build` before submitting a change.
5. Describe the change and include screenshots for major UI updates.

## License

No license file was found in the supplied project archive. Unless a license is added by the project owner, assume that the code is not licensed for unrestricted redistribution or reuse.

---

**FinVibe — Track your spending. Understand your habits. Plan with confidence.**
