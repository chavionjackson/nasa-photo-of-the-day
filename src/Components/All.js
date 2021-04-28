import React from 'react';
import NasaHeader from './Header';
import MainContent from './Main';

const AllContent = (props) => {
    const {description, header} = props.data

    return (
        <div>
            <NasaHeader header = {header}/>
            <MainContent description = {description}/>
        </div>
    )
}

export default AllContent;