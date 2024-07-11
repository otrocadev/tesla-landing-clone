
# 🚗 Tesla Landing Page Clone using 🚀Astro 🔥Tailwind CSS & 💚Vue.js

![Tesla Landing Demo image](/public/readme_cover.avif)

This project tries to replicate the landing page of the [Tesla's](tesla.com/es_ES) webpage in Spain to learn Astro and Tailwind CSS technologies.

**Note**: This project is for learning purposes only. In every case it is **NOT** meant to impersonate the TESLA.COM/ES original site or take any other commercial or non-commercial use other than **practice and demostrate web development skills.**

## Why Astro and Tailwind CSS?

The goal of the project was to make the front of the landing page as efficient as possible, so as the page is mainly static, **Astro** with **Tailwind CSS** is a great combo to build fast. **Vue** implementation will solve the reactive parts of the web page.

## Features developed

⚙️ **Reusable Components:** Using the capacity of **componentization** that **Astro** offers, A main slide named **_Section_** is the base component that shows the content of every card (Vehicles and derived products).

## Improvements from the original site

🏎️ **Faster Site:** The Tesla original site has a speed problem when loading for the first time (at least when creating the project). I created my project with **ASTRO**, having **VUE.JS** just in the 🏝️**necessary islands** in order to make the site more efficient.

(The infrastructure of the TESLA site has a lot more staff related to the speed behaviour, but in the front-end having more efficient technologies as this ones would help).

🌟 **Snap-to-Center:** A nice adaptation is the feature implemented to snap the viewport to the center of the page for the model/product of interest, enhancing user experience and engagement, as the product page has the full height, but on the original site this behavior does not work.

🎈 **Enchanced hover animations:** Added hovering in many elements to give to the user basic feedback. In my opinion some elements like the **buttons** on the cards, or in the **header menu** would bennefit a lot with this hovering efects such as zooms, color changing and so.
This changes have been aded to give a better user experience.

🧹 **Cleaned up manu elements:** The menu was crowded with many 🔗**links** and subelements of the actual menu elements (the car models, charging solutions and so). I decided to just have the name and the image of the element and embed a link in all the "card" envolving the element. This way the frame looks cleaner and it is even more user friendly in my opinion.

## 🖱️ Check the live demo!

You can see the actual state of the project on this **live demostration** [here](https://tesla-landing-clone.otroca.dev/).

## Commands available

### Installation

Clone the repository:

    git clone https://github.com/your-username/tesla-landing-page-clone.git

Navigate to the project directory:

    cd tesla-landing-page-clone

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open your browser and visit http://localhost:4321 to view the project locally!

## Pending updates

📝 Make site responsive for mobile.

## Special mentions

Special mention to the great **@midudev**, witch original tutorial on the previous landing page is the base of this project. After his first implementation I decided to, as he would say, '🖐🏻mover un poco las manitas', and continue the project adding components, behaviours and trying to enchance the UX from the original Tesla site.

🔗 [**Midudev's tutorial**](https://www.youtube.com/watch?v=S_oLr_np4S8)

## License

📝 This project is licensed under the MIT License - see the LICENSE file for details.
