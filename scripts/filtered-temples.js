const dateObject = new Date()
const year = dateObject.getFullYear()
document.getElementById("year").innerText = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  hamButton.classList.toggle('open');
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    dedicationYear: 2005,
    area: 11500,
    imageUrl:
      "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    dedicationYear: 1888,
    area: 74792,
    imageUrl:
      "images/manti-utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    dedicationYear: 2015,
    area: 96630,
    imageUrl:
      "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    dedicationYear: 2020,
    area: 6861,
    imageUrl:
      "images/yigo-guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    dedicationYear: 1974,
    area: 156558,
    imageUrl:
      "images/washington-dc.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    dedicationYear: 1986,
    area: 9600,
    imageUrl:
      "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    dedicationYear: 1983,
    area: 116642,
    imageUrl:
      "images/mexico-city.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Mendoza Argentina Temple",
    location: "Ciudad de Mendoza, Mendoza Argentina",
    dedicated: "2024, September, 22",
    dedicationYear: 2024,
    area: 21999,
    imageUrl:
      "images/mendoza-argentina.jpg"
  }, {
    templeName: "Ogden Utah Temple",
    location: "Ogden, Utah, United States",
    dedicated: "1972, November, 19",
    dedicationYear: 1972,
    area: 112232,
    imageUrl:
      "images/ogden-utah.jpg"
  }, {
    templeName: "Copenhagen Denmark Temple",
    location: "Copenhagen, Denmark",
    dedicated: "2004, May, 23",
    dedicationYear: 2004,
    area: 25000,
    imageUrl:
      "images/copenhagen-denmark.jpg"
  },
];

const home = document.getElementById("home")
const old = document.getElementById("old")
const newTemples = document.getElementById("newTemples")
const large = document.getElementById("large")
const small = document.getElementById("small")

home.addEventListener("click", () => {
  renderTemples(temples)
})

old.addEventListener("click", () => {
  const oldTemples = temples.filter(temple => temple.dedicationYear < 1900)
  renderTemples(oldTemples)
})

newTemples.addEventListener("click", () => {
  const newTemples = temples.filter(temple => temple.dedicationYear > 2000)
  renderTemples(newTemples)
})

large.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000)
  renderTemples(largeTemples)
})

small.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000)
  renderTemples(smallTemples)
})



renderTemples(temples)
function renderTemples(filteredTemples) {
  document.querySelector(".gallery").innerHTML = ""
  filteredTemples.forEach(
    temple => {
      let figure = document.createElement("figure")
      let img = document.createElement("img")
      let name = document.createElement("h3")
      let location = document.createElement("div")
      let dedicated = document.createElement("div")
      let area = document.createElement("div")
      let textarea = document.createElement("div")
      name.textContent = temple.templeName
      location.textContent = `Location: ${temple.location}`
      dedicated.textContent = `Dedicated: ${temple.dedicated}`
      area.textContent = `Area: ${temple.area} sq ft`
      img.setAttribute("src", temple.imageUrl)
      img.setAttribute("alt", temple.templeName)
      img.setAttribute("loading", "lazy")
      img.setAttribute("width", "400")
      img.setAttribute("height", "250")
      textarea.setAttribute("class", "text-area")
      figure.appendChild(name)
      galleryFigure = document.querySelector(".gallery").appendChild(figure)
      textarea.appendChild(location)
      textarea.appendChild(dedicated)
      textarea.appendChild(area)

      galleryFigure.appendChild(textarea)
      galleryFigure.appendChild(img)
    }

  )

}