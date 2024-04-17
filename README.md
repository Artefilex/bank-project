<!-- VITE_INTEREST_API=7rHSGLNlMxvZaQdMtilN3b:1kgqOYzMAyjbQ2TrtbCY0o
VITE_EXCHANGE_API=https://api.polygon.io/
VITE_FINNHUB_API=https://finnhub.io/api/v1/
VITE_REALTIME_FINANCE=https://rapidapi.com/-->

# **Coinflex (Financial Information Platform)**

Hello! I am thrilled to announce the new version of the CoinFlex app, which I developed using React.js and previously introduced to you. When I started the project, it was initially a simple application that displayed only currency exchange rates. Now, I have transformed CoinFlex into a much more functional and comprehensive financial information platform. Here are some key updates:

## **New Features:**

**API Integrations:**

Our application has now expanded to include not only currency rates but also financial news and stock information. We access this data through various stock and financial news APIs. All these API integrations have been developed using Redux Toolkit Query, which allows for more efficient and optimized data management.

## **Installation Steps**

1. **Clone the Repository:**

Use the following command to clone the project to your local machine:

```bash
git clone https://github.com/Artefilex/bank-project.git
cd banka-projesi
```

2. **Install Dependencies:**

To install all dependencies in the project, use the following Yarn command

```bash
yarn install
```

3. **Setting Up Environment Variables:**

For the application to function correctly, it needs to connect to various APIs for fetching financial data. You will need to set up environment variables to point to these APIs.

Please follow these steps to set up the necessary environment variables:

- Create a `.env` file in the root directory of the project.
- Add the following lines to the `.env` file, replacing `your_api_key_here` with your actual API keys where necessary:

```plaintext

# Exchange rates API
VITE_EXCHANGE_API=https://api.polygon.io/

# Stock information API and NEWS
VITE_FINNHUB_API=https://finnhub.io/api/v1/

# Real-time financial data API and NEWS
VITE_REALTIME_FINANCE=https://rapidapi.com/


```

- Save the file and restart your development server if it's running. This will load the environment variables into your application.

4. **Start the Development Server:**

To start the local development server:

```bash
yarn dev
```
