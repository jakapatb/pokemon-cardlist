import React from "react";
import styled from "styled-components";
import database from "./database.json";
import { Card } from "./components/Card";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export default function App() {
  return (
    <Container>
      {database.pokemons
        .sort((a, z) => z.id - a.id)
        .map((info) => (
          <Card {...info} key={info.id} />
        ))}
    </Container>
  );
}
