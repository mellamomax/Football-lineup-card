class FootballLineupCard extends HTMLElement {
    setConfig(config) {
        this.config = config;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    padding: 16px;
                    font-size: 20px;
                    position: relative;
                }
                .field {
                    background: url('/local/football-pitch-template.jpg') no-repeat center center;
                    background-size: cover;
                    width: 100%;
                    height: 400px;
                }
                .players {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 10px;
                }
                .player {
                    margin: 5px;
                    text-align: center;
                }
                .player img {
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                }
            </style>
            <div class="card">
                <div class="field"></div>
                <div class="hello-world">Hello World</div>
                <div class="players"></div>
            </div>
        `;
    }

    set hass(hass) {
        const entity = hass.states[this.config.entity];
        if (!entity) {
            this.shadowRoot.querySelector('.hello-world').innerHTML = 'Entity not found';
            return;
        }
        const attributes = entity.attributes;
        const startingXI = attributes["starting XI"];

        const playersContainer = this.shadowRoot.querySelector('.players');
        playersContainer.innerHTML = '';

        startingXI.forEach(playerInfo => {
            const player = playerInfo.player;
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.innerHTML = `
                <img src="https://media.api-sports.io/football/players/${player.id}.png" alt="${player.name}" />
                <div>${player.name}</div>
            `;
            playersContainer.appendChild(playerDiv);
        });
    }

    getCardSize() {
        return 3;
    }
}

customElements.define('football-lineup-card', FootballLineupCard);

// Code to show the card in HA card-picker
const FootballLineupCardDescriptor = {
    type: 'football-lineup-card', // Must match the type you use in your YAML configuration
    name: 'Football Lineup Card', // Friendly name for the card picker
    description: 'A custom card to show lineup', // Short description
    preview: false, // Optional: Set to true to show a preview in the picker
    documentationURL: 'https://justpaste.it/38sr8' // Optional: Link to your documentation
};

// Ensure window.customCards is initialized
window.customCards = window.customCards || [];

// Add your card to the customCards array
window.customCards.push(FootballLineupCardDescriptor);
