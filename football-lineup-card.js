class FootballLineupCard extends HTMLElement {
    setConfig(config) {
        this.config = config;
        this.attachShadow({ mode: 'open' });
    }

    set hass(hass) {
        const entity = hass.states[this.config.entity];
        const attributes = entity.attributes;

        const formation = attributes.formation;
        const coach = attributes.coach;
        const startingXI = attributes["starting XI"];
        const substitutes = attributes.substitutes;

        const style = `
            .field {
                background: url('/local/field.png') no-repeat center center;
                background-size: contain;
                width: 100%;
                height: 400px;
                position: relative;
            }
            .player {
                position: absolute;
                color: white;
                background-color: rgba(0, 0, 0, 0.5);
                padding: 5px;
                border-radius: 5px;
                text-align: center;
            }
        `;

        const field = document.createElement('div');
        field.className = 'field';
        field.style = style;

        startingXI.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.style.left = `${player.grid.split(':')[1] * 10}%`;
            playerDiv.style.top = `${player.grid.split(':')[0] * 10}%`;
            playerDiv.innerHTML = `${player.name} (${player.number})`;
            field.appendChild(playerDiv);
        });

        this.shadowRoot.innerHTML = `
            <style>${style}</style>
            <div class="field">
                <div class="info">
                    <p>Formation: ${formation}</p>
                    <p>Coach: ${coach}</p>
                </div>
                ${field.innerHTML}
            </div>
        `;
    }

    getCardSize() {
        return 3;
    }
}

customElements.define('football-lineup-card', FootballLineupCard);


// code to show the card in HA card-picker
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

