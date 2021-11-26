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
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(29, 49, 65, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1031;
`;

const Container = styled.div`
  position: absolute;
  right: 30%;
  left: 30%;
  top: 10%;
  width: 40%;
  height: 80%;
  background-color: #fff;
  border-radius: 20px;
  border: solid 10px #5352ed;
  padding: 16px;
`;
