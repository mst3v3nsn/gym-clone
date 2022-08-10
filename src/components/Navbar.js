import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    const location = useLocation();

    const setLocation = (loc) => {
        if (location.pathname !== '/') {
            return '/' + loc;
        } else {
            return loc;
        }
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none' }}
            px="20px"
        >
            <Link to="/" alt="logo" stlye={{ width: '48px', height: '48px', margin: '0 20px' }}>
                <img src={Logo}/>
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                <a href={setLocation('#exercises')} style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
                <a href={setLocation('#search')} style={{ textDecoration: 'none', color: '#3A1212' }}>Search</a>
            </Stack>
        </Stack>
    )
}

export default Navbar;