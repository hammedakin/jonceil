import React from 'react';
import NavbarPage from '../Components/Hompage/FirstNav';
import Models from '../Components/Hompage/Models';
import Showcase from '../Components/Hompage/Showcase';

const HomePage = () => {
    return ( 
    <>
    <div class="home">
    {/* <NavbarPage/> */}
    <Showcase/>
    <Models/>
    </div>
    </>
    );
}
 
export default HomePage;