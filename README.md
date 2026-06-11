<div align="center">

# Llehuni — Portfolio

Mon coin sur le web. Un site personnel pour montrer qui je suis, ce que je fais et ce que je construis.

[![Astro](https://img.shields.io/badge/Astro-6.4-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-7--1_Pattern-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.12-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

<!-- ![Aperçu du portfolio](./docs/screenshots/hero.png) -->

</div>

---

## Le projet

C'est mon portfolio personnel — l'endroit où je rassemble mes projets, mon parcours et mes compétences techniques. Plutôt que de laisser mon travail éparpillé entre GitHub, LinkedIn et des fichiers locaux, j'ai voulu un seul espace qui me ressemble.

Le site est construit avec **Astro**, pensé pour être rapide, léger et simple à faire évoluer.

---

## Stack

| Outil | Rôle |
| :--- | :--- |
| [Astro 6](https://astro.build) | Framework — génération statique, file-based routing |
| [TypeScript](https://www.typescriptlang.org/) | Typage strict |
| [SCSS](https://sass-lang.com/) | Styles — 7-1 Pattern adapté pour Astro |
| [Node.js ≥ 22.12](https://nodejs.org/) | Runtime |

---

## Prérequis

- **[Node.js](https://nodejs.org/)** `≥ 22.12.0`
- **npm** (livré avec Node.js)
- **[Git](https://git-scm.com/)**

```bash
node --version   # v22.12.0+
npm --version
```

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/llehuni/llehuni-portfolio.git
cd llehuni-portfolio

# Installer les dépendances
npm install

# Lancer en local
npm run dev
```

Le site tourne sur **[localhost:4321](http://localhost:4321)**.

---

## Utilisation

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Serveur de développement (`localhost:4321`) |
| `npm run build` | Build de production → `./dist/` |
| `npm run preview` | Prévisualiser le build localement |
| `npm run astro ...` | CLI Astro (`astro add`, `astro check`…) |

---

## Structure

```text
llehuni-portfolio/
├── public/                  # Assets statiques (favicon…)
├── src/
│   ├── assets/              # Images et SVG optimisés par Astro
│   ├── components/          # Composants réutilisables (.astro)
│   ├── layouts/             # Layouts de page
│   ├── pages/               # Routes (file-based routing)
│   ├── projects/            # Données projets
│   └── styles/              # Architecture SCSS (7-1 Pattern adapté)
│       ├── abstracts/       # Variables, mixins, fonctions (aucun CSS émis)
│       │   ├── _variables.scss
│       │   ├── _mixins.scss
│       │   ├── _functions.scss
│       │   └── _index.scss
│       ├── base/            # Reset, typographie globale
│       │   ├── _reset.scss
│       │   ├── _typography.scss
│       │   └── _index.scss
│       ├── layout/          # Utilitaires de structure globaux
│       │   ├── _global-layout.scss
│       │   └── _index.scss
│       └── global.scss      # Point d'entrée — importé dans Layout.astro
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Architecture SCSS

Le projet utilise le **7-1 Pattern** adapté aux conventions d'Astro :

| Couche | Rôle | Portée |
| :--- | :--- | :--- |
| `abstracts/` | Tokens de design, mixins, fonctions | Aucun CSS émis — consommé par les composants via `@use` |
| `base/` | Reset CSS, typographie globale | Styles globaux appliqués une seule fois |
| `layout/` | `.container`, `.section`, `.skip-link` | Utilitaires de structure globaux |

**Principe clé** : seuls les styles véritablement globaux passent par `global.scss`. Tout le reste reste scopé dans les blocs `<style lang="scss">` des composants Astro.

### Utiliser les abstracts dans un composant

```astro
<style lang="scss">
  @use '../styles/abstracts' as *;

  .my-component {
    padding: $spacing-lg;
    color: $color-text;
    @include respond-to('md') {
      padding: $spacing-xl;
    }
  }
</style>
```

---

## Licence

MIT License — Copyright (c) 2026 Llehuni

---

<div align="center">

Fait avec ❤️ par **Llehuni**

</div>
