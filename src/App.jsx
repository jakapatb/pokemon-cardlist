import React, { useReducer, useState } from "react";
import heroesList from "./database.json";
import { Card } from "./components/Card";
import styled from "styled-components";
import { LeftFilter } from "./components/LeftFilter";
import { BottomTeam } from "./components/BottomTeam";
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 12rem);
  grid-gap: 1rem;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  color: #fefefe;
`;
const Title = styled.h1`
  padding: 1rem 0;
`;

const reducer = (state, { payload, type }) => {
  switch (type) {
    case "SELECT_ATTR":
      return {
        ...state,
        attr: { ...state.attr, [payload]: !state.attr[payload] },
      };
    case "SELECT_ATK_TYPE":
      return {
        ...state,
        atkType: { ...state.atkType, [payload]: !state.atkType[payload] },
      };
    case "CHOOSE_HERO":
      if (
        state.team.length < 5 &&
        !state.team.some(({ id }) => id === payload.id)
      )
        return { ...state, team: [...state.team, payload] };
      else return state;
    case "DELETE_HERO":
      return { ...state, team: state.team.filter(({ id }) => id !== payload) };
    default:
      return state;
  }
};

const initialState = {
  attr: {
    str: true,
    agi: true,
    int: true,
  },
  atkType: {
    melee: true,
    ranged: true,
  },
  team: [],
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChooseHero = (hero) => () => {
    dispatch({ type: "CHOOSE_HERO", payload: hero });
  };
  const handleDeleteHero = (id) => () => {
    dispatch({ type: "DELETE_HERO", payload: id });
  };

  return (
    <>
      <Container>
        <LeftFilter dispatch={dispatch} state={state} />
        <BottomTeam team={state.team} onDelete={handleDeleteHero} />
        <Title>Dota 2 Team builder</Title>
        <CardWrapper>
          {heroesList
            .filter(({ primary_attr, attack_type }) => {
              let result = true;
              result = state.attr[primary_attr];
              result = result && state.atkType[attack_type.toLowerCase()];
              return result;
            })
            .map((hero, index) => (
              <Card key={index} {...hero} onChoose={handleChooseHero} />
            ))}
        </CardWrapper>
      </Container>
    </>
  );
}
