//import { AddTaskIcon } from '@mui/icons-material';
import React from 'react'
import './style.css'

import AppName from '../AppName/AppName';
import Menu from '../Menu/Menu';
import TimeLine from '../TimeLine';
import AddTask from '../AddTask';



const PriceEstimationPage = () => {

    return (
        <div className="price-estimation-page">
            <Menu />
            <AppName />
            <AddTask />
            <TimeLine />
        </div>
    )

}

export default PriceEstimationPage