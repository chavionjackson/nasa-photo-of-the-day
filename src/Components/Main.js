import React from 'react';
import styled from 'styled-components';

const ContentColor = styled.div`
  background-color:rgb(0,0,0);
  background-image:url(http://www.zingerbugimages.com/backgrounds/starry_sky_glitter_background_seamless.gif);
  background-position:top left;
  background-repeat:repeat;
  background-attachment:fixed;  
  color: #ba1e68;
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