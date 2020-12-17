import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Wrapper>
      <Link to="/">
        <span>My Wishes</span>
      </Link>
      <Link to="/birthday">
        <span>Birthday</span>
      </Link>
      <Link to="/christmas">
        <span>Christmas</span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
