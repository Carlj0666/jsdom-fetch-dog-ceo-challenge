console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
  getImages()
});


function getImages() { //declare func to grab images
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  // console.log(imgUrl)
  fetch(imgUrl) //use fetch

  .then(resp => resp.json()) //convert to json
  .then(result => { //iterate over each result and pass to another func to process
    result.message.forEach(imageLink => loadImages(imageLink))
  })
}

function loadImages(imageLink) { //take in json file of images
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
    debugger
    result.message.forEach(breedLink => loadBreeds(breedLink))
  })
}

function loadBreeds(breedLink) {
  let breedContainer = document.getElementById("dog-breeds")
  let ulElement = document.createElement("ul")
  ulElement.src = breedLink
  breedContainer.appendChild(ulElement)
}
