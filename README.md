
# Solinte Digital — One‑page (Next.js 14 + Tailwind + Framer Motion + Spline)

## Como rodar
```bash
npm i
npm run dev
```
Deploy recomendado: **Vercel**.

## Observações
- **Spline** é carregado com `dynamic()` e cai para imagem quando `navigator.connection.saveData` = true ou `effectiveType = '2g'`.
- **Cores**: neutras + azul marinho `#031B5E`. Sem amarelo.
- **Fonte**: placeholders para Flatory Sans. Use `public/fonts/` e ajuste `@font-face` em `app/globals.css` quando tiver os arquivos.
- **WhatsApp**: botão flutuante e CTAs utilizam o seu link.
- **SEO/OG** configurados em `app/layout.tsx`.
