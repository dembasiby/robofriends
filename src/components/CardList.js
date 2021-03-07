import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <>
            {
                robots.map((robot) => {
                    return (
                        <Card 
                            key={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                            id={robot.id}
                        />
                    );
                })
            }
        </>
    )
}

export default CardList
