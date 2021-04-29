import React from 'react';
import styled from 'styled-components';

const SubHead = styled.div`
    font-size: 3vw;
    padding: 2.5vw;
`;

const NasaHeader = (props) => {
    return (
        <div>
            <SubHead>{props.header}</SubHead>
        </div>
    )
}

export default NasaHeader;