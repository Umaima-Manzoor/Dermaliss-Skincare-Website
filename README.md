<div align="center">

<p align="center">
  <img src="images/branding/logo1.png" alt="Dermaliss" width="650">
</p>

# Dermaliss

### *Revive your skin, transform your life.*

**A multi-page skincare website built with HTML, CSS, and JavaScript.**

<br>

[🌸 Explore the Website](#-the-website)  · 
[✨ Interactive Experience](#-interactive-experience)  · 
[🎨 Visual Identity](#-visual-identity)  · 
[🛠 Technologies](#-technologies)

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

</div>

---

## 🌸 About Dermaliss

**Dermaliss** is a multi-page skincare website developed as an academic front-end web development project.

The website brings together skincare products, home remedies, facial massage techniques, and brand information under one consistent visual identity.

Rather than functioning as a simple collection of HTML pages, Dermaliss was designed as a cohesive browsing experience with:

* 🧴 Product information and presentation
* 🌿 Home-remedy guides
* 💆 Facial massage techniques
* 🖼️ Image-driven navigation
* ✨ Hover interactions and visual effects
* 🎞️ CSS animations and transitions
* 🧭 Consistent navigation across pages
* 🌸 A unified skincare-focused visual identity

---

# 🌿 The Website

Dermaliss is organised into **five connected pages**, each serving a different part of the experience.

<table>
<tr>
<td align="center" width="20%">

### 🏠

**Home**

Brand introduction and navigation to the main skincare sections.

</td>

<td align="center" width="20%">

### 🧴

**Products**

Skincare products with benefits, ingredients and directions.

</td>

<td align="center" width="20%">

### 🌿

**Remedies**

Ingredient-based skincare remedies and application guides.

</td>

<td align="center" width="20%">

### 💆

**Massages**

Visual guides for different facial massage techniques.

</td>

<td align="center" width="20%">

### ✦

**About Us**

The Dermaliss story, mission and promise.

</td>
</tr>
</table>

---

## 🏠 Home

The homepage introduces the Dermaliss brand and acts as the starting point for the rest of the website.

Its main sections guide visitors towards:

**Products · Massages · Remedies**

The page also uses changing background imagery and visual transitions to create movement within the landing experience.

---

## 🧴 Products

The Products page presents five skincare products:

* **Laneige Water Sleeping Mask**
* **CeraVe Hydrating Hyaluronic Acid Serum**
* **The Ordinary Glycolic Acid 7% Toning Solution**
* **La Roche-Posay Effaclar Duo (+)**
* **Fresh Sugar Lip Treatment Advanced Therapy**

Each product provides information including:

**Benefits · Ingredients · Directions**

Product imagery is also used as part of the interactive presentation, with visual rotation effects adding another layer to the product cards.

---

## 🌿 Remedies

The Remedies page focuses on ingredient-based skincare treatments.

It features:

* 🍯 **Honey-Coffee Face Mask**
* 🍚 **Rice Toner**
* 🍅 **Tomato Brightening Treatment**
* 🥒 **Cucumber Hydration Therapy**
* 🍌 **Gram Flour and Banana Mask**

Each remedy combines ingredient imagery with written information, directions, benefits and supporting skincare guidance.

---

## 💆 Massages

The Massages page introduces several facial massage techniques:

* **Guasha Massage**
* **Roller Massage**
* **Sculpting Massage**
* **Kansa Massage**
* **Ice Globe Massage**

Image-based selectors allow visitors to move between the different techniques while keeping the experience visually focused.

---

## ✦ About Us

The About Us page provides the brand story behind Dermaliss through sections focused on:

**Our Story · Our Mission · Our Promise**

The page also includes project-related contact and location information.

---

# ✨ Interactive Experience

Although Dermaliss is a static front-end website, JavaScript and CSS were used to make the pages feel more dynamic and responsive.

### 🧭 Smooth Section Navigation

A shared JavaScript function handles navigation to specific sections of a page.

The scroll position is adjusted to account for the fixed navigation bar while maintaining smooth scrolling.

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

This functionality is shared through:

```text
js/scroll.js
```

---

### ✨ Hover Effects

Hover interactions are used throughout the website to provide visual feedback.

These include interactions on:

* Navigation elements
* Product cards
* Product imagery
* Remedy imagery
* Massage selectors
* Other visual interface elements

The effects help distinguish interactive elements from static content without relying on complex JavaScript.

---

### 🔄 Product Image Interaction

The Products page uses image-based interaction to create a more engaging presentation of the skincare products.

The product imagery can transform through a rotation-style visual effect, allowing the interface to communicate additional information without requiring a completely separate page for every product.

---

### 🎞️ CSS Animations

CSS is used extensively to introduce movement and visual transitions throughout the website.

Examples include:

* Changing hero backgrounds
* Fade-in effects
* Zoom effects
* Slide effects
* Opacity transitions
* Hover transformations
* Image transitions

The animations are intended to support the visual identity rather than overwhelm the content.

---

# 🎨 Visual Identity

Dermaliss was designed around a **clean, skincare-oriented visual language** combining deep blue tones, lighter content sections, white space, photography and product imagery.

The visual system aims to make the separate pages feel like parts of the same brand rather than unrelated HTML documents.

### 🌌 Colour & Contrast

Dark blue sections create contrast against lighter content areas.

This allows large photographic backgrounds and skincare imagery to stand out while maintaining a consistent colour language across the website.

### 🌸 Branding

The Dermaliss logo is used throughout the website to maintain a recognisable identity.

The primary navigation connects:

**HOME · PRODUCTS · REMEDIES · MASSAGES · ABOUT US**

This repeated structure provides consistency as visitors move between the different sections.

<p align="center">
  <img src="images/branding/logo1.png" alt="Dermaliss" width="420">
</p>

---

# 🛠 Technologies

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

</div>

### HTML5

Used to structure the individual pages, sections, navigation elements, content and images.

### CSS3

Used extensively for:

* Layout
* Responsive visual presentation
* Colours and typography
* Background imagery
* Animations
* Transitions
* Hover effects
* Image positioning
* Visual effects

### JavaScript

Used primarily for interactive behaviour, including smooth section navigation.

### Google Fonts

Google Fonts are used for typography on the Massages page.

---

# 📁 Project Structure

```text
Dermaliss-Skincare-Website/
│
├── index.html
├── README.md
│
├── pages/
│   ├── about.html
│   ├── massages.html
│   ├── products.html
│   └── remedies.html
│
├── js/
│   └── scroll.js
│
└── images/
    │
    ├── about/
    │   ├── our-mission.jpg
    │   ├── our-promise.jpg
    │   └── our-story.jpg
    │
    ├── backgrounds/
    │   ├── contactus.png
    │   ├── contactus2.png
    │   ├── homeback1.jfif
    │   ├── homeback1.jpg
    │   ├── homeback2.jpg
    │   ├── homeback3.jpg
    │   ├── homeback4.jpg
    │   └── homeremediesbg.jpg
    │
    ├── branding/
    │   ├── Logo.psd
    │   ├── logo1-removebg-preview.png
    │   ├── logo1.png
    │   └── massageslogofin.png
    │
    ├── massages/
    │   └── massage-related imagery
    │
    ├── products/
    │   └── product-related imagery
    │
    └── remedies/
        └── remedy-related imagery
```

The repository separates page files, shared JavaScript and image assets into dedicated directories.

Image assets are further organised according to their purpose, making the project easier to navigate and maintain.

---

# 🚀 Running Dermaliss

Dermaliss is a **static front-end website**.

No database, backend, package installation or build process is required.

## 1. Clone the repository

```bash
git clone https://github.com/Umaima-Manzoor/Dermaliss-Skincare-Website.git
```

## 2. Open the project

Open the cloned **Dermaliss-Skincare-Website** directory in a code editor such as Visual Studio Code.

## 3. Launch the website

The main entry point is:

```text
index.html
```

You can open it directly in a browser or use a local development server such as VS Code Live Server.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

---

# 📌 Project Scope

This repository contains the **front-end version of Dermaliss**.

### Included

* Multi-page skincare website
* Brand landing page
* Product presentation
* Home-remedy content
* Facial massage guides
* About/brand sections
* Image-based navigation
* Hover interactions
* CSS animations
* Smooth scrolling
* Shared navigation
* Organised visual assets

### Not Included

* Database functionality
* User authentication
* User accounts
* Shopping cart
* Checkout
* Payment processing
* Product ordering
* Server-side functionality

> **Note:** A separate Dermaliss project contains the database implementation and is documented independently from this front-end repository.

---

# 🎓 Academic Project

Dermaliss was developed as an **academic web-development project**.

The project provided practical experience with:

* Multi-page website development
* HTML5 structure
* CSS styling and layout
* JavaScript interaction
* Navigation design
* Asset organisation
* CSS animations and transitions
* Visual consistency
* Branding
* User-focused interface design

The project also provided practical experience in maintaining a larger collection of interconnected HTML pages and visual assets within a single repository.

---

# 🌸 What Dermaliss Demonstrates

At its core, Dermaliss demonstrates how a static front-end can be structured as a complete branded website rather than a collection of isolated pages.

The project combines:

```text
Branding
   ↓
Visual Design
   ↓
Structured Content
   ↓
Interactive Elements
   ↓
Multi-page Navigation
   ↓
Complete Front-end Experience
```

---

<div align="center">

<br>

<img src="images/branding/logo1.png.svg" alt="Dermaliss" width="420">

### *Revive your skin, transform your life.*

<br>

**Dermaliss-Skincare-Website**

*An academic front-end web development project.*

<br>

🌸 · 🧴 · 🌿 · 💆 · ✦

</div>
