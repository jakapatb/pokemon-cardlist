import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  padding: 1rem;
  transform: translateY(-50%);
  width: 10rem;
  min-height: 20rem;
  background-color: #1b1e21;
  border-radius: 0 0.5rem 0.5rem 0;
`;
const IconAttr = styled.img`
  border: 2px solid white;
  border-radius: 50%;
  &.disabled {
    opacity: 0.25;
  }
`;
const AttrWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(3, max-content);
`;
const Title = styled.h2`
  margin: 0.5rem;
`;
const Grid = styled.div`
  display: Grid;

  grid-template-columns: 50% 50%;
  background: linear-gradient(to left, #c31432, #240b36);
  border-radius: 0.5rem;
`;
const LeftButton = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0 0.25rem 0.25rem;
  border-radius: 0.5rem 0 0 0.5rem;
  box-sizing: border-box;
  border: none;
  background-color: #1b1e21;
  color: #fefefe;
  &.disabled {
    opacity: 0.5;
  }
`;
const RightButton = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0.25rem 0.25rem 0;
  border-radius: 0 0.5rem 0.5rem 0;
  box-sizing: border-box;
  border: none;
  background-color: #1b1e21;
  color: #fefefe;
  &.disabled {
    opacity: 0.5;
  }
`;
export const LeftFilter = ({ dispatch, state: { attr, atkType } }) => {
  const handleSelectAttr = (name) => () => {
    dispatch({ type: "SELECT_ATTR", payload: name });
  };
  const handleAtkType = (atkType) => () => {
    dispatch({ type: "SELECT_ATK_TYPE", payload: atkType });
  };
  return (
    <Container>
      <Title>Filter</Title>
      <AttrWrapper>
        <IconAttr
          src="/images/str.png"
          className={attr.str ? "" : "disabled"}
          onClick={handleSelectAttr("str")}
        />
        <IconAttr
          src="/images/agi.png"
          className={attr.agi ? "" : "disabled"}
          onClick={handleSelectAttr("agi")}
        />
        <IconAttr
          src="/images/int.png"
          className={attr.int ? "" : "disabled"}
          onClick={handleSelectAttr("int")}
        />
      </AttrWrapper>
      <Title as="h3">Attack type</Title>
      <Grid>
        <LeftButton
          className={atkType.melee ? "" : "disabled"}
          onClick={handleAtkType("melee")}
        >
          Melee
        </LeftButton>
        <RightButton
          className={atkType.ranged ? "" : "disabled"}
          onClick={handleAtkType("ranged")}
        >
          Ranged
        </RightButton>
      </Grid>
    </Container>
  );
};
