import styled from "styled-components";
import Modal from "react-modal";
import React from "react";
import { IoIosClose } from "react-icons/io";

export function LoginModal({ isVisible, isModalClose, components }) {
  //  치환 개념

  return (
    <StyleModal isOpen={isVisible}>
      <Container>
        <div>
          <button onClick={isModalClose}>
            <IoIosClose />
          </button>
        </div>
        {components}
      </Container>
    </StyleModal>
  );
}

const StyleModal = styled(Modal)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 49, 65, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1031;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 520px;
  height: 600px;
  background-color: #fff;
  border-radius: 20px;
  border: solid 5px#2C3A47;
  padding: 16px;
  div {
    text-align: right;
  }
`;
