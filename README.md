# Parallel42 Flow Typescript definitions

(Incomplete) type definitions for Parallel42s Flow. Currently implements the default functions and APIs apart from:
- Departure/Arrival `commonLegs`
- Approach `icaos`
- Airport `metar`
- Weather preset `windLayers`
- Weather metar `layers`, `phenomena`, `vis`
- A couple of params in the default APIs, such as `error` for the `find_metar_from_coords` and the return type of `get_sun_position`

## Installation
Install `types-p42-flow` and add it to your `typeRoots` in `tsconfig.json`.

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
    "noImplicitThis": false,
    "typeRoots": ["node_modules/types-p42-flow"]
  },
  "include": ["**/*.ts"]
}
```

Using the above, compile using `npx tsc` to generate a `code.js` file.
