import React from 'react';
import styled from 'styled-components';

const ContentColor = styled.div`
    background-color: black;
    color: white;
`;

const MainContent = (props) => {
    return (
        <div>
            <ContentColor>{props.description}</ContentColor>
        </div>
    )
}

export default MainContent;