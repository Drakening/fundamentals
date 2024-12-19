import React, { useContext } from 'react';
import './component.css';
import { userContext } from './ComponentA';

function ComponentC() {
    const user = useContext(userContext);

    return (
        <div className="component-c">
            <h1 className="title">Component C</h1>
            <h2>{`Hello ${user}`}</h2>
        </div>
    );
}

export default ComponentC;
