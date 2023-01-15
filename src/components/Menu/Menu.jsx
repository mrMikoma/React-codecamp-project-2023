import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import BoltIcon from '@mui/icons-material/Bolt';
import CalculateIcon from '@mui/icons-material/Calculate';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import Button from '@mui/material/Button';


const Menu = () => {

    return (
        <div className="menu">
            <div className="header">
                <h3>MENU</h3>
            </div>

            <div className="button">

                <Button variant="contained"
                    component={Link}
                    startIcon={<BoltIcon />}
                    to="">
                    Front Page
                </Button>

            </div>
            <div className="button">

                <Button variant="contained"
                    component={Link}
                    startIcon={<CalculateIcon />}
                    to="calculator">
                    Calculator
                </Button>

            </div>
            <div className="button">
                <Button variant="contained"
                    component={Link}
                    startIcon={<EuroSymbolIcon />}
                    to="previous-page">
                    Previous Prices
                </Button>

            </div>
            
        </div>
    )
}

export default Menu