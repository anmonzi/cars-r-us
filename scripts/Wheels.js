import { getWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            window.alert(`User chose wheel option ${event.target.value}`)
        }
    }
)


export const WheelType = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return /*html*/ `
        <li>
        <input type="radio" name="wheel" value="${wheel.id}"/>
        ${wheel.wheelSize}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}