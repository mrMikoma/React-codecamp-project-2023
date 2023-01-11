import React from 'react'

import AppName from '../AppName/AppName';
import Menu from '../Menu/Menu';
import AskDate from '../AskDate/AskDate';



const PreviousPricesPage = () => {

    return (
        <div className="previous-prices-page">
            <Menu />
            <AppName />
            <AskDate />
        </div>
    )

}

export default PreviousPricesPage