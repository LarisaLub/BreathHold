import React from 'react';
import './figure.css';

const Figure = ({ src, alt, caption }) => {
    return (
        <div className="figure">
        <svg width="358" height="317" viewBox="0 0 358 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M166.01 17.5C171.783 7.50001 186.217 7.5 191.99 17.5L346.143 284.5C351.916 294.5 344.7 307 333.153 307H24.8475C13.3005 307 6.08359 294.5 11.8571 284.5L166.01 17.5Z" stroke="#DFBFE4" stroke-width="19"/>
<circle cx="179" cy="24" r="24" fill="#FF0000"/>
</svg>


        </div>
    );
};

export default Figure;