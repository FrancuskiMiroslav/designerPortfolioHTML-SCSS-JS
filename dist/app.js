!function(e){var s={};function t(o){if(s[o])return s[o].exports;var i=s[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=s,t.d=function(e,s,o){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var i in e)t.d(o,i,function(s){return e[s]}.bind(null,i));return o},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=0)}({"./src/js/fetchJSONdata.js":function(e,s,t){document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("projects-container"),s=t("./src/js/projects.json");e&&(async()=>{const t=await s.projects;e.innerHTML=t.map((e=>{const{id:s,title:t,description:o,design:i,colorsUsed:a,imageDescription:r,imageMob:n,imageDesk:g}=e;return`\n                <div class="boxes__box item ${i.map((e=>e)).join(" ")} ${a}">\n\t\t\t\t\t<div class="boxes__box--img">\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc="${n}"\n\t\t\t\t\t\t\talt="${r}"\n\t\t\t\t\t\t\tloading="lazy"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="boxes__box--overlay \n                    boxes__box--primary_clr \n                    ${"two"===a?"boxes__box--secondary_clr":""}\n                    ${"more"===a?"boxes__box--tertiary_clr":""}\n                    "\n                    >\n\t\t\t\t\t\t<div class="boxes__box--content">\n\t\t\t\t\t\t\t<h2>${t}</h2>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t${o}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\thref="${g}"\n\t\t\t\t\t\t\t\tdata-lightbox="mygallery"\n\t\t\t\t\t\t\t\tdata-title="${r}"\n\t\t\t\t\t\t\t\tclass="btn">\n                                    Open\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n            `})).reverse().join("");let o=new Isotope(e,{itemSelector:".item",layoutMode:"fitRows"});const i=document.querySelectorAll(".filter");i.forEach((e=>{e.addEventListener("click",(e=>{i.forEach((e=>e.classList.remove("active"))),e.currentTarget.classList.add("active");let s=e.currentTarget.dataset.filter;o.arrange({filter:s})}))}))})()}))},"./src/js/formValidaiton.js":function(e,s){document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("contact-form"),s=document.getElementById("name"),t=document.getElementById("email"),o=document.getElementById("message"),i=document.getElementById("form-btn");if(e){function a(e,s){const t=e.parentElement;t.querySelector("small").innerText=s,t.className="form__group error"}function r(e){e.parentElement.className="form__group success"}function n(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}["click","ontouchstart","mouseover","keydown","keypress","touchstart","touchmove"].forEach((e=>document.addEventListener(e,(()=>{!1===function(){const e=s.value.trim(),i=t.value.trim(),g=o.value.trim();""===e?a(s,"Please enter your full name"):r(s);""===i?a(t,"Please enter your email address"):n(i)?r(t):a(t,"Email is not valid");""===g?a(o,"Please enter your message"):r(o);return!(""===e||""===i||""===g||!n(i))}()?i.disabled=!0:i.disabled=!1}))),!1)}}))},"./src/js/main.js":function(e,s){document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(e=>{document.querySelector(".preload").classList.add("preload-finished")}));const e=document.getElementById("btnScrollToTop");e&&e.addEventListener("click",(e=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",(o=>{document.documentElement.scrollTop>0?(s.classList.add("nav-top--sticky"),t&&t.classList.add("portfolio-menu__list--sticky"),e.style.opacity=1):(s.classList.remove("nav-top--sticky"),t&&t.classList.remove("portfolio-menu__list--sticky"),e.style.opacity=0)}));const s=document.getElementById("top-nav"),t=document.getElementById("portfolio-menu__list"),o=document.getElementById("nav-ul"),i=document.querySelector(".menu-btn");let a=!1;i.addEventListener("click",(()=>{o.classList.toggle("showing"),a?(i.classList.remove("open"),a=!1):(i.classList.add("open"),a=!0)}))}))},"./src/js/projects.json":function(e){e.exports=JSON.parse('{"projects":[{"id":1,"title":"Wine label („Merlot“ for Mr.&Mrs.)","description":"Proposal design for the wine label, i made illustration special for matching the name of a wine brand \\"Mr.&Mrs.\\"","design":["label"],"colorsUsed":"one","imageDescription":"Wine Label („Merlot“ for Mr.&Mrs.)","imageMob":"./assets/images/projects/merlotLabel-min.jpg","imageDesk":"./assets/images/projects/merlotLabel.jpg"},{"id":2,"title":"Wine bottle („Merlot“ for Mr.&Mrs.)","description":"I made a desing for wine bottle. I used a self created drawing illustration just for this wine brand.","design":["label"],"colorsUsed":"one","imageDescription":"Wine bottle („Merlot“ for Mr.&Mrs.)","imageMob":"./assets/images/projects/wine-min.jpg","imageDesk":"./assets/images/projects/wine.jpg"},{"id":3,"title":"Wine bottle („Merlot“ for Mr.&Mrs.)","description":"Business card for a veterinary clinic \\"Božić-vet\\" with a checkered illustration and the necessary company information.","design":["bcard"],"colorsUsed":"one","imageDescription":"Business card („Božić-Vet“)","imageMob":"./assets/images/projects/vizitk1str-92x52mm-min.jpg","imageDesk":"./assets/images/projects/vizitk1str-92x52mm.png"},{"id":4,"title":"Flyer for fight club \\"Phoenix\\"","description":"A fight club flyer made up of illustrations, and photos with the correct training schedule and contact phone. Made in club colors-red and black.","design":["flyer","poster"],"colorsUsed":"one","imageDescription":"Flyer for fight club Phoenix","imageMob":"./assets/images/projects/phoenix-min.jpg","imageDesk":"./assets/images/projects/phoenix.jpg"},{"id":5,"title":"Logo for tailoring salon („My best dress“)","description":"A unique salon trademark, created from an illustration and a font customized for salon\'s name. It fits perfectly in a circular shape, gives a clear impression of a logo for those purposes.","design":["logo"],"colorsUsed":"two","imageDescription":"Logo for tailoring salon („My best dress“)","imageMob":"./assets/images/projects/krojacki-min.jpg","imageDesk":"./assets/images/projects/krojacki.jpg"},{"id":6,"title":"Business card for-„My best dress“","description":"Business card with a trademark and the necessary company information and contacts.","design":["bcard"],"colorsUsed":"two","imageDescription":"Business card for-„My best dress“","imageMob":"./assets/images/projects/krojacki-bcard-min.jpg","imageDesk":"./assets/images/projects/krojacki.jpg"},{"id":7,"title":"Book cover design („Seobe“)","description":"Design and preparation for printing of M.Crnjanski\'s book \\"Seobe\\". Using the original photo \\"seoba\\".","design":["cover"],"colorsUsed":"one","imageDescription":"Book cover design („Seobe“)","imageMob":"./assets/images/projects/KNJIGA-SEOBE-KRCKA-min.jpg","imageDesk":"./assets/images/projects/KNJIGA-SEOBE-KRCKA.jpg"},{"id":8,"title":"Bakery label („Ceralni dvopek“)","description":"Transparent label design for a double decker.","design":["label"],"colorsUsed":"two","imageDescription":"Bakery label („Ceralni dvopek“)","imageMob":"./assets/images/projects/ETIKETA-min.jpg","imageDesk":"./assets/images/projects/ETIKETA.png"},{"id":9,"title":"Wine label („Ždrepčeva krv“)","description":"Proposal design for the wine label („Ždrepčeva krv“) using one color.","design":["label"],"colorsUsed":"one","imageDescription":"Wine label („Ždrepčeva krv“)","imageMob":"./assets/images/projects/17500035_1508616912516594_1627627067_o-min.jpg","imageDesk":"./assets/images/projects/17500035_1508616912516594_1627627067_o.jpg"},{"id":10,"title":"Bussiness card for University","description":"Business card of the university with the logo, contacts and data.","design":["bcard"],"colorsUsed":"more","imageDescription":"Bussiness card for University","imageMob":"./assets/images/projects/university-card-min.jpg","imageDesk":"./assets/images/projects/university-card.png"},{"id":11,"title":"University logo","description":"Trademark redesign for „Viskoka tehnička škola-strukovnih studija“. The name is inside a circular form that emerged by writing a pen composed of 4 parts that make up 4 sections of the faculty.","design":["logo"],"colorsUsed":"more","imageDescription":"University logo","imageMob":"./assets/images/projects/university-logo-vts-min.jpg","imageDesk":"./assets/images/projects/university-logo-vts.jpg"},{"id":12,"title":"Lunch - ideas","description":"Ideas for creating a logo „Lunch“, in a few stage.","design":["logo"],"colorsUsed":"two","imageDescription":"Lunch - ideas","imageMob":"./assets/images/projects/lunch-min.jpg","imageDesk":"./assets/images/projects/lunch.jpg"},{"id":13,"title":"Logo for express restorante („Lunch“)","description":"Custom logo on request to be made up of restaurant names and corresponding pictograms in red.","design":["logo"],"colorsUsed":"one","imageDescription":"Logo for express restorante („Lunch“)","imageMob":"./assets/images/projects/lunch-finalLogo-min.jpg","imageDesk":"./assets/images/projects/lunch-finalLogo.jpg"},{"id":14,"title":"Wall design for restourante „Lunch“","description":"Creating a wall design in a restaurant with illustrations representing the food offering.","design":["poster"],"colorsUsed":"one","imageDescription":"Wall design for restourante „Lunch“","imageMob":"./assets/images/projects/lunch-ponuda-min.jpg","imageDesk":"./assets/images/projects/lunch-ponuda.jpg"},{"id":15,"title":"Label for „Pereca“","description":"Two ideas for the design of pretzel label for the bakery \\"Lakić\\". Using illustrations, similar colors and texts.","design":["label"],"colorsUsed":"more","imageDescription":"Label for „Pereca“","imageMob":"./assets/images/projects/pereca-min.jpg","imageDesk":"./assets/images/projects/pereca.png"},{"id":16,"title":"Poster for charity event „Srcem i muzikom“","description":"Creating a poster with assigned informants, photos, and sponsors assembled into a story that conveys the message and provides clear information.","design":["poster","flyer"],"colorsUsed":"two","imageDescription":"Poster for charity event „Srcem i muzikom“","imageMob":"./assets/images/projects/charity-min.jpg","imageDesk":"./assets/images/projects/charity.jpg"},{"id":17,"title":"Roll up banner“","description":"Design for roll up banner for hiking. Creating story from text, illustrations and default photos. With the main purpose of reading information and instructions.","design":["poster","flyer"],"colorsUsed":"two","imageDescription":"Roll up banner","imageMob":"./assets/images/projects/planinskoTrcanje-min.jpg","imageDesk":"./assets/images/projects/planinskoTrcanje.jpg"},{"id":18,"title":"Photoshop works","description":"Creating a virtual world through the big eye watching us, the work used to make the posters.","design":["photoshop"],"colorsUsed":"more","imageDescription":"Photoshop works","imageMob":"./assets/images/projects/photoshop1-min.jpg","imageDesk":"./assets/images/projects/photoshop1.jpg"},{"id":19,"title":"Photoshop works","description":"...","design":["photoshop"],"colorsUsed":"more","imageDescription":"Photoshop works","imageMob":"./assets/images/projects/photoshop2-min.jpg","imageDesk":"./assets/images/projects/photoshop2.jpg"},{"id":20,"title":"Poster for faculty presentations („Putokazi“)","description":"A poster created only with typography, using one color (red). It gives a inresting and storng message that easily communicates with the audience.","design":["poster"],"colorsUsed":"one","imageDescription":"Poster for faculty presentations („Putokazi“)","imageMob":"./assets/images/projects/1-PUTOKAZI-poster-min.jpg","imageDesk":"./assets/images/projects/1-PUTOKAZI-poster.jpg"},{"id":21,"title":"POSTER („Acoustic Music“)","description":"Poster for acoustic music night. I were using only colors of caffee logo.","design":["poster"],"colorsUsed":"one","imageDescription":"POSTER („Acoustic Music“)","imageMob":"./assets/images/projects/2-AutisticMusic-min.jpg","imageDesk":"./assets/images/projects/2-AutisticMusic.jpg"},{"id":22,"title":"POSTER („Live Music“)","description":"Advertising poster with information and photos to promote the live gig at the cafe.","design":["poster"],"colorsUsed":"two","imageDescription":"POSTER („Live Music“)","imageMob":"./assets/images/projects/3-LiveMusic-min.jpg","imageDesk":"./assets/images/projects/3-LiveMusic.jpg"},{"id":23,"title":"Illustrations (for website)","description":"Creating special illustrations as an icon for a farm website.","design":["logo"],"colorsUsed":"two","imageDescription":"Illustrations (for website)","imageMob":"./assets/images/projects/4-illuctracije-za-sajt-min.jpg","imageDesk":"./assets/images/projects/4-illuctracije-za-sajt.png"},{"id":24,"title":"Illustrations for the faculty section","description":"Special icons for each department of the faculty (electrical engineering; computer science; web design; graphic design)","design":["logo"],"colorsUsed":"more","imageDescription":"Illustrations for the faculty section","imageMob":"./assets/images/projects/5-ilustracijezaodsekfaksa1-min.jpg","imageDesk":"./assets/images/projects/5-ilustracijezaodsekfaksa1.png"},{"id":25,"title":"Illustrations for the faculty section-2","description":"Icons for each department of the faculty (mechanical engineering; occupational safety; fire protection; environmental protection)","design":["logo"],"colorsUsed":"more","imageDescription":"Illustrations for the faculty section-2","imageMob":"./assets/images/projects/6-Ilustracijezaodsekafaksa-2-min.jpg","imageDesk":"./assets/images/projects/6-Ilustracijezaodsekafaksa-2.png"},{"id":26,"title":"Poster for New Year parrty","description":"Poster for the New Year&#39;s Party with information. My goal was to use only colors of caffe bar.","design":["poster"],"colorsUsed":"two","imageDescription":"Poster for New Year parrty","imageMob":"./assets/images/projects/7-PosterforNewYear-min.jpg","imageDesk":"./assets/images/projects/7-PosterforNewYear.jpg"},{"id":27,"title":"Boutique logo","description":"Design ideas for boutique clothing boutiques(„Seka“).","design":["logo"],"colorsUsed":"one","imageDescription":"Boutique logo","imageMob":"./assets/images/projects/8-boutiquelogo-min.jpg","imageDesk":"./assets/images/projects/8-boutiquelogo.png"},{"id":28,"title":"Book cover design („Zločin i kazna“)","description":"Preparation for printing and design for the book cover crime and punishment by F. M. Dostojevski.","design":["cover"],"colorsUsed":"two","imageDescription":"Book cover design („Zločin i kazna“)","imageMob":"./assets/images/projects/9-Bookscoverdesign-min.jpg","imageDesk":"./assets/images/projects/9-Bookscoverdesign.png"},{"id":29,"title":"T-shirt design (black)","description":"Two t-shirt designs using my brother&#39;s original drawings. That I retouched and transfered to the negative in the photoshop.","design":["print"],"colorsUsed":"one","imageDescription":"T-shirt design (black)","imageMob":"./assets/images/projects/10-T-shirtdesig,bleck-min.jpg","imageDesk":"./assets/images/projects/10-T-shirtdesig,bleck.jpg"},{"id":30,"title":"T-shirt design (white)","description":"A white T-shirt with my brother&#39;s original drawing, which was processed using a filter in a photoshop to fit the model of the T-shirt.","design":["print"],"colorsUsed":"one","imageDescription":"T-shirt design (white)","imageMob":"./assets/images/projects/11-T-shirtdesingwithe-min.jpg","imageDesk":"./assets/images/projects/11-T-shirtdesingwithe.jpg"},{"id":31,"title":"Cycling federation national team jersey","description":"T-shirt and shorts designed for Serbia&#39;s cycling team, using several illustrations and 3 colors that are on the flag.","design":["print"],"colorsUsed":"two","imageDescription":"Cycling federation national team jersey","imageMob":"./assets/images/projects/12-cyclingfederationnationalteamjersey-min.jpg","imageDesk":"./assets/images/projects/12-cyclingfederationnationalteamjersey.jpg"},{"id":32,"title":"Sweatshirt for fight club („Phoenix“)","description":"Sweatshirt design for fight club &quot;Phoenix&quot;- trademark redesign, with a few changes such as: font correction, and creation of a new drawing, using colors that match the club&#39;s red and yellow.","design":["print"],"colorsUsed":"two","imageDescription":"Sweatshirt for fight club („Phoenix“)","imageMob":"./assets/images/projects/13-Sweatshirtforfightclub-min.jpg","imageDesk":"./assets/images/projects/13-Sweatshirtforfightclub.jpg"},{"id":33,"title":"T-shirt for fight club („Phoenix“)","description":"Designing shirts for fight club.","design":["print"],"colorsUsed":"two","imageDescription":"T-shirt for fight club („Phoenix“)","imageMob":"./assets/images/projects/14-T-shirtforfightclub-min.jpg","imageDesk":"./assets/images/projects/14-T-shirtforfightclub.png"},{"id":34,"title":"Photoshop work","description":"Black and white photography through 3 processes in photoshop.","design":["photoshop"],"colorsUsed":"one","imageDescription":"Photoshop work","imageMob":"./assets/images/projects/16-Photoshopwork-min.jpg","imageDesk":"./assets/images/projects/16-Photoshopwork.jpg"},{"id":35,"title":"Logo and business card for bakery \\"Slatko cartstvo\\"","description":"Black and white photography through 3 processes in photoshop.","design":["logo"],"colorsUsed":"","imageDescription":"Logo and business card for bakery \\"Slatko cartstvo\\"","imageMob":"./assets/images/projects/SlatkoCarstvo-min.jpg","imageDesk":"./assets/images/projects/SlatkoCarstvo.jpg"},{"id":36,"title":"Logo and business card for the agency \\"Digitals\\"","description":"The logo is designed: So that the initials of the owner (double \\"C\\") are facing each other, they create a computer screen that is a trademark of the company. I made a business card of the same colors, with information about the company.","design":["logo","bcard"],"colorsUsed":"one","imageDescription":"Logo and business card for the agency \\"Digitals\\"","imageMob":"./assets/images/projects/Digitals-min.jpg","imageDesk":"./assets/images/projects/Digitals.jpg"},{"id":37,"title":"Logo for organic food \\"Power of the purple\\"","description":"Logo made for organic food for the client on \\"designhell\\" site. Created according to a given theme and given colors.","design":["logo"],"colorsUsed":"","imageDescription":"Logo for organic food \\"Power of the purple\\"","imageMob":"./assets/images/projects/Powerofthepurple-min.jpg","imageDesk":"./assets/images/projects/Powerofthepurple.jpg"},{"id":38,"title":"Flayer for restaurant \\"Lunch\\"","description":"A5 flyer with a restaurant menu and important information.","design":["flyer"],"colorsUsed":"","imageDescription":"Flayer for restaurant \\"Lunch\\"","imageMob":"./assets/images/projects/restaurantflyer-min.jpg","imageDesk":"./assets/images/projects/restaurantflyer.jpg"},{"id":39,"title":"Photoshop Manipulation","description":"Photoshop fantasy manipulation for \'Čarda\' restaurant.","design":["photoshop"],"colorsUsed":"","imageDescription":"Photoshop Manipulation","imageMob":"./assets/images/projects/PhotoshopManipulation-min.jpg","imageDesk":"./assets/images/projects/PhotoshopManipulation.jpg"},{"id":40,"title":"Photography / drawing / manipulation","description":"Example of showing a person through 3 different forms: Photography, manipulating photography, creating drawings by looking at photography.","design":["photoshop"],"colorsUsed":"","imageDescription":"Photography / drawing / manipulation","imageMob":"./assets/images/projects/Paja-min.jpg","imageDesk":"./assets/images/projects/Paja.jpg"},{"id":41,"title":"Coat of arms of a football club","description":"Coat of arms of a football club \\"Železničar\\"","design":["logo"],"colorsUsed":"","imageDescription":"Coat of arms of a football club","imageMob":"./assets/images/projects/grb-min.jpg","imageDesk":"./assets/images/projects/grb.jpg"},{"id":42,"title":"Poster for a children’s football","description":"Poster of a football club \\"Železničar\\" for or a children’s football school.","design":["poster"],"colorsUsed":"","imageDescription":"Poster for a children’s football","imageMob":"./assets/images/projects/posterzeleznicar-min.jpg","imageDesk":"./assets/images/projects/posterzeleznicar.jpg"},{"id":43,"title":"Window sticker for \\"Lunch\\" restaurant","description":"Creating interesting content for the sticker that fills the window of the restaurant, which shows the invitation to lunch.","design":["label"],"colorsUsed":"","imageDescription":"Window sticker for \\"Lunch\\" restaurant","imageMob":"./assets/images/projects/stickerlunch-min.jpg","imageDesk":"./assets/images/projects/stickerlunch.jpg"},{"id":44,"title":"Flayer for fast food restaurant \\"Buja planet\\"","description":"Flayer for fast food restaurant, with a menu and supplemented with illustrations for a stronger impression.","design":["flyer"],"colorsUsed":"","imageDescription":"Flayer for fast food restaurant \\"Buja planet\\"","imageMob":"./assets/images/projects/fastfoodflayer-min.jpg","imageDesk":"./assets/images/projects/fastfoodflayer.jpg"},{"id":45,"title":"Logo designed for food delivery („Colorado“)","description":"Logo for food delivery \\"Colorado\\"","design":["logo"],"colorsUsed":"one","imageDescription":"Logo („Colorado“)","imageMob":"./assets/images/projects/colorado-min.jpg","imageDesk":"./assets/images/projects/colorado.jpg"},{"id":46,"title":"Logo („Motheralnd“)","description":"Logo for tanning salon. The desing of main figure of women is vectorized.","design":["logo"],"colorsUsed":"one","imageDescription":"Logo („Motheralnd“)","imageMob":"./assets/images/projects/motherland-min.jpg","imageDesk":"./assets/images/projects/motherland.jpg"},{"id":47,"title":"Instagram content („Motheralnd tanning“)","description":"“Content created for the instagram profile \\"Motherland\\" salon.","design":["label"],"colorsUsed":"one","imageDescription":"Instagram contet („Motherland“)","imageMob":"./assets/images/projects/motheralndInstagram-min.jpg","imageDesk":"./assets/images/projects/motheralndInstagram.jpg"},{"id":48,"title":"Illustration \\"Drunk fruit\\"","description":"Illustration created in Photoshop for the brandy label.","design":["photoshop"],"colorsUsed":"one","imageDescription":"Illustration for brandy","imageMob":"./assets/images/projects/pijaneKruske-min.jpg","imageDesk":"./assets/images/projects/pijaneKruske.jpg"},{"id":49,"title":"Brandy label („Durković“)","description":"Labels of brandy for different types of fruit.","design":["label"],"colorsUsed":"two","imageDescription":"Brandy label („Durković“)","imageMob":"./assets/images/projects/rakija-min.jpg","imageDesk":"./assets/images/projects/rakija.jpg"},{"id":50,"title":"Pizzeria logo („Manila“)","description":"Pizzeria logo made in the commissioned colors.","design":["logo"],"colorsUsed":"two","imageDescription":"Pizzeria logo („Manila“)","imageMob":"./assets/images/projects/manila-min.jpg","imageDesk":"./assets/images/projects/manila.jpg"},{"id":51,"title":"Glass stickers („Manila“)","description":"The illustrations of the redesign, that is displayed on front window were inspired by Pop art style .","design":["photoshop","prints"],"colorsUsed":"one","imageDescription":"Glass stickers („Manila“)","imageMob":"./assets/images/projects/beforeAfter-min.jpg","imageDesk":"./assets/images/projects/beforeAfter.jpg"},{"id":52,"title":"Logo redesign („Molero“)","description":"Redesign logo for painting works.","design":["logo"],"colorsUsed":"two","imageDescription":"Logo redesign („Molero“)","imageMob":"./assets/images/projects/molero-min.jpg","imageDesk":"./assets/images/projects/molero.jpg"},{"id":53,"title":"Logo for moldings („Bovira“)","description":"Logo created for a company that manufactures moldings and decorative elements.","design":["logo"],"colorsUsed":"one","imageDescription":"Logo for moldings („Bovira“)","imageMob":"./assets/images/projects/boviraLogo-min.jpg","imageDesk":"./assets/images/projects/boviraLogo.jpg"},{"id":54,"title":"Catalog cover („Bovira“)","description":"I did desing in photoshop and Illustator, and i also include all moldings on 3D Maz Studio.","design":["covers"],"colorsUsed":"more","imageDescription":"Catalog cover („Bovira“)","imageMob":"./assets/images/projects/katalog-min.jpg","imageDesk":"./assets/images/projects/katalog.jpg"},{"id":55,"title":"Page of catalog („Bovira“)","description":"This the example the one of the pages from the catalog.","design":["covers"],"colorsUsed":"more","imageDescription":"Page of catalog („Bovira“)","imageMob":"./assets/images/projects/str1-min.jpg","imageDesk":"./assets/images/projects/str1.jpg"},{"id":56,"title":"Digital Portrait in Photoshop","description":"Digital portrait created with brushes in photoshop.","design":["photoshop"],"colorsUsed":"two","imageDescription":"Digital Portrait in Photoshop","imageMob":"./assets/images/projects/digital-min.jpg","imageDesk":"./assets/images/projects/digital.jpg"},{"id":57,"title":"Animal shelter logo („Good Hope“)","description":"Logo created for the animal shelter, using only limited color palette from site.","design":["logo"],"colorsUsed":"one","imageDescription":"Animal shelter logo („Good Hope“)","imageMob":"./assets/images/projects/azil-min.jpg","imageDesk":"./assets/images/projects/azil.jpg"}]}')},"./src/js/skill.bars.jquery.js":function(e,s){!function(e){e.fn.skillBars=function(s){var t=e.extend({from:0,to:!1,speed:1e3,interval:100,decimals:0,onUpdate:null,onComplete:null,classes:{skillBarBar:".skillbar-bar",skillBarPercent:".skill-bar-percent"}},s);return this.each((function(){var s=e(this),o=0!=t.to?t.to:parseInt(s.attr("data-percent"));o>100&&(o=100);var i=t.from,a=Math.ceil(t.speed/t.interval),r=(o-i)/a,n=0,g=setInterval((function(){i+=r,n++,e(s).find(t.classes.skillBarPercent).text(i.toFixed(t.decimals)+"%"),"function"==typeof t.onUpdate&&t.onUpdate.call(s,i);n>=a&&(clearInterval(g),i=o,"function"==typeof t.onComplete&&t.onComplete.call(s,i))}),t.interval);s.find(t.classes.skillBarBar).animate({width:parseInt(s.attr("data-percent"))+"%"},t.speed)}))}}(jQuery)},"./src/js/skillBar.js":function(e,s){$(document).ready((function(){$(".skillbar").skillBars({from:0,to:!1,speed:3e3,interval:100,decimals:0,onUpdate:null,onComplete:null,classes:{skillBarBar:".skillbar-bar",skillBarPercent:".skill-bar-percent"}})}))},0:function(e,s,t){t("./src/js/fetchJSONdata.js"),t("./src/js/formValidaiton.js"),t("./src/js/main.js"),t("./src/js/skill.bars.jquery.js"),e.exports=t("./src/js/skillBar.js")}});