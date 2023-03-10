# Parallel42 Flow Typescript definitions

(Incomplete) type definitions for Parallel42s Flow. Currently implements the default functions and APIs apart from:
- Departure/Arrival `commonLegs`
- Approach `icaos`
- Airport `metar`
- Weather preset `windLayers`
- Weather metar `layers`, `phenomena`, `vis`
- A couple of params in the default APIs, such as `error` for the `find_metar_from_coords` and the return type of `get_sun_position`
- The Twitch functions and interfaces are guessed from the Flow documentation, I don't have the ability to verify these
- Probably something else, Issues/PRs welcome

## Installation
Install `types-p42-flow` and add it to your `include` in `tsconfig.json`.

```
npm install -D types-p42-flow
```

This would be a good starting point:
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "amd",
    "outFile": "./code.js",
    "removeComments": true,
    "newLine": "lf",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": false
  },
  "include": [
    "node_modules/types-p42-flow",
    "**/*.ts"
  ]
}
```

Using the above, compile using `npx tsc` to generate a `code.js` file.

## Datastore
The variable `this.store` is defined as a `Record<string, unknown>`. If you want type support for your datastore vars, you can override this using the `Store` interface:
```typescript
declare module global {
    interface Store {
        active: boolean,
        another_prop: boolean
    }
}
this.store = {
  active: false,
  another_prop: false
}
```
