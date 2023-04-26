# Ooolab - UX testing support software

## Intro

Welcome to Ooolab, a Next.js application providing ease UX laboratory testing. Developed as part of Master's degree thesis in cooperation with UsabilityLab FIT.

Demo: [ooolab.vercel.app](ooolab.vercel.app)

## Getting Started

Install locally via:

```bash
npm i
# or
yarn
```

Run by typing:

```bash
npm run dev
#or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Local build

Build the app using:

```bash
npm run build
#or
yarn build
```

## Project structure

This project uses feature oriented file structure:

- *src/*
  - *features* ... main source code
  - *generated-graphql* ... GraphQL Codegen types
  - *graphql* ... GraphQL queries and mutations
  - *pages* ... NextJS page structure

## Used libraries and extensions

### Styled components

The project uses styled-components as its main CSS-in-JS solution. All component-scoped styles are to be found in source code folders (names *styled.ts*). Global styling configuration is located in */styles* folder.

### GraphQL Code Generating

This app uses GraphQL Codegen tool to infer types based on BE's GraphQL endpoint schema. To generate these, type:

```bash
npm run codegen
#or
yarn codegen
```

### Cypress

Cypress is utilized for testing. All Cypress related code is in *cypress/* folder. Folder *e2e/* contains end-to-end test specs and the *component/* contains component testing specs.

## Contribute

In case you find bugs or ways to improve the app, do not hesitate to bring up an issue / PR or message directly to juragut@seznam.cz!