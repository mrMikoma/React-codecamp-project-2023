
import React from 'react'

const NordPoolChart = () => {

    const PRICE_ENDPOINT = 'https://api.porssisahko.net/v1/price.json';

    const dateAndTimeNow = new Date();
    const date = dateAndTimeNow.toISOString().split('T')[0];
    const hour = dateAndTimeNow.getHours();

    const response = fetch(`${PRICE_ENDPOINT}?date=${date}&hour=${hour}`);
    const { price } = response.json();

    console.log(`Hinta nyt on ${price}`);

    return (
        <h2>Hey!</h2>
    )
}

export default NordPoolChart


