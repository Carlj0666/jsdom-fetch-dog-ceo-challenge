console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
  getImages()
  getBreeds()
  const letterDropDown = document.getElementById("breed-dropdown")
  listenAssign(letterDropDown)
  })

  function listenAssign(letterDropDown) {
  letterDropDown.addEventListener("change", (event) => {
    for (let i = 0; i < breeds.length; i++) {
      let currentBreed = breeds[i]
      let currentLetter = currentBreed.charAt(0)
    filterSelector(event, currentBreed, currentLetter)
    }
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

function loadImage(imageLink) { //take in json file of images
  let imageContainer = document.getElementById("dog-image-container") //create container
  let imgElement = document.createElement("img") // create img elements
  imgElement.src = imageLink //define the source for the image link
  imageContainer.appendChild(imgElement) //append the image to the end of the list
}


function getBreeds() { //define get breeds func
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  fetch(breedUrl) //use fetch
  .then(resp => resp.json()) // convert responce to json
  .then(result => { //
    breeds = Object.keys(result.message)
    loadBreeds(breeds)
    return breeds
  })
}



function loadBreeds(breeds) {
  breeds.forEach(breed => {
    let ulTag = document.querySelector('#dog-breeds')
    let liTag = document.createElement('li')
    ulTag.appendChild(liTag)
    liTag.innerText = breed
    liTag.addEventListener('click', changeTextColor);
  })
}

function changeTextColor(event) {
  event.target.style.color = 'red';
}



function filterSelector(event, currentBreed, currentLetter) {
    let letterSelection = event.target[0].innerText
    if (letterSelection === currentLetter) {
      updateBreedList(currentBreed)
  }
}

function updateBreedList(currentBreed) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);

  let newLiTag = document.createElement('li')
    ul.appendChild(newLiTag)
    newLiTag.innerText = currentBreed
  // loadNewDogs(currentBreed)
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

// function loadNewDogs(currentBreed) {
//   while (currentBreed) {
//     let newUlTag = document.querySelector('#dog-breeds')
//     let newLiTag = document.createElement('li')
//       newUlTag.appendChild(newLiTag)
//       newLiTag.innerText = currentBreed
//     }
//   }