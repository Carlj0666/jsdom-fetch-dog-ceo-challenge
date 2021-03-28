console.log('%c HI', 'color: firebrick')
let breeds

document.addEventListener('DOMContentLoaded', function () {
  getImages()
  getBreeds()
  const letterDropDown = document.getElementById("breed-dropdown")

  listenAssign(letterDropDown)
  })

  function listenAssign(letterDropDown) {
    letterDropDown.addEventListener("change", (event) => {
      let letterSelection = event.target.value
      if (letterSelection !== "") {
      let filteredBreeds = breeds.filter(breed => letterSelection === breed[0])
      loadBreeds(filteredBreeds)
      } else loadBreeds(breeds)
    })
  }

function getImages() { //declare func to grab images
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  // console.log(imgUrl)
  fetch(imgUrl) //use fetch

  .then(resp => resp.json()) //convert to json
  .then(result => { //iterate over each result and pass to another func to process
    result.message.forEach(imageLink => loadImage(imageLink))
  })
}

function loadImage(imageLink) {
  let imageContainer = document.getElementById("dog-image-container") //create container
  let imgElement = document.createElement("img")
  imgElement.src = imageLink
  imageContainer.appendChild(imgElement)
}


function getBreeds() { //define get breeds func
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  fetch(breedUrl) //use fetch
  .then(resp => resp.json()) // convert responce to json
  .then(result => { //
    breeds = Object.keys(result.message)
    loadBreeds(breeds)
  })
}

function loadBreeds(breeds) {
  let ulTag = document.querySelector('#dog-breeds')
  ulTag.innerText = ""
  breeds.forEach(breed => {
    let liTag = document.createElement('li')
    ulTag.appendChild(liTag)
    liTag.innerText = breed
    liTag.addEventListener('click', changeTextColor);
  })
}

function changeTextColor(event) {
  event.target.style.color = 'red';
}
