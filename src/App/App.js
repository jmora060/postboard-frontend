import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import Posts from '../Components/Posts'

export default function App () {
    const [section, setSection] = useState(0);

    function renderSection(){
        switch(section){
            case 0: return <Posts/>;
            case 1: return <h1>Messages ... Coming soon!</h1>;
            case 2: return <h1>Account SignIn ... Coming soon!</h1>;
            default: return <></>;
        }
    }

    return (
    <>
        <NavBar changeSection={setSection}/>
        {renderSection()}
    </>)
}