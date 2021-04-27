import { getTechnologies } from "./database.js"

const technologies = getTechnologies()


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