import React from 'react'

import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import './style.css'
import moment from 'moment'


const TimeLine = () => {

    const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

    const items = [
    {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(1, 'hour')
    },
    {
        id: 2,
        group: 2,
        title: 'item 2',
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour')
    },
    {
        id: 3,
        group: 1,
        title: 'item 3',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(3, 'hour')
    }
    ]

    return (
        <div className="price-estimation-page">
            <div>
                <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment().add(-12, 'hour')}
                defaultTimeEnd={moment().add(12, 'hour')}
                minZoom={360000}
                maxZoom={86400000}
                dragSnap={900000}
                timeSteps={{
                    second: 1,
                    minute: 15,
                    hour: 1,
                    day: 1,
                    month: 1,
                    year: 1
                  }}
                />
            </div>
        </div>
    )

}

export default TimeLine