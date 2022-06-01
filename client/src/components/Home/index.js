import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <form>
                <input type="email" placeholder="Enter city name" />
                <input type="button" value="Submit" />
            </form>
        </div>
    );
};

export default Home;