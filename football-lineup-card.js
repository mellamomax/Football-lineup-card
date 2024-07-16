const FORMATIONS = {
    "4-3-3": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 1.5 }, { x: 3, y: 2.5 }, { x: 3, y: 3.5 }, // Midfielders
        { x: 4, y: 1 }, { x: 4, y: 2.5 }, { x: 4, y: 4 }, // Forwards
    ],
    "4-4-2": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, // Midfielders
        { x: 4, y: 2 }, { x: 4, y: 3 }, // Forwards
    ],
    "4-2-3-1": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 1.8 }, { x: 3, y: 3.2 }, // Defensive Midfielders
        { x: 4, y: 1 }, { x: 4, y: 2.5 }, { x: 4, y: 4 }, // Attacking Midfielders
        { x: 5, y: 2.5 }, // Forward
    ],
    "3-4-3": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1.5 }, { x: 2, y: 2.5 }, { x: 2, y: 3.5 }, // Defenders
        { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, // Midfielders
        { x: 4, y: 1.5 }, { x: 4, y: 2.5 }, { x: 4, y: 3.5 }, // Forwards
    ],
    "3-5-2": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1.5 }, { x: 2, y: 2.5 }, { x: 2, y: 3.5 }, // Defenders
        { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 2.5 }, { x: 3, y: 3 }, { x: 3, y: 4 }, // Midfielders
        { x: 4, y: 2 }, { x: 4, y: 3 }, // Forwards
    ],
    "5-3-2": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 2.5 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 1.5 }, { x: 3, y: 2.5 }, { x: 3, y: 3.5 }, // Midfielders
        { x: 4, y: 2 }, { x: 4, y: 3 }, // Forwards
    ],
    "4-1-4-1": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 2.5 }, // Defensive Midfielder
        { x: 4, y: 1 }, { x: 4, y: 1.5 }, { x: 4, y: 3.5 }, { x: 4, y: 4 }, // Midfielders
        { x: 5, y: 2.5 }, // Forward
    ],
    "4-5-1": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 2.5 }, { x: 3, y: 3 }, { x: 3, y: 4 }, // Midfielders
        { x: 4, y: 2.5 }, // Forward
    ],
    "4-3-1-2": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 1.5 }, { x: 3, y: 2.5 }, { x: 3, y: 3.5 }, // Midfielders
        { x: 4, y: 2.5 }, // Attacking Midfielder
        { x: 5, y: 2 }, { x: 5, y: 3 }, // Forwards
    ],
    "4-1-2-1-2": [
        { x: 1, y: 2.5 }, // Goalkeeper
        { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, // Defenders
        { x: 3, y: 2.5 }, // Defensive Midfielder
        { x: 4, y: 1.5 }, { x: 4, y: 3.5 }, // Midfielders
        { x: 5, y: 2.5 }, // Attacking Midfielder
        { x: 6, y: 2 }, { x: 6, y: 3 }, // Forwards
    ]
};

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
                    height: 350px;
                    position: relative;
                }
                .player {
                    position: absolute;
                    text-align: center;
                    color: white;
                    background-color: rgba(255,255,255);
                    padding: 0px;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%, -50%); /* Center the player icon */
                }
                .player img {
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                }
                .player div {
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                    margin-top: 2px;
                    font-family: var(--montserrat-font), sans-serif;
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
        const formationType = attributes.formation;
        const startingXI = attributes["starting XI"];

        const formationGrid = FORMATIONS[formationType];
        if (!formationGrid) {
            this.shadowRoot.querySelector('.card').innerHTML = 'Formation not supported';
            return;
        }

        const field = this.shadowRoot.querySelector('.field');
        field.innerHTML = '';

        startingXI.forEach((playerInfo, index) => {
            const player = playerInfo.player;
            const position = formationGrid[index];
            if (position) {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player';
                playerDiv.style.left = `${((5 - position.y) / 5) * 100}%`; // Adjust for appropriate positioning
        	playerDiv.style.bottom = `${((position.x / 5) * 100) - 20}%`;  // Adjust for appropriate positioning and move down
                const surname = player.name.split(' ').slice(-1)[0];
                playerDiv.innerHTML = `
                    <img src="https://media.api-sports.io/football/players/${player.id}.png" alt="${surname}" />
                    <div>${surname}</div>
                `;
                field.appendChild(playerDiv);
            }
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
