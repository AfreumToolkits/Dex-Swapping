# DexSwap - Decentralized Exchange

A modern decentralized exchange (DEX) built on Ethereum with concentrated liquidity and professional trading features.

## Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **React 18** - Component library
- **CSS Modules** - Scoped styling
- **Ethers.js v5** - Ethereum blockchain interaction
- **Web3Modal** - Wallet connection (MetaMask, Coinbase, WalletConnect)

### Smart Contracts
- **Solidity ^0.8.x** - Contract language
- **Hardhat** - Development environment & testing
- **OpenZeppelin Contracts** - Secure contract standards
- **Uniswap V3 Core/Periphery** - AMM logic (SwapRouter, PositionManager, Factory)

### Blockchain & Infrastructure
- **Ethereum Mainnet / Testnets** - Target networks
- **The Graph** - Indexed blockchain data
- **Vercel** - Frontend deployment

### Development Tools
- **JavaScript/TypeScript-ready** (with JSDoc)
- **ESLint** - Code linting
- **Hardhat** - Local forking, testing, deployment

## Features

### Core DEX Functionality
- **Token Swapping** - Single-hop exact input swaps
- **Concentrated Liquidity** - Create positions with custom price ranges
- **Pool Management** - Deploy new pools with configurable fee tiers
- **Liquidity Positions** - View & manage active positions

### Trading Interface
- **Theme Toggle** - Dark/Light mode with persistence
- **Transaction History** - Recent activity panel
- **Quick-Amount Buttons** - Percentage-based input helpers (25% / 50% / 75% / MAX)
- **Real-time Price Display** - Live rate information
- **Token Favorites** - Bookmark frequently used tokens
- **Slippage Controls** - Preset and custom slippage tolerance
- **Defensive Rendering** - Safe fallbacks for async data
- **Loading/Empty States** - Professional UX for all data states

## Project Structure

```
├── Components/          # React components
│   ├── MainSection/     # Main swap interface
│   ├── NavBar/          # Navigation with theme/history
│   ├── PoolAdd/         # Add liquidity form
│   ├── PoolConnect/     # Position dashboard
│   ├── SearchToken/     # Token picker with favorites
│   ├── Token/           # Settings modal
│   ├── TokenList/       # Wallet token balances
│   └── Icons/           # SVG icon components
├── Context/             # React Context (SwapTokenContext)
│   ├── SwapContext.js   # Provider: wallet, swaps, liquidity, prices
│   └── *.json           # Contract ABIs
├── Utils/               # Blockchain utilities
│   ├── swapUpdatePrice.js
│   ├── fetchingPrice.js
│   ├── addLiquidity.js
│   ├── checkLiquidity.js
│   └── deployPool.js
├── contracts/           # Solidity contracts
├── scripts/             # Deployment scripts
├── pages/               # Next.js pages (/, /Tokens, /Pools)
└── styles/              # Global & page CSS Modules
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn
- MetaMask or compatible wallet

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Hardhat local node
npx hardhat node

# Deploy contracts locally
npx hardhat run scripts/deploy.js --network localhost
```

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_WEB3MODAL_PROJECT_ID=your_project_id
```

## Available Scripts

```bash
npm run dev       # Start Next.js dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
npx hardhat test  # Run contract tests
npx hardhat node  # Local Hardhat node
```

## Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Contracts (Hardhat)
```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## License

MIT License - feel free to use for your own projects.