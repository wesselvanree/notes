---
title: Testing the Markdown Elements in an Article
subtitle: Trying out the styling of all markdown elements
slug: markdown-test
date: 2021-03-16
featuredImage: ./images/hero.jpg
excerpt: When coding a website, you never know how it's goinf to look without really testing it. So in this article, all markdown elements will be visible.
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World!");

    int x = 7;
    int y = 2 * x + 2;

    System.out.println(y);
  }
}
```

*Lorem ipsum dolor* sit amet, `consectetur adipiscing elit`. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere. Sed bibendum tortor eget nunc pharetra, ultrices malesuada nibh lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. $y = 2x + 4$ Nunc finibus tellus eu finibus volutpat. Donec congue mi in leo hendrerit, in tempus sem viverra. Duis sem leo, pharetra vitae elementum a, pellentesque in nibh.

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

# Heading 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere. Sed bibendum tortor eget nunc pharetra, ultrices malesuada nibh lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc finibus tellus eu finibus volutpat. Donec congue mi in leo hendrerit, in tempus sem viverra. Duis sem leo, pharetra vitae elementum a, pellentesque in nibh.

### Ordered List

1. First item
    - Subitem
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Checklists

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media


## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere.

It is also possible to add some math using **KaTeX**.

$$
\begin{aligned}
\displaystyle {1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
\end{aligned}
$$

### Heading 3

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc finibus tellus eu finibus volutpat. Donec congue mi in leo hendrerit, in tempus sem viverra. Duis sem leo, pharetra vitae elementum a, pellentesque in nibh.

# Heading 1

> This is a very long blockquote.
> With a very interesing story.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere. Sed bibendum tortor eget nunc pharetra, ultrices malesuada nibh lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc finibus tellus eu finibus volutpat. Donec congue mi in leo hendrerit, in tempus sem viverra. Duis sem leo, pharetra vitae elementum a, pellentesque in nibh.

term
: definition

```js
const main = document.querySelector("main");
const keyCode = document.querySelector(".keyCode");
const key = document.querySelector(".key");
const code = document.querySelector(".code");
const which = document.querySelector(".which");
const eLocation = document.querySelector(".e-location");

let DarkModeCounter = 0;
document.body.onkeyup = function (e) {
  keyCode.innerHTML = e.keyCode;
  key.innerHTML = "'" + e.key + "'";
  code.innerHTML = "'" + e.code + "'";
  which.innerHTML = e.which;
  eLocation.innerHTML = e.location;
  if (e.key == 'D' && e.ctrlKey == true) {
    e.preventdefault;
    if (main.classList.contains("dark-mode")) {
      main.classList.remove("dark-mode");
    } else {
      main.classList.add("dark-mode");
    }
  }
  console.log(e);
}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere. Sed bibendum tortor eget nunc pharetra, ultrices malesuada nibh lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc finibus tellus eu finibus volutpat. Donec congue mi in leo hendrerit, in tempus sem viverra. Duis sem leo, pharetra vitae elementum a, pellentesque in nibh.

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere. Sed bibendum tortor eget nunc pharetra, ultrices malesuada nibh lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc finibus tellus eu finibus volutpat. Donec congue mi in leo hendrerit, in tempus sem viverra. Duis sem leo, pharetra vitae elementum a, pellentesque in nibh.

# Images

Different sizes of images are supported. A small image is shown below.

<figure class="small-image">

![Small size image](images/small.jpg)
<figcaption>Caption text for small image</figcaption>

</figure>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere. Sed bibendum tortor eget nunc pharetra, ultrices malesuada nibh lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Furthermore, medium sized images are styled in the following manner.

<figure class="medium-image">

![Medium size image](images/medium.jpg)
<figcaption>Caption text for medium image</figcaption>

</figure>

But it takes more than good ideas to build and grow a business. It takes people to bring them into reality. Are those people collaborating and sharing their expertise, or are they in conflict and keeping it to themselves? But it takes more than good ideas to build and grow a business. It takes people to bring them into reality. Are those people collaborating and sharing their expertise, or are they in conflict and keeping it to themselves? But it takes more than good ideas to build and grow a business. It takes people to bring them into reality. Are those people collaborating and sharing their expertise, or are they in conflict and keeping it to themselves? But it takes more than good ideas to build and grow a business. It takes people to bring them into reality. Are those people collaborating and sharing their expertise, or are they in conflict and keeping it to themselves?

<figure class="large-image">

![Large size image](images/large.jpg)
<figcaption>Caption text for large image</figcaption>

</figure>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec hendrerit nibh. Nullam eleifend nisl a sodales laoreet. Donec sodales quam at dolor pharetra, eget molestie enim posuere. Sed bibendum tortor eget nunc pharetra, ultrices malesuada nibh lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc finibus tellus eu finibus volutpat. Donec congue mi in leo hendrerit, in tempus sem viverra. Duis sem leo, pharetra vitae elementum a, pellentesque in nibh.
