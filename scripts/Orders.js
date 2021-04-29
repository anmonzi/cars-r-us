import { getCustomerOrders, getInteriors, getPaintColors, getTechnologies, getWheels } from "./database.js";

const paints = getPaintColors()
const wheels = getWheels()
const interiors = getInteriors()
const techs = getTechnologies()


// Function to build custom order and render order # and cost
const buildOrderList = (order) => {
    //Locates paint color object from custom order
    const foundPaint = paints.find((paint) => {
        return paint.id === order.paintColorId
    })
    //Locates wheel size object from custom order
    const foundWheel = wheels.find((wheel) => {
        return wheel.id === order.wheelId
    })
    //Locates interior object from custom order
    const foundInterior = interiors.find((interior) => {
        return interior.id === order.interiorId
    })
    //Locates tech object from custom order
    const foundTech = techs.find((tech) => {
        return tech.id === order.technologyId
    })
    //Takes price key/value from each object and adds to get total
    const totalCost = foundPaint.price + foundWheel.price + foundInterior.price + foundTech.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return /*html*/ `<li>
        Order #${order.id} costs ${costString}
    </li>`
}



// Function to render orders in html strings
export const Orders = () => {
    const orders = getCustomerOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderList)

    html += listItems.join("")
    html += "</ul>"

    return html
}