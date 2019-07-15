const scrollIntoView = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
}

export default scrollIntoView