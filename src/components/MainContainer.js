import React from 'react'
import "./styles.css";
import Sidebar from './Sidebar';
import WorkArea from './WorkArea';

export default function MainContainer() {
    return (
        <div className='main-container'>
            <Sidebar />
            <WorkArea />
        </div>
    )
}
