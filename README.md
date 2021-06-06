# Products Compare

## Install

`npm install`

## Run

`npm run dev`

## Architectural choices

- Custom setup (webpack + babel + typescript)
- Lint (eslint + prettier)
- Functional components
- Functional programming, example [src/hooks/helpers.ts](src/hooks/helpers.ts)
- React hooks, example [src/hooks/useProducts.ts](src/hooks/useProducts.ts)
- Unit tests with React testing library (including [Mock Service Worker](https://mswjs.io/)), example: [src/hooks/__tests__/useProducts.test.ts](src/hooks/__tests__/useProducts.test.ts)
- Global state and router not required

## Folter structure

### pages

- Like containers
- Connected to hooks to use state, services...
- Composed by components which can be exclusive (same folder) or shared (components folder)

### components

- Components that can be shared througout the app
- Usually stateless components

### elements

- Shared styled components used to compose components and pages

### hooks

- Hooks to be shared.

### services

- Place for api resources.

### style

- Global style and theme

## Possible improvements

- Error handling (fetch)
- Checkbox component with custom style
- More unit tests
- e2e test with Cypress
- The useProducts hook is candidate to be moved to [src/pages/ProductsCompare](src/pages/ProductsCompare), since it has specific implementation, like feature highlighting. Fetching and product selection could still be shared though. A possible solution here would be a composition, creating a useProductsCompare to implement what is specific.

## Dependencies

- styled-components
- axios

## Proxy

- To handle CORS, using cors-anywhere

##  Remarks

- The package http-proxy (cors-anywhere dependency) has 1 vulnerability.