<div align="center">

<img src="images/Logo with Slogan.png" alt="Dermaliss" width="500">

### Revive your skin, transform your life.

**A multi-page front-end skincare website built with HTML, CSS, and JavaScript.**

<br>

[🌸 Website](#-the-website) · [✨ Interactions](#-interactive-experience) · [🎨 Design](#-visual-identity) · [🛠 Technologies](#-technologies)

</div>

---

## ✦ Preview

<p align="center">
  <img src="docs/demo/homepage.gif" alt="Dermaliss website preview" width="900">
</p>

<p align="center">
  <em>A short walkthrough of the Dermaliss homepage and its visual interactions.</em>
</p>

> **README asset:** `docs/demo/homepage.gif`

---

## 🌸 About Dermaliss

**Dermaliss** is a skincare website developed as an academic front-end web development project.

The website brings together several skincare-focused experiences under one visual identity:

<table>
<tr>
<td align="center" width="25%">

### 🧴

**Products**

Explore skincare products with benefits, ingredients, directions, and interactive product imagery.

</td>
<td align="center" width="25%">

### 🌿

**Remedies**

Explore ingredient-based skincare remedies with supporting imagery and instructions.

</td>
<td align="center" width="25%">

### 💆

**Massages**

Learn about different facial massage techniques through visual guides and step-by-step directions.

</td>
<td align="center" width="25%">

### ✦

**About Us**

Discover the Dermaliss story, vision, promise, and project creators.

</td>
</tr>
</table>

---

# 🌸 The Website

Dermaliss is organised into five main pages, each serving a different part of the skincare experience.

### Home

<p align="center">
  <img src="docs/screenshots/home.png" alt="Dermaliss home page" width="800">
</p>

The landing page introduces the Dermaliss brand and directs visitors towards the main skincare sections.

Its hero area uses a changing background sequence, followed by a **What We Offer** section linking to Products, Massages, and Remedies.

---

### Products

<p align="center">
  <img src="docs/screenshots/products.png" alt="Dermaliss products page" width="800">
</p>

The Products page presents five skincare products:

* Laneige Water Sleeping Mask
* CeraVe Hydrating Hyaluronic Acid Serum
* The Ordinary Glycolic Acid 7% Toning Solution
* La Roche-Posay Effaclar Duo (+)
* Fresh Sugar Lip Treatment Advanced Therapy

Each product provides:

**Benefits · Ingredients · Directions**

The product imagery also uses an interactive rotation effect to reveal additional information.

<p align="center">
  <img src="docs/demo/product-interaction.gif" alt="Dermaliss product interaction" width="700">
</p>

---

### Remedies

<p align="center">
  <img src="docs/screenshots/remedies.png" alt="Dermaliss remedies page" width="800">
</p>

The Remedies page features:

* 🍯 Honey-Coffee Face Mask
* 🍚 Rice Toner
* 🍅 Tomato Brightening Treatment
* 🥒 Cucumber Hydration Therapy
* 🍌 Gram Flour and Banana Mask

The sections combine written information, ingredient imagery, directions, benefits, and additional tips where applicable.

---

### Massages

<p align="center">
  <img src="docs/screenshots/massages.png" alt="Dermaliss massages page" width="800">
</p>

The Massages page introduces:

* Guasha Massage
* Roller Massage
* Sculpting Massage
* Kansa Massage
* Ice Globe Massage

Image-based selectors allow visitors to move between the different massage techniques.

---

### About Us

<p align="center">
  <img src="docs/screenshots/about.png" alt="Dermaliss about page" width="800">
</p>

The About Us page presents the Dermaliss:

**Story · Vision · Promise**

It also contains the project creators' contact information and location details.

---

# ✨ Interactive Experience

Dermaliss is a static website, but it was designed to feel interactive rather than simply presenting a collection of HTML pages.

## Smooth Navigation

A shared JavaScript function handles navigation to specific sections of a page.

The scroll position is adjusted to account for the fixed navigation bar, creating a smoother browsing experience.

```javascript
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - 90,
            behavior: 'smooth'
        });
    }
}
```

---

## Hover Interactions

Hover effects are used throughout the website for:

* Navigation buttons
* Product cards
* Product imagery
* Remedy imagery
* Massage selectors
* Interactive visual elements

<p align="center">
  <img src="docs/demo/hover-interactions.gif" alt="Dermaliss hover interactions" width="800">
</p>

---

## Product Image Interaction

The product page uses a rotation effect to transform the product image and reveal additional information.

<p align="center">
  <img src="docs/demo/product-interaction.gif" alt="Product image rotation interaction" width="700">
</p>

---

## Animated Visual Sections

CSS animations are used to create movement across the website, including:

* Changing hero backgrounds
* Fade-in effects
* Zoom effects
* Slide effects
* Opacity transitions
* Hover transformations

<p align="center">
  <img src="docs/demo/animations.gif" alt="Dermaliss visual animations" width="800">
</p>

---

# 🎨 Visual Identity

The visual identity of Dermaliss is built around a combination of **deep blue tones, light sections, white space, photography, and skincare imagery**.

## Colour Language

The darker blue sections provide contrast against lighter content areas, while photographic imagery reinforces the skincare and self-care theme.

<p align="center">
  <img src="docs/design/colour-palette.png" alt="Dermaliss colour palette" width="700">
</p>

---

## Branding

The Dermaliss logo is consistently used across the website.

<p align="center">
  <img src="images/Logo with Slogan.png" alt="Dermaliss logo with slogan" width="450">
</p>

The fixed navigation bar provides access to:

**HOME · PRODUCTS · REMEDIES · MASSAGES · ABOUT US**

This repeated visual structure keeps the separate pages connected as one website.

---

# 🛠 Technologies

<p align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">

</p>

### HTML5

Used to structure the individual website pages and their content.

### CSS3

Used for:

* Layout
* Styling
* Animations
* Transitions
* Hover effects
* Background imagery
* Visual presentation

### JavaScript

Used primarily for interactive section navigation and smooth scrolling.

### Google Fonts

The Massages page uses Google Fonts for typography.

---

# 📁 Project Structure

```text
Dermaliss-Skincare-Website/
│
├── About Us.html
├── home.html
├── massages.html
├── Products.html
├── remedies.html
├── scroll.js
│
├── images/
│   ├── Logo and branding
│   ├── Product imagery
│   ├── Remedy imagery
│   ├── Massage imagery
│   ├── Backgrounds
│   └── Supporting assets
│
├── Products Page/
│   ├── Products.html
│   ├── Products.js
│   └── Product images
│
└── docs/
    ├── screenshots/
    │   ├── home.png
    │   ├── products.png
    │   ├── remedies.png
    │   ├── massages.png
    │   └── about.png
    │
    ├── demo/
    │   ├── homepage.gif
    │   ├── product-interaction.gif
    │   ├── hover-interactions.gif
    │   └── animations.gif
    │
    └── design/
        └── colour-palette.png
```

The page-specific styling is contained within the HTML files, while `scroll.js` provides shared smooth-scrolling functionality.

---

# ▶ Running Dermaliss

**Dermaliss-Skincare-Website** is a static front-end website.

No database, backend, package installation, or build process is required.

### Clone the repository

```bash
git clone https://github.com/Umaima-Manzoor/Dermaliss-Skincare-Website.git
```

### Open the project

Open the cloned **Dermaliss-Skincare-Website** directory in a code editor such as Visual Studio Code.

### Launch

Open `home.html` in a web browser.

For development, the project can also be opened using **Live Server** in Visual Studio Code.

---

# 📌 Project Scope

This repository contains the **front-end version of Dermaliss**.

### Included

* Multi-page skincare website
* Product presentation
* Home-remedy content
* Facial massage guides
* Brand/about section
* Image-based navigation
* Hover interactions
* CSS animations
* Smooth scrolling
* Consistent navigation and branding

### Not included

* Database
* User authentication
* User accounts
* Shopping cart
* Checkout
* Payment processing
* Product ordering
* Server-side functionality

A separate Dermaliss project contains the **database implementation** and is documented independently.

---

# 🎓 Academic Project

Dermaliss was developed as an academic web-development project, providing practical experience with:

* Multi-page website development
* HTML and CSS
* JavaScript interaction
* Navigation design
* Visual asset management
* CSS animations and transitions
* Consistent branding
* User-focused interface design

---

<div align="center">

## Dermaliss

**Revive your skin, transform your life.**

<br>

*Built as an academic front-end web development project.*

</div>
