import { getPaintColors } from "./database.js"

const paintColors = getPaintColors()


export const PaintColors = () => {
    let html = "<ul>"

    const listItems = paintColors.map(color => {
        return /*html*/`
        <li>
        <input type="radio" name="color" value="${color.id}"/>
        ${color.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}