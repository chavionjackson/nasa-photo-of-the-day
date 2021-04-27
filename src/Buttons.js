import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 10px;
  margin: 2rem;
  border: none;
  border-radius: 3px;
  color: black;

  ${props => (props.type === "primary" ? `background: white` : null)}
  ${props => (props.type === "success" ? `background: white` : null)}
  ${props => (props.type === "danger" ? `background: white` : null)}
  ${props => (props.type === "warning" ? `background: white` : null)}
`;

export default Button;