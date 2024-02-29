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
`;

const SIZES = {
	xs: "25px",
	sm: "35px",
	md: "50px",
	lg: "80px",
	xl: "120px",
	xxl: "250px",
};
const SIZE_DEFAULT = "md";

const LINK_HREF = "https://nicolasrenault.com";
const LINK_TITLE = "Nicolas Renault";
const LINK_TARGET = "_blank";

const CSS_LINK = `
	a {
		display: block;	
		text-decoration: none;
		color: inherit;
		transition: transform 0.1s;
		transition-timing-function: cubic-bezier(.4,0,.2,1);
	}

	a:hover {
		transform: matrix(1, 0, 0, 1, 0, -1);
	}
`;

const CSS_HOVER = `
	path, rect, polygon {
		transition: all 0.2s;
	}

	path:hover, rect:hover, polygon:hover {
		filter: invert(40%);
	}
`;

const CSS_RAINBOW = `
	#NR-LOGO:hover {
		animation: rainbow 1.7s infinite;
	}

	@keyframes rainbow{
		100%,0%{
			color: rgb(255,0,0);
		}
		8%{
			color: rgb(255,127,0);
		}
		16%{
			color: rgb(255,255,0);
		}
		25%{
			color: rgb(127,255,0);
		}
		33%{
			color: rgb(0,255,0);
		}
		41%{
			color: rgb(0,255,127);
		}
		50%{
			color: rgb(0,255,255);
		}
		58%{
			color: rgb(0,127,255);
		}
		66%{
			color: rgb(0,0,255);
		}
		75%{
			color: rgb(127,0,255);
		}
		83%{
			color: rgb(255,0,255);
		}
		91%{
			color: rgb(255,0,127);
		}
	}
`;

const CSS_LIGHT_MODE = `
	#N-left {
		fill: #0e4429
	}
	#N-middle {
		fill: #105531
	}
	#N-right {
		fill: #116b3c
	}
	#R-top {
		fill: #168549
	}
	#R-bottom {
		fill: #24a55c
	}
`;

const CSS_DARK_MODE = `
	#N-left {
		fill: #39d353
	}
	#N-middle {
		fill: #8aeb9a
	}
	#N-right {
		fill: #bdf5c6
	}
	#R-top {
		fill: #ddfbe1
	}
	#R-bottom {
		fill: #f1fcf2
	}
`;

const COMMENT = "Logo of Nicolas Renault. Visit https://nicolasrenault.com";

class NR_Logo extends HTMLElement {
	parser = undefined;
	logo = undefined;
	size = undefined;
	color = undefined;
	link = undefined;
	animated = undefined;
	rainbow = undefined;

	constructor() {
		super();
		this.parser = new DOMParser();

		//Get the logo from the LOGO_SVG constant
		this.logo = this.parser.parseFromString(
			LOGO_SVG,
			"image/svg+xml"
		).documentElement;

		//Get attributes from the element
		const SIZE_ATTR = this.getAttribute("size");
		if (SIZE_ATTR === null) {
			this.size = "auto";
		} else if (!SIZES.hasOwnProperty(SIZE_ATTR)) {
			this.size = SIZES[SIZE_DEFAULT];
		} else {
			this.size = SIZES[SIZE_ATTR];
		}
		this.color = this.getAttribute("color") ?? "currentColor";
		this.link = this.getAttribute("link") ?? false;
		this.animated = this.getAttribute("animated") ?? false;
		this.rainbow = this.getAttribute("rainbow") ?? false;

		this.attachShadow({ mode: "open" });

		this.initComponent();
	}

	/**
	 * Init the component with the logo and the link if it's set
	 *
	 * @see initCSS
	 */
	initComponent() {
		const comment = document.createComment(COMMENT);
		this.shadowRoot.appendChild(comment);

		let mainContainer;

		//If the link is set, create an a tag with the link and the logo inside, else, just create the logo
		if (this.link !== false) {
			const a = this.createLink();
			a.appendChild(this.logo);
			mainContainer = a;
		} else {
			mainContainer = this.logo;
		}

		//Append the mainContainer to the shadowRoot
		this.shadowRoot.appendChild(mainContainer);
		this.initCSS();
	}

	/**
	 * Init the CSS with the size and the color from the attributes
	 */
	initCSS() {
		//Replace the {width} and {color} in the CSS with the size and the color
		let finalCSS = CSS;
		finalCSS = finalCSS.replaceAll("{width}", this.size);

		//If the color is set to light or dark, add the light or dark mode CSS and set the color to transparent
		if (this.color === "light" || this.color === "dark") {
			if (this.color === "light") {
				finalCSS += CSS_LIGHT_MODE;
			} else {
				finalCSS += CSS_DARK_MODE;
			}

			this.color = "transparent";
		}

		finalCSS = finalCSS.replaceAll("{color}", this.color);

		//If the link attribute is set, add the link CSS
		if (this.link !== false) {
			finalCSS += CSS_LINK;
		}

		//If the animated attribute is set, add the hover animation CSS
		if (this.animated !== false) {
			finalCSS += CSS_HOVER;
		}

		//If the rainbow attribute is set, add the rainbow animation CSS
		if (this.rainbow !== false) {
			finalCSS += CSS_RAINBOW;
		}

		//Create the style tag and append it to the shadowRoot
		const style = document.createElement("style");
		style.innerHTML = finalCSS;
		this.shadowRoot.appendChild(style);
	}

	/**
	 * Create the link with the href, title and target from the constants
	 *
	 * @returns {HTMLAnchorElement}
	 */
	createLink() {
		const a = document.createElement("a");
		a.href = LINK_HREF;
		a.title = LINK_TITLE;
		a.target = LINK_TARGET;
		return a;
	}
}

customElements.define("nr-logo", NR_Logo);
