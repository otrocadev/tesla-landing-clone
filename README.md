
# 🚗 Tesla Landing Page Clone

![Tesla Landing Demo image](/public/readme_cover.avif)

This project tries to replicate the landing page of the [Tesla's](tesla.com/es_ES) webpage in Spain to learn Astro and Tailwind CSS technologies.

> [!NOTE]
> This project is for learning purposes only. In every case it is **NOT** meant to impersonate the TESLA.COM/ES original site or take any other commercial or non-commercial use other than **practice and demostrate web development skills.**

## 🛠️ Stack
- 🚀 Astro
- 🔥 Tailwind CSS
- 💚 Vue.js

The goal of the project was to make the front of the landing page as efficient as possible, so as the page is mainly static, **Astro** with **Tailwind CSS** is a great combo to build fast. **Vue** implementation will solve the reactive parts of the web page.

## Features developed & Improvements from the original site

- 🧩 **Reusable Components:** Using the capacity of **componentization** that **Astro** offers, A main slide named **_section_** is the base component that shows the content of every card (Vehicles and derived products).

- 🏎️ **Faster Site:** The Tesla original site has a speed problem when loading for the first time (at least when creating the project). I created my project with **ASTRO**, having **VUE.JS** just in the 🏝️ **necessary islands** in order to make the site more efficient. (The infrastructure of the TESLA site has a lot more staff related to the speed behavior, but in the front-end, having more efficient technologies like these ones would help).

- 🌟 **Snap-to-Center:** A nice adaptation is the feature implemented to snap the viewport to the center of the page for the model/product of interest, enhancing user experience and engagement, as the product page has the full height, but on the original site this behavior does not work.

- 🎈 **Enhanced hover animations:** Added hovering in many elements to give to the user better feedback. In my opinion, some elements like the **buttons** on the cards, or in the **header menu** would benefit a lot from these hovering effects, such as zooms, color changes, and so.

- 🧹 **Cleaned up menu elements:** The menu was crowded with many 🔗**links** and subelements of the actual menu elements (the car models, charging solutions and so on). I decided to just have the name and the image of the element, and embed a link in all the "cards" involving the element. This way the frame looks cleaner, and it is even more user-friendly in my opinion.

## 🖱️ Check out the live demo!

You can see the actual state of the project in this **live demostration** [here](https://tesla-landing.otroca.dev/).

## 👨🏻‍💻 Commands available

### Installation

Clone the repository:

    git clone https://github.com/otrocadev/tesla-landing-page-clone.git

Navigate to the project directory:

    cd tesla-landing-page-clone

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open your browser and visit http://localhost:4321 to view the project locally!

## 📦 Comming soon

📝 Make site responsive for mobile.

## 🗣️ Special mentions

Special mention to the great **@midudev**, witch original tutorial on the previous landing page is the base of this project. After his first implementation, I decided to, as he would say, '🖐🏻mover un poco las manitas', and continue the project adding components, behaviours and trying to enhance the UX from the original Tesla site.

🔗 [**Midudev's tutorial**](https://www.youtube.com/watch?v=S_oLr_np4S8)
