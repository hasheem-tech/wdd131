const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');

    hambutton.classList.toggle('show');
})


const gallery = document.getElementById('gallery');
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas, United States",
        dedicated: "1984, October, 19",
        area: 44207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
    },
    {
        templeName: "Houston Texas",
        location: "Klein, Texas, United States",
        dedicated: "2000, August, 26",
        area: 33970,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-23480-main.jpg"
    },
    {
        templeName: "Lethbridge Alberta",
        location: "Lethbridge, Alberta, Canada",
        dedicated: "2025, April, 26",
        area: 45000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lethbridge-alberta-temple/lethbridge-alberta-temple-48270-main.jpg"
    }
];


createTempleCard(temples)


const title = document.getElementById('title');
const home = document.getElementById('home');
const old = document.getElementById('old');
const latest = document.getElementById('new');
const large = document.getElementById('large');
const small = document.getElementById('small');


home.addEventListener('click', () => {
    createTempleCard(temples);
    title.innerHTML = "Home";
});

old.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.dedicated.startsWith('18')));
    title.innerHTML = "Old";
});

latest.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.dedicated.startsWith('20')));
    title.innerHTML = "New";
});

large.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    title.innerHTML = "Large";
});

small.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    title.innerHTML = "Small";
});




function createTempleCard(temples) {
    gallery.innerHTML = '';
    temples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h3');
        name.innerHTML += `${temple.templeName}`;
        name.classList.add('name');

        const list = document.createElement('ul');
        list.classList.add('list');
        list.innerHTML += `
        <li><span class="info">Location:</span> ${temple.location}</li>
        <li><span class="info">Dedicated:</span> ${temple.dedicated}</li>
        <li><span class="info">Size:</span> ${temple.area} sq ft</li>`;

        const image = document.createElement('img');
        image.classList.add('image');
        image.src = temple.imageUrl;
        image.alt = `Image of ${temple.templeName}`;
        image.loading = "lazy"

        card.appendChild(name);
        card.appendChild(list);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}

