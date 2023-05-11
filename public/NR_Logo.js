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

const CSS = `
    :host {
        display: block;
        width: {width};
        color: {color};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const SIZES = {
	xs: "25px",
	sm: "35px",
	md: "50px",
	lg: "80px",
	xl: "120px",
	xxl: "250px",
};

const COLORS_LIST = [
	//TODO Change the list
	"currentColor",
	"rgba(255, 178, 98, 0.75)",
	"rgba(133, 221, 161, 0.75)",
	"rgba(128, 165, 255, 0.75)",
	"rgba(186, 142, 219, 0.75)",
	"rgba(237, 106, 90, 0.75)",
	"rgba(255, 112, 150, 0.75)",
	"rgba(255, 255, 0, 0.75)",
	"rgba(0, 255, 255, 0.75)",
	"rgba(255, 0, 255, 0.75)",
	"rgba(0, 0, 255, 0.75)",
	"rgba(0, 255, 0, 0.75)",
	"rgba(255, 0, 0, 0.75)",
	"rgba(255, 255, 255, 0.75)",
	"rgba(0, 0, 0, 0.75)",
];

const LINK = "https://nicolasrenault.com";

class NR_Logo extends HTMLElement {
	parser = null;
	constructor() {
		super();
		this.parser = new DOMParser();
		this.attachShadow({ mode: "open" });
		this.initComponent();
	}

	/**
	 * Init the component with the logo and the link if it's set
	 * Call the initCSS function to init the CSS and the initJavaScript function to init the animation
	 *
	 * @see initCSS
	 * @see initJavaScript
	 */
	initComponent() {
		//Get the logo from the LOGO_SVG constant
		const logo = this.parser.parseFromString(
			LOGO_SVG,
			"image/svg+xml"
		).documentElement;

		//Get the link and the animated attributes from the attributes
		const link = this.getAttribute("link") ?? false;
		const animated = this.getAttribute("animated") ?? false;

		let mainContainer;

		//If the link is set, create an a tag with the link and the logo inside, else, just create the logo
		if (link !== false) {
			const a = document.createElement("a");
			a.href = LINK;
			a.target = "_blank";
			a.appendChild(logo);
			mainContainer = a;
		} else {
			mainContainer = logo;
		}

		//Append the mainContainer to the shadowRoot
		this.shadowRoot.appendChild(mainContainer);
		this.initCSS();

		if (animated !== false) {
			this.initJavaScript();
		}
	}

	/**
	 * Init the CSS with the size and the color from the attributes
	 */
	initCSS() {
		//Get the size and the color from the attributes
		const size = SIZES[this.getAttribute("size") ?? "md"];
		const color = this.getAttribute("color") ?? "currentColor";

		//Replace the {width} and {color} in the CSS with the size and the color
		let finalCSS = CSS;
		finalCSS = finalCSS.replace("{width}", size);
		finalCSS = finalCSS.replaceAll("{color}", color);

		//Create the style tag and append it to the shadowRoot
		const style = document.createElement("style");
		style.innerHTML = finalCSS;
		this.shadowRoot.appendChild(style);
	}

	/**
	 * Init the javascript listeners for the animation on mouseenter
	 */
	initJavaScript() {
		const svg = this.shadowRoot.querySelector("svg");
		const paths = svg.querySelectorAll("path, polygon, rect");
		const colors = COLORS_LIST;

		const getRandomColor = () => {
			return colors[Math.floor(Math.random() * colors.length)];
		};

		paths.forEach((path) => {
			path.addEventListener("mouseenter", () => {
				path.style.fill = getRandomColor();
			});
		});
	}
}

customElements.define("nr-logo", NR_Logo);
