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
					overflow: hidden;
					position: relative;
				} 
                .field {
                    background: url('https://i.imgur.com/0SUPY7V.png') no-repeat center center;
                    background-size: cover;
                    width: 100%;
                    padding-top: 85%;
                    position: relative;
                }
				.teams {
					display: flex;
					justify-content: space-between;
					#width: 100%;
					padding: 0 4em;
					position: absolute;
					top: 420px;
					font-size: 1.2vw;
					font-weight: bold;
					color: white;
					z-index: 1; /* Make sure it's on top of the field */
				}
                .players {
                    position: absolute;
                    bottom: 5%;
                    left: 8%;
                    width: 100%;
                    height: 100%;
                }
                .player-container {
                    position: absolute;
                    #transform: translate(-50%, -50%); /* Center the container */
                    text-align: center;
					align-items: center;
					justify-content: center;
					Display: flex;
                }
                .player-circle {
                    background-color: rgba(255,255,255);
                    border-radius: 50% !important; /* Ensures the shape is a circle */
                    width: 3em; /* Diameter of the circle */
                    height: 3em; /* Diameter of the circle */
                    display: flex;
                    justify-content: center;
                    #align-items: center;
                    position: absolute;
                }
                .player-circle img {
                    border-radius: 50%;
                    #width: 85%;
                    #height: 85%;
                    object-fit: cover;
                    object-position: top;
                    #position: absolute;
                    z-index: 1; /* Ensure the image is on top */
                }
                .player-name {
                    text-align: center;
                    font-size: 1vw;
                    position: relative;
                    top: 2.5vw;
                    font-weight: 580;
                    font-family: Tolyer;
                    color: white; /* Color of the text */
					width: 4vw;
                }
            </style>
            <div class="card">
                <div class="field"></div>
				<div class="teams">
					<div class="home-team"></div>
					<div class="away-team"></div>
				</div>
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

		// Access the home team's lineup data
		const homeTeamLineup = attributes.home_team_lineup;
		const homeTeam = attributes.home_team;
		const awayTeam = attributes.away_team;

		if (!homeTeamLineup) {
			this.shadowRoot.querySelector('.card').innerHTML = 'Home team lineup not available';
			return;
		}

		// Display the home and away team names
		this.shadowRoot.querySelector('.home-team').textContent = homeTeam;
		this.shadowRoot.querySelector('.away-team').textContent = awayTeam;

		// Get the home team's formation and starting XI
		const formationType = homeTeamLineup.formation;
		const startingXI = homeTeamLineup['starting XI'];

		const formation = FORMATIONS[formationType];
		if (!formation) {
			this.shadowRoot.querySelector('.card').innerHTML = `Formation "${formationType}" is not supported`;
			return;
		}

		const players = this.shadowRoot.querySelector('.players');
		players.innerHTML = '';  // Clear previous players

		// Get actual width and height of the players container
		const containerWidth = players.offsetWidth;
		const containerHeight = players.offsetHeight;

		// Iterate over the starting XI and render them based on the formation
		startingXI.forEach((playerInfo, index) => {
			const position = formation[index];
			if (position) {
				const playerContainer = document.createElement('div');
				playerContainer.className = 'player-container';

				// Calculate dynamic left and top positions based on container size
				const leftPos = ((position.y - 1) / 4) * containerWidth;
				const topPos = ((5 - position.x) / 5) * containerHeight;

				playerContainer.style.left = `${leftPos}px`;
				playerContainer.style.top = `${topPos}px`;

				const playerCircle = document.createElement('div');
				playerCircle.className = 'player-circle';

				const playerImage = document.createElement('img');
				// Add fallback for player image if missing
				playerImage.src = `https://media.api-sports.io/football/players/${playerInfo.ID}.png` || 'fallback-image-url.png';
				playerImage.alt = playerInfo.name.split(' ').slice(-1)[0];

				const playerName = document.createElement('div');
				playerName.className = 'player-name';
				playerName.textContent = playerInfo.name.split(' ').slice(-1)[0];

				playerCircle.appendChild(playerImage);
				playerContainer.appendChild(playerCircle);
				playerContainer.appendChild(playerName);
				players.appendChild(playerContainer);
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
