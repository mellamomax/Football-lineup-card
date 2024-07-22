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
                @font-face {
                    font-family: 'Tolyer';
                    src: url('/local/fonts/Tolyer-Regular-no.1.ttf') format('truetype');
                }

                :host {
                    --player-size: 6vw;
                    --circle-size: 7vw;
                    --font-size: 1vw;
                    --top-margin: 10%;
                }

                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    padding-bottom: 2vw; /* Add space below the card */
                    overflow: hidden; /* Ensure content doesn't overflow */
                }

                .field-container {
                    position: relative;
                    width: 100%;
                    padding-top: 66.66%; /* Aspect ratio 3:2 */
                    overflow: hidden; /* Ensure content doesn't overflow */
                }

                .field {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url('/local/football-pitch-template.png') no-repeat center center;
                    background-size: cover;
                }

                .players {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .player-container {
                    position: absolute;
                    transform: translate(-50%, -50%); /* Center the container */
                    text-align: center;
                }

                .player-circle {
                    background-color: rgba(255, 255, 255, 1);
                    border-radius: 50%;
                    width: var(--circle-size);
                    height: var(--circle-size);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .player-circle img {
                    border-radius: 50%;
                    width: var(--player-size);
                    height: var(--player-size);
                    object-fit: cover;
                    object-position: top;
                    z-index: 1; /* Ensure the image is on top */
                }

                .player-name {
                    font-size: var(--font-size);
                    font-family: 'Tolyer', sans-serif;
                    color: white;
                    margin-top: -1vw;
                }

                @media (max-width: 600px) {
                    :host {
                        --player-size: 10vw;
                        --circle-size: 11vw;
                        --font-size: 2vw;
                        --top-margin: 15%;
                    }
                }

                @media (min-width: 600px) and (max-width: 1024px) {
                    :host {
                        --player-size: 8vw;
                        --circle-size: 9vw;
                        --font-size: 1.5vw;
                        --top-margin: 12%;
                    }
                }

                @media (min-width: 1024px) {
                    :host {
                        --player-size: 6vw;
                        --circle-size: 7vw;
                        --font-size: 1vw;
                        --top-margin: 10%;
                    }
                }
            </style>
            <div class="card">
                <div class="field-container">
                    <div class="field"></div>
                    <div class="players"></div>
                </div>
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
        const startingXI = JSON.parse(attributes.starting_XI);

        const formationGrid = FORMATIONS[formationType];
        if (!formationGrid) {
            this.shadowRoot.querySelector('.card').innerHTML = 'Formation not supported';
            return;
        }

        const players = this.shadowRoot.querySelector('.players');
        players.innerHTML = '';

        startingXI.forEach((playerInfo, index) => {
            const player = playerInfo.player;
            const position = formationGrid[index];
            if (position) {
                const playerContainer = document.createElement('div');
                playerContainer.className = 'player-container';
                playerContainer.style.left = `${((5 - position.y) / 5) * 100}%`; // Adjust for appropriate positioning and flip horizontally
                playerContainer.style.top = `${((position.x / 5) * 100) - 10}%`;  // Adjust for appropriate positioning and move down

                const playerCircle = document.createElement('div');
                playerCircle.className = 'player-circle';

                const playerImage = document.createElement('img');
                playerImage.src = `https://media.api-sports.io/football/players/${player.id}.png`;
                playerImage.alt = player.name.split(' ').slice(-1)[0];

                const playerName = document.createElement('div');
                playerName.className = 'player-name';
                playerName.textContent = player.name.split(' ').slice(-1)[0];

                playerCircle.appendChild(playerImage);
                playerContainer.appendChild(playerCircle);
                playerContainer.appendChild(playerName);
                players.appendChild(playerContainer);
            }
        });
    }

    getCardSize() {
        return 3; // Adjust this number if necessary based on your card height needs
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
window.customCards.push(FootballLineupCardDescriptor);
