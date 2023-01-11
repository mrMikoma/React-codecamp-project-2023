//import { AddTaskIcon } from '@mui/icons-material';
import React from 'react'
import './style.css'

import AppName from '../AppName/AppName';
import TimeLine from '../TimeLine';
import AddTask from '../AddTask';



const PriceEstimationPage = () => {

    return (
        <div className="price-estimation-page">
            <AppName />
            <AddTask />
            <TimeLine />
        </div>
    )

}

export default PriceEstimationPage