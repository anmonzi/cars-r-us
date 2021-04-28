import { getTechnologies } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            window.alert(`User chose technology option ${event.target.value}`)
        }
    }
)


export const Technology = () => {
    let html = "<ul>"

    const listItems = technologies.map(technology => {
        return /*html*/`
        <li>
        <input type="radio" name="technology" value="${technology.id}"/>
        ${technology.techOption}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}