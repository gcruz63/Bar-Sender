export const getSingleUser = (id) => {
    return fetch(`http://localhost:8000/users/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`
        }
    })
        .then(res => res.json())
}

export const getUsers = () => {
    return fetch("http://localhost:8000/users/current", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("BS_token")}`
        }
    })
        .then(res => res.json())
}


