# Phake Shop

En webshop byggd med React som hämtar produkter från DummyJSON API.

## Installation

1. Klona projektet
2. Installera beroenden:
npm install
3. Starta projektet:
npm run dev
4. Öppna webbläsaren och gå till `http://localhost:5173`

## Funktioner

- Produktlista med sök och kategorifilter
- Produktsida med detaljerad information
- Kundvagn med antal och totalpris
- Favoriter
- Kassa med orderbekräftelse
- Mörkt läge

## Debounce

Debounce-funktionen är implementerad som en egen hook i `hooks/useDebounce.js`. Den använder `setTimeout` för att fördröja uppdateringen av sökvärdet med 400ms. Om användaren fortsätter skriva innan 400ms har gått nollställs timern via cleanup-funktionen i `useEffect`. Detta gör att filtrering av produkter bara sker när användaren slutat skriva, istället för för varje tangenttryckning.

## Felhantering

Alla API-anrop använder `try...catch...finally` enligt följande mönster:

- `try` — hämtar data från API och uppdaterar state
- `catch` — fångar upp nätverksfel och visar ett felmeddelande för användaren
- `finally` — stänger av laddningsindikatorn oavsett om anropet lyckades eller misslyckades

Felhantering finns implementerad i `Home.jsx`, `ProductDetails.jsx` och `Header.jsx`.