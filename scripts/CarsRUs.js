import { PaintColors } from "./PaintColors.js"
import { Technology } from "./Technologies.js"
import { WheelType } from "./Wheels.js"
import { Interiors } from "./Interiors.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"
import { Type } from "./Types.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsAreUs = () => {
  return /*html*/`
    <h1>Cars-R-Us</h1>

    <article class="choices">
        <section class="choices__paintColors options">
            <h2>Paint Colors</h2>
            ${PaintColors()}
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            ${Interiors()}
        </section>
        <section class="choices__technologies options">
            <h2>Technology</h2>
            ${Technology()}
        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${WheelType()}
        </section>
        <section class="choices__wheels options">
            <h2>Car Type</h2>
            ${Type()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customerOrders">
        <h2>Customer Car Orders</h2>
        ${Orders()}
    </article>`
}
