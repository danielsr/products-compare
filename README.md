# Products Comparison

## Install

`npm install`

## Run

`npm run dev`

## Architectural choices

- Setup made from scratch (webpack + babel + typescript)
- Functional components
- Functional programming, example `hooks/helpers.ts`
- React hooks, example `hooks/useProducts.ts`
- React testing library (including [Mock Service Worker](https://mswjs.io/)), example: `src/hooks/__tests__/useProducts.test.ts`
- Global state and router not required

## Components pattern

- pages
- components
- elements

## Proxy

- To handle CORS, using cors-anywhere

## Dependencies

- styled-components
- axios

## Possible improvements

- Error handling (fetch)


##  Remarks

- The package http-proxy (cors-anywhere dependency) has 1 vulnerability.