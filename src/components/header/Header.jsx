import React from "react";
import styled from "styled-components";
import NewMovieModal from "../new-movie/NewMovieModal";
import Button from "../UI/button/Button";
import { useState } from "react";

const Header = ({ onNewMovieAdd }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };
  return (
    <>
      <StyledHeader>
        <Title>Favorite Movies</Title>
        {isModalVisible ? (
          <NewMovieModal
            onNewMovieAdd={onNewMovieAdd}
            onClose={toggleModalHandler}
          />
        ) : null}
        <Button onClick={toggleModalHandler} color=" orange">
          ADD MOVIE
        </Button>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: blue;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: 1.5rem;
  box-sizing: border-box;
`;
