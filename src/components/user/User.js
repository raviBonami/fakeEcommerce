import React from 'react'
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom'
import Navbar from '../source/navbar/Navbar';
import ProductsList from '../products/ProductsList';

function User() {
    const params = useParams();
    const navigator = useNavigate();

    return (
        <>
            <Navbar></Navbar>
            <div>
                <ProductsList />
            </div>
        </>
    )
}

export default User


// nav - Icon,  Home, About, Contact