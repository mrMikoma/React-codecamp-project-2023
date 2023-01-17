import React from 'react'
import './style.css'

import AppName from '../AppName/AppName';
import AskDate from '../AskDate/AskDate';
import ChartMaker from '../ChartMaker/ChartMaker';



const PreviousPricesPage = () => {

    return (
        <div className="previous-prices-page">
            <AppName />
            <AskDate />
            <ChartMaker />
        </div>
    )

}

export default PreviousPricesPage