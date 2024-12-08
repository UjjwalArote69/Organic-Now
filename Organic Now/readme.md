# 🌱 Organic Now Website

## Overview

The **Organic Now** website is a single-page application designed to promote organic produce and provide information about the company's mission, products, and community engagement. The website features smooth scrolling, a responsive layout, and sections that highlight the company's values and offerings.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Features](#features)
- [Code Explanation](#code-explanation)
- [How to Run](#how-to-run)
- [Contributing](#contributing)
- [License](#license)

---

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling of the web page.
- **JavaScript**: Interactivity and animations.
- **Locomotive Scroll**: Library for smooth scrolling effects.
- **GSAP (GreenSock Animation Platform)**: Library for animations and scroll-triggered effects.

---

## File Structure

/OrganicNow │ ├── index.html # Main HTML file containing the structure of the website ├── style.css # Custom styles for the website ├── script.js # JavaScript for interactivity and animations └── Assets # Directory containing images and assets ├── hero-image.jpg # Image for the hero section ├── section2.jpg # Image for section 2 ├── section3.jpg # Image for section 3 ├── section4.jpg # Image for section 4 ├── section6.jpg # Image for the final section └── cards # Subdirectory for card images ├── banana.jpg ├── berry.jpg ├── fig.jpg ├── pomegranate.jpg ├── apple.jpg ├── strawberry.jpg ├── orange.jpg └── pear.jpg └── mango.jpg



---

## Features

- **Hero Section**: 
  - Engaging background image with a navigation bar and a prominent call-to-action button.

- **About Us Section**: 
  - Clear description of the company's mission and commitment to quality organic produce.

- **Sustainable Practices Section**: 
  - Highlights the company's dedication to sustainable agriculture and local farmers.

- **Premium Organic Selection Section**: 
  - Showcases high-quality organic products with a focus on quality.

- **Popular Organic Picks Section**: 
  - A visually appealing horizontal scrolling section featuring popular organic items.

- **Community Engagement Section**: 
  - Encourages users to join the community and subscribe for exclusive updates.

- **Responsive Design**: 
  - Optimized for various screen sizes, ensuring a seamless experience on both mobile and desktop devices.

---

## Code Explanation

### HTML Structure

- The HTML document begins with the `<!DOCTYPE html>` declaration, followed by the `<html>` tag with a language attribute set to English.
- The `<head>` section includes:
  - Character set and viewport settings for responsive design.
  - Title of the webpage.
  - Links to external CSS stylesheets for Locomotive Scroll and Remix Icon, as well as a custom stylesheet (`style.css`).

### Sections

1. **Hero Section**:
   - Contains an image, a navigation bar with links, and a main content area with a heading, paragraph, and button.

2. **About Us Section**:
   - Divided into two parts: a left column for the title and a right column for detailed information about the company's mission and values.

3. **Sustainable Practices Section**:
   - Features an image and a description of the company's sustainable practices.

4. **Premium Organic Selection Section**:
   - Similar structure to the previous section, showcasing premium products.

5. **Popular Organic Picks Section**:
   - A horizontally scrolling section that displays images of popular organic items.

6. **Community Engagement Section**:
   - Encourages users to join the community with a subscription form for email updates.

### JavaScript

- The script tags at the end of the body load external JavaScript libraries for smooth scrolling and animations.
- The `script.js` file is included for custom JavaScript functionality.

---

## How to Run

1. Clone the repository to your local machine using:
   ```bash
   git clone <repository-url>