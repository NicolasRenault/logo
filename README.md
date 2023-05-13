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

-   **animated**

    With the option **animated** all the different part of the logo will change color individually when the mouse hover it.

    ```html
    <nr-logo animated></nr-logo>
    ```

-   all

    You can as well mix options or use all options at the same time:

    ```html
    <nr-logo size="sm" color="#941245" link animated></nr-logo>
    ```
