# DL_ Design System

Agentic design system for [desilazova.com](https://desilazova.com) — personal portfolio of Desi Lazova, Lead Product Designer.

## Stack

Figma → Style Dictionary → React + Tailwind → Storybook → GitHub Pages

## Quick start

```bash
npm install
npm run tokens:build   # generates CSS variables from tokens
npm run dev            # starts Storybook at localhost:6006
```

## Structure

```
tokens/              ← design tokens (DTCG format)
src/tokens/          ← generated CSS variables + Tailwind tokens
src/components/      ← React components
stories/             ← Storybook stories
.storybook/          ← Storybook config
CLAUDE.md            ← AI-readable system instructions
```

## Token pipeline

Edit `tokens/*.json` → run `npm run tokens:build` → CSS variables regenerate → components update automatically.

## Deployment

Push to `main` → GitHub Actions builds tokens + Storybook → deploys to GitHub Pages.
