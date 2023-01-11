import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import BoltIcon from '@mui/icons-material/Bolt';
import CalculateIcon from '@mui/icons-material/Calculate';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';


const Menu = () => {

    return (
        <div className="menu">
            <h3>Menu</h3>
            <div className='row'>
                <BoltIcon />
                <Link to=""> Front Page</Link>
            </div>
            
            <CalculateIcon />
            <Link to="calculator"> Calculator</Link>
            <EuroSymbolIcon />
            <Link to="previous-page"> Previous Prices</Link>
        </div>
    )
}

export default Menu