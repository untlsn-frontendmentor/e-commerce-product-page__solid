# Solid-Start SSG

Simple solid template inspired by [Vitesse](https://github.com/antfu/vitesse) - best vue template

## Features
- ⚡️ Solid-js, Vite, pnpm - born with fastness
- Solid-start
  - 🗂 File based routing
  - 🖨 SSG
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
- 🦾 TypeScript, of course
- 😃 SVG resolve

## Pre-packed

### UI
  - UnoCSS with Windi Base config
  - Mock tailwind config for WebStorm

### Plugins
  - solid-app-router - routing for solid apps
  - solid-meta - meta tags for solid
  - solid-start - new solid starter
  - vite-plugin-solid-svg - svg resolver for solid

### Coding Style
 - ESlint with airbnb and solid

## Checklist
  - [ ] Change fonts in uno config (presetWebFonts)
  - [ ] Update tailwind theme extend (auto import to UnoCSS config)
  - [ ] Clean up the READMEs and remove routes and components
  - [ ] Change favicon in public

## Usage

### Development
Just run and visit http://localhost:3333
```
pnpm dev
```

### Build
To build the App, run
```
pnpm build
```
And you will see the generated file in dist that ready to be served

## Why
Solid-js is a great framework, but it has one downside - it's not very popular. 
Creating a new project from ground in Solid can take a long time, 
and until solid-start has a stable version, 
many configurations may change and basically don't work.

I use this template mainly for my private projects, 
and I do not plan to develop it when a better alternative to 
lightweight projects in Solid-js comes.

## For other enthusiasts of solid-js
If you also create your own template or created a plugin, 
library for Solid-js and want to add it to this template,
feel free to write about it in the discussion panel
