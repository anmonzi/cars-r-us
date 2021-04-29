const database = {
    orderBuilder: {
        set paintColor(paintColorFk) {
            this.paintColorId = paintColorFk;
        },
        set interior(interiorFk) {
            this.interiorId = interiorFk;
        },
        set technology(technologyFk) {
            this.technologyId = technologyFk;
        },
        set wheel(wheelFk) {
            this.wheelId = wheelFk;
        }
    },
    paintColors: [
        { id: 1, color: "Silver", price: 100.00 },
        { id: 2, color: "Midnight Blue", price: 250.00 },
        { id: 3, color: "Firebrick Red", price: 449.99 },
        { id: 4, color: "Spring Green", price: 389.99 }
    ],
    interiors: [
        { id: 1, seatType: "Beige Fabric", price: 49.99 },
        { id: 2, seatType: "Charcoal Fabric", price: 89.99 },
        { id: 3, seatType: "White Leather", price: 349.99 },
        { id: 4, seatType: "Black Leather", price: 200.00 }
    ],
    technologoies: [
        { id: 1, techOption: "Basic Package", price: 59.99 },
        { id: 2, techOption: "Navigation Package", price: 89.99 },
        { id: 3, techOption: "Visibility Package", price: 95.99 },
        { id: 4, techOption: "Ultra Package", price: 278.99 }
    ],
    wheels: [
        { id: 1, wheelSize: "17-inch Pair Radial", price: 850.00 },
        { id: 2, wheelSize: "17-inch Pair Radial Black", price: 900.00 },
        { id: 3, wheelSize: "18-inch Pair Spoke Silver", price: 999.99},
        { id: 4, wheelSize: "18-inch Pair Spoke Black", price: 1125.99}
    ],
    customerOrders: [
        {
            id: 1,
            paintColorId: 3,
            interiorId: 2,
            technologyId: 4,
            wheelId: 3,
            timestamp: 1614659931693
        }
    ]
}



// Functions to grab a copy of property on database
export const getPaintColors = () => {
    return [...database.paintColors]
}

export const getInteriors = () => {
    return [...database.interiors]
}

export const getTechnologies = () => {
    return [...database.technologoies]
}

export const getWheels = () => {
    return [...database.wheels]
}

export const getCustomerOrders = () => {
    return [...database.customerOrders]
}

export const addCustomOrder = () => {
    // Copy the current state of user choice
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    newOrder.id = [...database.customerOrders].pop().id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customerOrders.push(newOrder)

    // Reset the temporary state for user choice
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// Setter functions to set state
export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}