# JMAAPI

API Client to fetch data from https://www.jma.go.jp/jma/index.html.

## Installation

`yarn add jmaaapi` or `npm install jmaapi`

## Example

```ts
import { JmaApi } from "jmaapi";

const api = new JmaApi();

(async () => {
  const area = await api.getArea();
  const tokyoCode = Object.entries(area.offices)
    .filter(([_, center]) => center.name.includes("東京都"))
    .map(([code, _]) => code)[0];

  const data = await api.getForecast("offices", tokyoCode);

  console.log(JSON.stringify(data));
})();
```

## Usage

See comments in [./src/api/index.ts](./src/api/index.ts) and [type declarations](./src/type/api/endpoint).
