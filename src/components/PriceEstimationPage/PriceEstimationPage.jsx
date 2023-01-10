import React from 'react'

import AppName from '../AppName/AppName';
import Menu from '../Menu/Menu';
import TimeLine from '../TimeLine';



const PriceEstimationPage = () => {

    return (
        <div className="price-estimation-page">
            <Menu />
            <AppName />
            <TimeLine />
        </div>
    )

}

export default PriceEstimationPage