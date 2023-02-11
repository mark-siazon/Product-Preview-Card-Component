### REPORTS HTML validation report (1)

- Section lacks heading. Consider using `h2`-`h6` elements to add identifying headings to all sections.
```html
<section class=`__col-1 col-12 col-md-5 col-lg-5 p-0`>
```

### Community Feedback:

- **Lucas 👾** • 105,240 [_(@correlucas)_](https://github.com/correlucas)

  - Fix the alignment of the whole content using `flex` and `min-height` to manage the vertical alignment and make everything centered:
    - First of all put `min-height: 100vh` to the `body` to make the body display 100% of the viewport height.
      - (This makes the container align to the height size that's now 100% of the screen height) size
    - `display: flex` and `flex-direction: column` to align the child element (the container) vertically using the body as reference.
    - ```css
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ```

  - A better way to work this solution image, the product image.
    - By using **`<picture>`** to wrap it on the html instead of using it as `<img>` or `background-image` (with the css).
    - Using `<picture>` you wrap both images (desktop and mobile) and have more control over it.
      - You can set in the html when the images changes setting the screen size for each image that
      - For **SEO / search engine** reasons isn’t a better practice import this product image with CSS since this will make it harder to the image.
      - See the example below:
        ```html
        <picture>
          <source
            media="(max-width:650px)"
            srcset="./images/image-product-mobile.jpg"
          />
          <img
            src="./images/image-product-desktop.jpg"
            alt="Gabrielle Parfum"
            style="width:auto;"
          />
        </picture>
        ```

- **Thomas** • 150 [@Thomasvdk783](https://github.com/Thomasvdk783)
  - To center your main element you can do this in your css:
  ```css
  body {
    height: 100vh;
    display: flex;
    align-items: center;
  }
  ```

<br>

### Next Action (Soon):
- [X] Implement changes from community feedback
- [ ] TBA...



<br>

_Updated Feb 11, 2023_