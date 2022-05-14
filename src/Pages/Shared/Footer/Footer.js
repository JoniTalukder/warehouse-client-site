import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <div>
            <footer className='text-center m-2'>
                <p><small>Copyright- &copy; {year} </small></p>
            </footer>
        </div>
    );
};

export default Footer;

