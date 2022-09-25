import React from "react";
import styled from "styled-components";

const Auth = () => {
  return (
    <Container>
      <div className="container">
        <div className="header">
          <p className="title">F_Notify</p>
          <p>Make a schedule, we will notify you</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .container {
    width: 650px;
    height: 400px;
    background: var(--white);
  }
`;

export default Auth;
