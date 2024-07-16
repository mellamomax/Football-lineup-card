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
                    height: 600px; /* Adjusted height to fit more players */
                    position: relative;
                }
                .player {
                    position: absolute;
                    text-align: center;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 5px;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%, -50%); /* Center the player icon */
                }
                .player img {
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div class="card">
                <div class="field"></div>
            </div>
        `;
    }

    set hass(hass) {
        const entity = hass.states[this.config.entity];
        if (!entity) {
            this.shadowRoot.querySelector('.card').innerHTML = 'Entity not found';
            return;
        }
        const attributes = entity.attributes;
        const formation = attributes.formation.split('-').map(Number);
        const startingXI = attributes["starting XI"];

        const field = this.shadowRoot.querySelector('.field');
        field.innerHTML = '';

        const rows = formation.length + 1; // Number of rows is number of lines + 1 for the goalkeeper
        const maxCols = Math.max(...formation); // Maximum number of columns is the max value in formation array

        startingXI.forEach(playerInfo => {
            const player = playerInfo.player;
            const [x, y] = player.grid.split(':').map(Number);
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.style.left = `${(y / maxCols) * 100}%`; // Dynamic column calculation
            playerDiv.style.top = `${(x / rows) * 100}%`;  // Dynamic row calculation
            playerDiv.innerHTML = `
                <img src="https://media.api-sports.io/football/players/${player.id}.png" alt="${player.name}" />
                <div>${player.name}</div>
            `;
            field.appendChild(playerDiv);
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
