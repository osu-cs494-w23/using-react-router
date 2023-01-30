import React from 'react'

import './App.css'

const menu = {
    tacos: {
        name: "Tacos",
        image: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
        description: "Shell + fillings",
        price: 5.95
    },
    pizza: {
        name: "Pizza",
        image: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
        description: "Crust, sauce, cheese",
        price: 19.95
    },
    sushi: {
        name: "Sushi",
        image: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif",
        description: "Raw fish + rice",
        price: 10.95
    }
}

function Home() {
    return <h1>Home</h1>
}

function About() {
    return <h1>About</h1>
}

function People() {
    return <h1>People</h1>
}

function Menu() {
    return <h1>Menu</h1>
}

function App() {
    return (
        <Home />
    )
}

export default App
