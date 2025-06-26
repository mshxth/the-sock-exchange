import React from 'react';

const Footer = (props) => {
    const getEnvironmentClass = () => {
        if (props.environment.toLowerCase() === 'development') {
            return 'bg-yellow';
        }
        else if (props.environment.toLowerCase() === 'production') {
            return 'bg-green';
        }
        else {
            return '';
        }
    }
    
    return (
        <footer className={`text-muted ${getEnvironmentClass()}`}>
            <div><strong>{props.environment.toUpperCase()}</strong></div>
        </footer>
    );
};

export default Footer;