import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

    return (
        <div className="menu">
            <h3>Menu</h3>
            <Link to=""> Front Page</Link>
            <Link to="calculator"> Calculator</Link>
            <Link to="previous-page"> Previous Prices</Link>
        </div>
    )
}

export default Menu