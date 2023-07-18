import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import Card5 from './Cards/Card5'
import Card6 from './Cards/Card6'

function CardBody() {
    return (
        <>
        <div className='container overflow-hidden text-center p-5' id='offers'>
            <div className="row row-cols-1 row-cols-md-3 g-4 gx-5">
                <div className="col mb-2 ">
                    <Card1 />
                </div>
                <div className="col">
                    <Card2 />
                </div>
                <div className="col">
                    <Card3 />
                </div>
                <div className="col">
                    <Card4 />
                </div>
                <div className="col">
                    <Card5 />
                </div>
                <div className="col">
                    <Card6 />
                </div>
            </div>
        </div>
        </>
    )
}

export default CardBody