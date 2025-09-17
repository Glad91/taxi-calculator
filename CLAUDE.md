# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application for a taxi calculator. The project uses a modern React 19 setup with TypeScript in strict mode and ESLint for code quality.

## Development Commands

- **Start dev server**: `pnpm dev` - Runs Vite dev server with HMR
- **Build for production**: `pnpm build` - TypeScript compilation followed by Vite build
- **Lint code**: `pnpm lint` - Run ESLint across the codebase
- **Preview production build**: `pnpm preview` - Serve the built application locally

## Architecture

### Build System

- **Bundler**: Vite 7+ with React plugin
- **TypeScript**: Strict mode enabled with modern target (ES2022)
- **Package Manager**: Uses pnpm (lockfile present)

### Code Structure

- **Entry Point**: `src/main.tsx` - React 19 with StrictMode
- **Root Component**: `src/App.tsx` - Main application component
- **Styling**: CSS modules (`App.css`, `index.css`)
- **Assets**: Static assets in `src/assets/`

### TypeScript Configuration

- Uses project references with `tsconfig.app.json` for app code
- Strict linting enabled (`noUnusedLocals`, `noUnusedParameters`, etc.)
- Modern module resolution with bundler mode
- JSX transformation via `react-jsx`

### ESLint Setup

- TypeScript ESLint with recommended rules
- React Hooks plugin for hooks best practices
- React Refresh plugin for Vite integration
- Ignores `dist` directory
- Targets `**/*.{ts,tsx}` files

## Development Notes

- Currently contains default Vite + React template code
- Ready for taxi calculator implementation
- Modern React 19 setup with latest TypeScript features
- Configured for optimal development experience with HMR
