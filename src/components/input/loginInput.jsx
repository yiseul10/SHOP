import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import { media } from '../../responsive';

export function LoginInput({
  label,
  onChange,
  type = 'text',
  placeholder,
  value,
  checked = true,
  errorMsg,
  btn = false,
  btnName,
  btnClick
}) {
  const [inputFocus, setInputFocus] = useState(false);

  function onInputFocus() {
    setInputFocus(!inputFocus);
  }

  return (
    <Cover msgDisplay={checked}>
      <p>{label}</p>
      <InputContainer focus={inputFocus}>
        <IdInput
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
          onFocus={onInputFocus}
          onBlur={onInputFocus}
        />
        {btn && <button onClick={btnClick}>{btnName}</button>}
      </InputContainer>
      <p className='errorMsg'>{errorMsg}</p>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: left;
  width: 100%;
  ${media({
    marginBottom: '0.7rem'
  })};
  .errorMsg {
    display: ${({ msgDisplay }) => (msgDisplay ? 'none' : '')};
    color: red;
  }
  p {
    height: 20px;
    width: 22%;
    line-height: 38px;
  }

  button {
    border: 0;
    outline: 0;
    background-color: #222;
    width: 15%;
    color: #fff;
    border-radius: 8px;
  }
  /* @media only screen and (max-width: 1000px) {
    display: none;
  } */
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  border: ${({ focus }) => (focus ? 'solid 1px #222' : 'solid 1px #ced4da')};
  border-radius: 8px;
  /* padding: 5px; */
  width: 75%;
  height: 42px;
  display: flex;
  margin-left: 10px;
`;

const IdInput = styled.input`
  width: 100%;
  height: 32px;
  margin: 5px;
  border: none;
`;
