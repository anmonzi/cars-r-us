import { getCustomerOrders } from "./database.js";

const buildOrderList = (order) => {
    return /*html*/ `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    const orders = getCustomerOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderList)

    html += listItems.join("")
    html += "</ul>"

    return html
}