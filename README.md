# PennyFlow

PennyFlow is a private, mobile-first personal finance tracker for recording every transaction, understanding spending patterns, managing budgets, and building savings goals.

## What it includes

- Individual transaction tracking with merchant-level categorization
- Samsung Wallet export, bank SMS, UPI alert, and CSV import flows
- Category budgets, goals, recurring-payment insights, and subscription checks
- Cash-flow, category, and merchant reports
- Search, filters, privacy mode, offline support, and CSV export
- Installable Progressive Web App behavior

## Run locally

Serve the repository root with any static HTTP server and open `dist/index.html`, or run:

```sh
node server.mjs
```

Then visit `http://127.0.0.1:4173`.

## Privacy and integrations

This version stores transactions in the browser's local storage and processes pasted imports on-device. It does not contain bank credentials or real financial data. Automatic Android notification capture requires a separate native companion with explicit Notification Access. Samsung Wallet does not expose unrestricted consumer transaction access to ordinary web apps.

## Hosted app

The production app is deployed privately with ChatGPT sign-in at:

https://pennyflow-personal-finance.cloudysugar3.chatgpt.site
