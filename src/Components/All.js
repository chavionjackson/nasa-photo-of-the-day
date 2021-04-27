import React from 'react';
import ReactPlayer from 'react-player'
import NasaHeader from './Header';
import MainContent from './Main';

const AllContent = (props) => {
    const {description, header} = props.data

    return (
        <div>
            <ReactPlayer controls url = "https://www.youtube.com/embed/ubBzcSD8G8k?rel=0" top width = '100%' alt = 'NASA video'/>
            <NasaHeader header = {header}/>
            <MainContent description = {description}/>
        </div>
    )
}

export default AllContent;