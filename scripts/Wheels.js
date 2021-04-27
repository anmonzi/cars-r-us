import { getWheels } from "./database.js"

const wheels = getWheels()


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