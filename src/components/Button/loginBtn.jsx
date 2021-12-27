import React from 'react';
import styled from 'styled-components';
import { media } from '../../responsive';

export function LoginBtn({ label, onClick, type = 'button' }) {
  return (
    <Cover onClick={onClick} type={type}>
      {label}
    </Cover>
  );
}

const Cover = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #222;
  font: bold;
  color: #fff;
  width: 38%;
  height: 38px;
  margin-bottom: 20px;
  ${media({
    padding: '0.5rem',
    marginBottom: '0.7rem',
    borderRadius: '1.5rem'
  })};
`;
