import React from 'react'
import Card from './Card'
import data from '../data'

function Main() {
    const cards = data.map(card =>
        <Card
            key={card.id}
            {...card}
        />
    )
    return (
        <main>
            {cards}
        </main>
    )
}

export default Main
