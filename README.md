# 🚕 Calculateur de Course Taxi

Un calculateur moderne et intuitif pour estimer le coût des courses de taxi avec prise en charge du remboursement CPAM.

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## ✨ Fonctionnalités

- 🧮 **Calcul précis** : Tarifs officiels avec prise en charge, distance et temps d'attente
- 💊 **Remboursement CPAM** : Calcul automatique avec 26% de remise
- 📱 **Design responsive** : Interface optimisée mobile-first
- 🎨 **UI moderne** : Composants shadcn/ui avec Tailwind CSS
- ⚡ **Performance** : Build optimisé avec Vite et React 19
- 🔧 **Qualité de code** : TypeScript strict, ESLint et Prettier

## 🚀 Demo

**🌐 Version en ligne :** [https://taxi-calculator-7zfbqbza3-benjamins-projects-3b7732fa.vercel.app](https://taxi-calculator-7zfbqbza3-benjamins-projects-3b7732fa.vercel.app)

## 📋 Stack Technique

### Framework & Core
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite)

### UI & Styling
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)
![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-161618?style=flat-square&logo=radix-ui)
![Lucide React](https://img.shields.io/badge/Lucide_React-0.544.0-F56565?style=flat-square)

### Outils de Développement
![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?style=flat-square&logo=prettier)
![PostCSS](https://img.shields.io/badge/PostCSS-8.5.6-DD3A0A?style=flat-square&logo=postcss)

## 🛠️ Installation

### Prérequis
- **Node.js** 18+
- **pnpm** (recommandé)

### Étapes d'installation

```bash
# Cloner le repository
git clone <votre-repo-url>
cd taxi_calculator

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

## 📝 Scripts Disponibles

| Script | Description | Commande |
|--------|-------------|----------|
| 🚀 **dev** | Serveur de développement avec HMR | `pnpm dev` |
| 🏗️ **build** | Build de production (TypeScript + Vite) | `pnpm build` |
| 👀 **preview** | Aperçu du build de production | `pnpm preview` |
| 🔍 **typecheck** | Vérification TypeScript sans émission | `pnpm typecheck` |
| 🧹 **lint** | Analyse du code avec ESLint | `pnpm lint` |
| ✨ **prettier** | Formatage automatique du code | `pnpm prettier` |
| 📋 **prettier:check** | Vérification du formatage | `pnpm prettier:check` |
| 🔧 **format** | Formatage + correction ESLint | `pnpm format` |
| ✅ **check** | Vérification complète (TypeScript + ESLint + Prettier) | `pnpm check` |

## 🏗️ Architecture

### Structure du Projet
```
taxi_calculator/
├── src/
│   ├── components/
│   │   ├── ui/              # Composants shadcn/ui
│   │   └── TaxiCalculator.tsx # Composant principal
│   ├── lib/
│   │   └── utils.ts         # Utilitaires (cn, etc.)
│   ├── App.tsx              # Application principale
│   └── main.tsx             # Point d'entrée React 19
├── public/                  # Assets statiques
├── .prettierrc              # Configuration Prettier
├── tailwind.config.js       # Configuration Tailwind
├── vite.config.ts           # Configuration Vite
└── tsconfig.json            # Configuration TypeScript
```

### Configuration TypeScript
- **Mode strict** activé avec `noUnusedLocals`, `noUnusedParameters`
- **Résolution de modules** moderne avec mode bundler
- **Transformation JSX** via `react-jsx`
- **Références de projet** avec `tsconfig.app.json`

### Configuration ESLint
- **Règles TypeScript ESLint** recommandées
- **Plugin React Hooks** pour les bonnes pratiques
- **Plugin React Refresh** pour l'intégration Vite
- **Cible** : `**/*.{ts,tsx}` files

## 🎯 Fonctionnement

### Calcul des Tarifs
- **Prise en charge** : 2.94€ fixe
- **Distance** : Tarifs A, B, C, D (1.08€ à 3.24€/km)
- **Temps d'attente** : 29.44€/heure (0.49€/minute)

### Remboursement CPAM
- **Remise** : 26% du prix total
- **Affichage** : Prix original + prix remboursé + économie

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Build Local
```bash
# Génération du build
pnpm build

# Les fichiers sont dans /dist
```

## 🔧 Développement

### Outils de Qualité
Avant chaque commit, lancez :
```bash
pnpm check
```

### Configuration Prettier
- **Semi-colons** : Oui
- **Guillemets simples** : Oui
- **Trailing commas** : Toujours
- **Largeur** : 80 caractères
- **Indentation** : 4 espaces

## 📦 Dépendances Principales

### Production
- **@radix-ui/react-***  : Composants UI accessibles
- **class-variance-authority** : Gestion des variantes CSS
- **clsx & tailwind-merge** : Utilitaires CSS
- **lucide-react** : Icônes modernes

### Développement
- **@types/*** : Définitions TypeScript
- **@vitejs/plugin-react** : Plugin React pour Vite
- **autoprefixer** : PostCSS autoprefixer
- **typescript-eslint** : ESLint pour TypeScript

## 🤖 Généré avec Claude Code

Ce projet a été développé avec l'assistance de [Claude Code](https://claude.ai/code), l'IDE AI d'Anthropic.

## 📄 Licence

Projet privé - Tous droits réservés

---

**⚡ Développé avec React 19, TypeScript et Vite pour des performances optimales !**
