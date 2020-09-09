import React from "react";
import styled from "styled-components";
const Container = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #4c4c4c;
  overflow: hidden;
  box-shadow: rgb(224, 224, 224) -8px 8px 0.5rem 0px;
`;
const Content = styled.div`
  padding: 0.5rem 1rem;
`;
const Image = styled.img`
  width: 100%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  background-color: #21b7de;
`;
export const Card = ({ name, id, sprite, description }) => {
  return (
    <Container>
      <Image alt={name} src={sprite} />
      <Content>
        <h3>{name}</h3>
        <p>{description}</p>
      </Content>
    </Container>
  );
};
