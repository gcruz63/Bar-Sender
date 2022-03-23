export const getProducts = () => {
    return fetch("http://localhost:8000/products", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`
        }
    })
        .then(response => response.json())
}

export const createProduct = (product) => {
    return fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
}

export const getProductTypes = () => {
    return fetch("http://localhost:8000/product_types", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
        }
    })
        .then(res => res.json())
}

export const getProduct = (productId) => {
    return fetch(`http://localhost:8000/products/${productId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('BS_token')}`
        }
    }).then(res => res.json())
}

export const updateProduct = (product) => {
    return fetch(`http://localhost:8000/products/${product.id}`, {
        method: "Put",
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify(product)
    })
}

export const deleteProduct = (productId) => {
    return fetch(`http://localhost:8000/products/${productId}`, {
        method: "Delete",
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`,
        },
    })
}