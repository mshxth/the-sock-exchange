import Sock from "./Sock";
import React from 'react';

const Home = (props) => {
    return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                props.data.map((sock) => (
                    <Sock key={sock._id} data={sock} handleDelete={props.handleDelete} />
                ))
            }
        </div>
    );
};

export default Home;