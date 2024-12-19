import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB';
import './component.css';

export const userContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("Dawn");

    return (
        <div className="container">
            <div className="component-a">
                <h1 className="title">Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <userContext.Provider value={user}>
                    <ComponentB user={user}/>
                </userContext.Provider>
            </div>
        </div>
    );
}

export default ComponentA;
