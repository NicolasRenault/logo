[![Send submodule updates to parent repo](https://github.com/NicolasRenault/logo/actions/workflows/main.yml/badge.svg)](https://github.com/NicolasRenault/logo/actions/workflows/main.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/62f00ad4-5a8e-4c9d-a62f-3003b31b0dfe/deploy-status)](https://app.netlify.com/sites/bucolic-beijinho-348f4b/deploys)



# Logo

A collection of my logos. SVGs, WebComponent, and more.

Logo and SVGs by [@neytaan_art](https://instagram.com/neytaan_art?igshid=NTc4MTIwNjQ2YQ==).

## Webcomponent

---

Take a look at the [Web Component Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).

### Init

To start using the webcomponent, you need to import it into your project:

<!-- TODO Change link if necessary -->

```html
<script defer src="https://cdn.nicolasrenault.com/logo/NR_Logo.js"></script>
```

Then you can use the component like other HTMLElement:

```html
<nr-logo></nr-logo>
```

### Options

-   **size**

    By default, the size will be set to auto and match the parent's size.

    You can choose between a list of default sizes that will define the component size :

    -   xs: 25px
    -   sm: 35px
    -   md: 50px
    -   lg: 80px
    -   xl: 120px
    -   xxl: 250px

    ```html
    <nr-logo size="md"></nr-logo>
    ```

-   **color**

    By default, the component uses the [currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword) from heritage.

    Or you can use the **color** option and pass all types of [valid CSS colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value):

    ```html
    <nr-logo color="pink"></nr-logo>
    <nr-logo color="#ff0000"></nr-logo>
    <nr-logo color="rgb(31 120 50)"></nr-logo>
    <nr-logo color="hsl(240 100% 50%)"></nr-logo>
    ```

-   **link**

    You can use the **link** option to wrap the svg logo with a [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) to [https://nicolasrenault.com](https://nicolasrenault.com).

    ```html
    <nr-logo link></nr-logo>
    ```

#### Animations

-   **animated**

    With the option **animated** all the different parts of the logo will change color individually when the mouse hovers over it.

    ```html
    <nr-logo animated></nr-logo>
    ```

-   **rainbow**

    With the option **rainbow**, the logo will take the color of the rainbow when the mouse hovers over it.

    ```html
    <nr-logo rainbow></nr-logo>
    ```

#### Multiple options

You can as well mix multiple options at the same time:

```html
<nr-logo size="sm" color="#941245" link rainbow></nr-logo>
```

## Favicon

All the favicon links for sizes 16x16, 32x32, and 96x96 for light and dark color schemes.

```html
<!-- 16x16 light (default) -->
<link
	rel="icon"
	href="https://cdn.nicolasrenault.com/logo/NR_logo_16x16.ico"
	size="16x16"
	media="(prefers-color-scheme: light)"
/>
<!-- 32x32 light (default) -->
<link
	rel="icon"
	href="https://cdn.nicolasrenault.com/logo/NR_logo_32x32.ico"
	size="32x32"
	media="(prefers-color-scheme: light)"
/>
<!-- 96x96 light (default) -->
<link
	rel="icon"
	href="https://cdn.nicolasrenault.com/logo/NR_logo_96x96.ico"
	size="96x96"
	media="(prefers-color-scheme: light)"
/>
<!-- 16x16 dark -->
<link
	rel="icon"
	href="https://cdn.nicolasrenault.com/logo/NR_logo_dark_16x16.ico"
	size="16x16"
	media="(prefers-color-scheme: dark)"
/>
<!-- 32x32 dark -->
<link
	rel="icon"
	href="https://cdn.nicolasrenault.com/logo/NR_logo_dark_32x32.ico"
	size="32x32"
	media="(prefers-color-scheme: dark)"
/>
<!-- 96x96 dark -->
<link
	rel="icon"
	href="https://cdn.nicolasrenault.com/logo/NR_logo_dark_96x96.ico"
	size="96x96"
	media="(prefers-color-scheme: dark)"
/>
```

# License
<!-- https://gitthub.com/juxtopposed/realtimecolors/blob/main/README.md -->
This project is under the CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives) license.
1. You must give appropriate credit, provide a link to the license, and indicate if changes were made.
2. NonCommercial — You may not use the material for commercial purposes.
3. If you remix, transform, or build upon the material, you may not distribute the modified material.

[Read more about License](https://creativecommons.org/licenses/by-nc-nd/4.0/)

[View License](https://github.com/NicolasRenault/logo/blob/main/LICENSE.md)
