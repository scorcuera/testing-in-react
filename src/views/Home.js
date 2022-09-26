import React, { useState } from 'react';
import Card from '../components/Card';
import './Home.css';
import { imageService } from '../services/imageService';

const Home = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await imageService.getProgrammers();
        return setData(response);
    };
    return (
        <div className="containerMain">
            <h1 className="title">Women in Computer Science</h1>
            <button className='btnShow' onClick={getData}>Show</button>
            <div className="containerGrid">
                {
                    data.map(programmer => (
                        <Card 
                            key={programmer.id} 
                            programmerName={programmer.name} 
                            programmerDescription={programmer.description}
                            programmerImage={programmer.image_name}>
                        </Card>
                    ))
                }

            </div>

        </div>
    )
}

export default Home;
