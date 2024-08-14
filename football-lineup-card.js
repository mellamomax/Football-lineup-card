class FootballLineupCard extends HTMLElement {
    setConfig(config) {
        this.config = config;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .field {
                    background: url('https://i.imgur.com/0SUPY7V.png') no-repeat center center;
                    background-size: cover;
                    width: 100%;
                    padding-top: 66.66%; /* Aspect ratio 3:2 */
                    position: relative;
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
                    background-color: rgba(255,255,255);
                    border-radius: 50% !important; /* Ensures the shape is a circle */
                    width: 6vw; /* Diameter of the circle */
                    height: 6vw; /* Diameter of the circle */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                .player-circle img {
                    border-radius: 50%;
                    width: 5vw;
                    height: 5vw;
                    object-fit: cover;
                    object-position: top;
                    position: absolute;
                    z-index: 1; /* Ensure the image is on top */
                }
                .player-name {
                    text-align: center;
                    font-size: 1.2vw;
                    position: relative;
                    top: 0.7vw;
                    font-weight: 580;
                    font-family: Tolyer;
                    color: white; /* Color of the text */
                }
            </style>
            <div class="card">
                <div class="field"></div>
                <div class="players"></div>
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
        const startingXI = attributes['starting XI'];

        const field = this.shadowRoot.querySelector('.field');
        const players = this.shadowRoot.querySelector('.players');
        players.innerHTML = '';

        startingXI.forEach(playerInfo => {
            const position = playerInfo.grid.split(':'); // Get the grid position from the API
            const gridX = parseInt(position[0]);
            const gridY = parseInt(position[1]);

            const playerContainer = document.createElement('div');
            playerContainer.className = 'player-container';
            playerContainer.style.left = `${((5 - gridY) / 5) * 100}%`; // Adjust for appropriate positioning and flip horizontally
            playerContainer.style.bottom = `${((gridX / 5) * 100) - 25}%`;  // Adjust for appropriate positioning and move down

            const playerCircle = document.createElement('div');
            playerCircle.className = 'player-circle';

            const playerImage = document.createElement('img');
            playerImage.src = `https://media.api-sports.io/football/players/${playerInfo.number}.png`;
            playerImage.alt = playerInfo.name.split(' ').slice(-1)[0];

            const playerName = document.createElement('div');
            playerName.className = 'player-name';
            playerName.textContent = playerInfo.name.split(' ').slice(-1)[0];

            playerCircle.appendChild(playerImage);
            playerContainer.appendChild(playerCircle);
            playerContainer.appendChild(playerName);
            players.appendChild(playerContainer);
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
