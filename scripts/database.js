const database = {
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