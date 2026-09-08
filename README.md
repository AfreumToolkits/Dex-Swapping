# DexSwap - Decentralized Exchange

A modern decentralized exchange (DEX) built on Ethereum with Uniswap V3-inspired concentrated liquidity and PancakeSwap-inspired UI features.

## Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **React 18** - Component library
- **Tailwind CSS** - Utility-first styling (via CSS Modules)
- **Ethers.js v5** - Ethereum blockchain interaction
- **Web3Modal** - Wallet connection (MetaMask, Coinbase, WalletConnect)

### Smart Contracts
- **Solidity ^0.8.x** - Contract language
- **Hardhat** - Development environment & testing
- **OpenZeppelin Contracts** - Secure contract standards
- **Uniswap V3 Periphery** - Core AMM logic (SwapRouter, NFTDescriptor, PositionManager)

### Blockchain & Infrastructure
- **Ethereum Mainnet / Sepolia** - Target networks
- **The Graph (Uniswap Subgraph)** - Token data & analytics
- **Vercel** - Frontend deployment

### Development Tools
- **TypeScript-ready** (JS with JSDoc)
- **ESLint** - Code linting
- **Hardhat** - Local forking, testing, deployment

## Features

### Core DEX Functionality
- **Token Swapping** - Single-hop exact input swaps via Uniswap V3
- **Concentrated Liquidity** - Create positions with custom price ranges
- **Pool Management** - Deploy new pools with configurable fee tiers (0.05%, 0.3%, 1%)
- **Liquidity Positions** - View & manage active V3 positions

### PancakeSwap-Inspired UI Enhancements
- **Theme Toggle** - Dark/Light mode with localStorage persistence
- **Recent Transactions Panel** - Slide-over history drawer
- **Quick-Percent Buttons** - 25% / 50% / 75% / MAX on swap input
- **Price Impact Display** - Real-time rate row under swap inputs
- **Token Favorites** - Star tokens in picker for quick access
- **Slippage Presets** - 0.1% / 0.5% / 1% / Custom chips in settings
- **Defensive Rendering** - Safe fallbacks for all async data
- **Empty/Loading States** - Skeleton UI for all lists

## Project Structure

```
├── Components/          # React components
│   ├── MainSection/     # Swap interface (renamed from HeroSection)
│   ├── NavBar/          # Navigation with theme/history
│   ├── PoolAdd/         # Add liquidity form
│   ├── PoolConnect/     # Position dashboard
│   ├── SearchToken/     # Token picker with favorites
│   ├── Token/           # Settings modal (slippage presets)
│   ├── TokenList/       # Wallet token balances
│   └── Icons/           # SVG icon components
├── Context/             # React Context (SwapTokenContext)
│   ├── SwapContext.js   # Provider: wallet, swaps, liquidity, prices
│   └── *.json           # Contract ABIs
├── Utils/               # Blockchain utilities
│   ├── swapUpdatePrice.ts
│   ├── fetchingPrice.ts
│   ├── addLiquidity.ts
│   ├── checkLiquidity.ts
│   └── deployPool.ts
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

## Smart Contract Addresses (Sepolia)

| Contract | Address |
|----------|---------|
| WETH9 | `0x7A28cf37763279F774916b85b5ef8b64AB421f79` |
| Factory | `0x2BB8B93F585B43b06F3d523bf30C203d3B6d4BD4` |
| SwapRouter | `0xB7ca895F81F20e05A5eb11B05Cbaab3DAe5e23cd` |
| NFTDescriptor | `0xd0EC100F1252a53322051a95CF05c32f0C174354` |
| PositionDescriptor | `0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4` |
| PositionManager | `0xCa57C1d3c2c35E667745448Fef8407dd25487ff8` |

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
npx hardhat run scripts/deploy.js --network sepolia
```

## License

MIT License - feel free to use for your own projects.