import React from 'react'

function Card3() {
    return (
        <div>
            <div className="card">
                <img src="https://plus.unsplash.com/premium_photo-1663852706199-52e7cd98468e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Buy 1 get 1 free</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary" type="submit">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card3