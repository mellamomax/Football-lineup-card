# Football Lineup Card

A custom Lovelace card to display football lineups in a visual format.

## Installation

1. Copy the `soccer-lineup-card.js` file to your Home Assistant `www` directory.
2. Add the following to your `configuration.yaml`:

```yaml
sensor:
  - platform: football_lineup
    api_key: YOUR_API_KEY
    name: Barcelona Lineup
