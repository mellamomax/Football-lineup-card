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
                .hello-world {
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 5px;
                    border-radius: 3px;
                }
            </style>
            <div class="card">
                <div class="field"></div>
                <div class="hello-world">Hello World</div>
            </div>
        `;
    }

    getCardSize() {
        return 1;
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
