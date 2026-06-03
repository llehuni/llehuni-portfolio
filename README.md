<div align="center">

# Llehuni — Portfolio

Mon coin sur le web. Un site personnel pour montrer qui je suis, ce que je fais et ce que je construis.

[![Astro](https://img.shields.io/badge/Astro-6.4-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
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
| CSS | Styles maison, sans framework |
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
├── public/               # Assets statiques (favicon…)
├── src/
│   ├── assets/           # Images et SVG optimisés par Astro
│   ├── components/       # Composants réutilisables (.astro)
│   ├── layouts/          # Layouts de page
│   └── pages/            # Routes (file-based routing)
├── astro.config.mjs      # Config Astro
├── tsconfig.json         # Config TypeScript (strict)
└── package.json
```

---

## Licence

MIT License — Copyright (c) 2026 Llehuni

---

<div align="center">

Fait avec ❤️ par **Llehuni**

</div>
