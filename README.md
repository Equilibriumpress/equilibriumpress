# Equilibriumpress

Premium React website voor Equilibriumpress.

## Stack

- React
- Vite
- TypeScript
- Framer Motion
- React Three Fiber
- Drei
- Three.js
- GitHub Pages

## Lokaal draaien

```bash
npm install
npm run dev
```

## Build testen

```bash
npm run build
npm run preview
```

## Publiceren

De repository bevat een GitHub Actions workflow in:

```text
.github/workflows/deploy.yml
```

Zet GitHub Pages op:

1. Settings → Pages
2. Source → GitHub Actions
3. Run de workflow of push naar `main`

De Vite base staat op:

```ts
base: '/equilibriumpress/'
```

Dat past bij een projectsite op:

```text
https://equilibriumpress.github.io/equilibriumpress/
```
