![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20TU%20Dresden-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Dresdner Weihnachtsmarktkarte
**This application is a prototype.**

The Dresdner Weihnachtsmarktkarte (Dresden Christmas market map) is an interactive web map of Dresden showing christmas markets based on open data. You can filter the markets by date and opening hours and also by markets with no entry fee or with a special focus.

![Map](/public/socialimage.jpg)

## Context
   
This project is developed by Hans-Albrecht Schumann as part of a project at the TU Dresden (Faculty of Business and Economics). It is realized in cooperation with Open Data Dresden and Open Data Berlin (ODIS).

The application allows visitors to explore Dresden's christmas markets in a new way. One key function of the map is to filter by individual interests: Which christmas markets are open on my desired date? Which are completly free? And can you show me only international christmas markets on the map? This map gives an answer to all these questions and allows you to plan the visit ahead. Additionally you can see public transport stations and public toilets nearby on the map. With one click via the share function, you can share your favorite christmas market with others.

This application is based on the [Berliner Weihnachtsmarktkarte](https://github.com/technologiestiftung/weihnachtsmarktkarte) by Technologiestiftung Berlin / ODIS Berlin.

## Tech stack

This website is a NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)

## Project structure

Basic Next.js app

## Getting started

### Requirements

#### Node.js

This project is a Next.js app which requires you to have [Node.js](https://nodejs.org/en/) installed.


### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Hollo1001/weihnachtsmarktkarte.git
```

Move into the repository folder:

```bash
cd weihnachtsmarktkarte
```

Make sure you use the Node.js version specified in `.nvmrc`. Find out which Node version you're currently on with:

```bash
node --version
```

If this version differs from the one specified in `.nvmrc`, please install the required version, either manually, or using a tool such as [nvm](https://github.com/nvm-sh/nvm), which allows switching to the correct version via:

```bash
nvm use
```

With the correct Node version, install the dependencies:

```bash
npm install
```

Because the map uses a basemap from maptiler (https://www.maptiler.com/), you will need to provide connection details in your environment. In this repository you can find a file `.env.example`. Duplicate this file and name it `.env`. 

In `.env` you must enter the connection details to the Maptiler style file as suggested in `.env.example`.

You are now ready to start a local development server on http://localhost:3000 via:

```bash
npm run dev
```

## Credits

<table>
  <tr>
    <td>
      Project by: Hans-Albrecht Schumann (TU Dresden)
    </td>
    <td>
      In cooperation with: Open Data Dresden
    </td>
    <td>
      <a href="https://odis-berlin.de">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-odis-berlin.svg" />
      </a>
    </td>
  </tr>
</table>

### Original Project

Based on the work of **Technologiestiftung Berlin** and **ODIS Berlin**.
