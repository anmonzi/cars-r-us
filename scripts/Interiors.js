import { getInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            window.alert(`User chose interior option ${event.target.value}`)
        }
    }
)


export const Interiors = () => {
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        return /*html*/`
        <li>
        <input type="radio" name="interior" value="${interior.id}"/>
        ${interior.seatType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}