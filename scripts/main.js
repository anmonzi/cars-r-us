import { CarsAreUs } from "./CarsRUs.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsAreUs()
}

renderAllHTML()