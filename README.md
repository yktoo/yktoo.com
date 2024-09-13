[![Build status](https://github.com/yktoo/yktoo.com/actions/workflows/build.yml/badge.svg)](https://github.com/yktoo/yktoo.com/actions/workflows/build.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1f301b2b-dac6-4567-9e52-c2abb008bbe2/deploy-status)](https://app.netlify.com/sites/yktoo/deploys)

# yktoo.com

This repository contains the code that runs [yktoo.com](https://yktoo.com/).

## Requirements

* Node.js 20.x+
* Hugo 0.134+

## Build

* `npm install`
* `npm run build` in development mode, or `npm run build:prod` in production mode

## Run a live server

* `npm start`
* Navigate to [localhost:1313](http://localhost:1313/)

## Configuration

### Environment

The following environments are configured for this website:

* `development` — it disables inserting Google Analytics script into the generated HTML pages. Used when you run `npm start` or `npm build`.
* `production` — used when running `npm run build:prod`
