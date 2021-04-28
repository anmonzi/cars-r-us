import { getPaintColors, setPaintColor } from "./database.js"

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)


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