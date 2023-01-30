import React from 'react'
import { Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom'

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
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/menu">Menu</Link></li>
            </ul>
        </>
    )
}

function About() {
    const navigate = useNavigate()
    return (
        <>
            <h1>About</h1>
            <button onClick={() => navigate("/home")}>Navigate home!</button>
        </>
    )
}

function People() {
    return <h1>People</h1>
}

function Menu() {
    return (
        <>
            <h1>Menu</h1>
            <ul>
                <li><Link to="/menu/pizza">Pizza</Link></li>
                <li><Link to="/menu/tacos">Tacos</Link></li>
                <li><Link to="/menu/sushi">Sushi</Link></li>
            </ul>
        </>
    )
}

function MenuItem() {
    const { menuItem } = useParams()
    const menuItemData = menu[menuItem]
    return (
        <>
            <h1>Menu Item</h1>
            <div>
                <h2>{menuItemData.name} - ${menuItemData.price}</h2>
                <img src={menuItemData.image} />
                <p>{menuItemData.description}</p>
            </div>
        </>
    )
}

function App() {
    return (
        <>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
            </ul>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/people" element={<People />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:menuItem" element={<MenuItem />} />
            </Routes>
        </>
    )
}

export default App
