const LOGO_SVG = `<!-- Font Poppins, Extracted by @neytaan_art (on Instagram)  -->
<svg id="NR-LOGO" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 735.5 491.4" fill="currentColor">
    <g id="N-left">
        <rect width="119.7" height="491.4"/>
    </g>
    <g id="N-middle">
        <polygon points="118.8,0 118.8,188.3 319,491.4 319,304.5"/>
    </g>
    <g id="N-right">
        <rect x="318.9" y="0" width="119.7" height="491.4"/>
    </g>
    <g id="R-top">
        <path d="M469.5,221.2v84.7h105.3c0,0,155.8-3.3,155.7-155C730.5,4.2,566.1,0,566.1,0h-96.6v99.4l79.6-0.3c0,0,58.4-0.6,60.5,53.9c2.1,55.3-28,64.8-60.5,68.2L469.5,221.2z"/>
    </g>
    <g id="R-bottom">
        <polygon points="498.2,305.9 600.4,491.4 735.5,491.4 622.1,296.8"/>
    </g>
</svg>
`;

class NR_Logo extends HTMLElement {
	parser = null;
	constructor() {
		super();
		this.parser = new DOMParser();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.#render();
	}

	attributesChangedCallback() {
		this.#render();
	}

	#render() {
		this.shadowRoot.innerHTML = logo;
	}
}

customElements.define("nr-logo", NR_Logo);
