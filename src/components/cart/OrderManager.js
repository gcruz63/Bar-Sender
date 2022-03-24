export const getCurrentOrder = () => {
    return fetch(`http://localhost:8000/orders/current`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteOrder = (orderId) => {
    return fetch(`http://localhost:8000/orders/${orderId}`, {
        method: "Delete",
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
        },
    })
}

export const completeOrder = (orderId) => {
    return fetch(`http://localhost:8000/orders/${orderId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
        },
    })
}