import React, { useState } from 'react'
import VegMenu from './Menu/VegMenu'
import NonVegMenu from './Menu/NonVegMenu'

function MenuComponent() {
    const[data,setData]=useState('');
    function menuData() {
        var a = <VegMenu />
    }
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className="list-group col-2">
                    <button type="button" className="list-group-item list-group-item-action" onClick={menuData}>Veg</button>
                    <button type="button" className="list-group-item list-group-item-action">Non-Veg</button>
                    <button type="button" className="list-group-item list-group-item-action">Drinks</button>
                    <button type="button" className="list-group-item list-group-item-action">Snacks</button>
                    <button type="button" className="list-group-item list-group-item-action">Dessert</button>
                </div>
                <div className='col-10'>
                    <VegMenu />
                    {/* <NonVegMenu /> */}
                </div>
            </div>
        </div>
    )
}

export default MenuComponent