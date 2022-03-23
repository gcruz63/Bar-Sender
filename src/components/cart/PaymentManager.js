export const createPayment = (payment) => {
    return fetch("http://localhost:8000/payments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify(payment)
    })
        .then(res => res.json())
}

export const deletePayment = (payment_type_Id) => {
    return fetch(`http://localhost:8000/payments/${payment_type_Id}`, {
        method: "Delete",
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
        },
    })
}

export const getPayments = () => {
    return fetch("http://localhost:8000/payments", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`
        }
    })
        .then(response => response.json())
}