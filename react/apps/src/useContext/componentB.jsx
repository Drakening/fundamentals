import React from 'react';
import ComponentC from './ComponentC';
import './component.css';

function ComponentB() {
    return (
        <div className="component-b">
            <h1 className="title">Component B</h1>
            <ComponentC/>
        </div>
    );
}

export default ComponentB;
