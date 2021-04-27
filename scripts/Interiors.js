import { getInteriors } from "./database.js"

const interiors = getInteriors()


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