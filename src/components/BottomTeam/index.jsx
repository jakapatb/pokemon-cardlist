import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 2.5rem;
  z-index: 100;
  display: flex;
  box-shadow: 0px 0px 0.5rem 0.125rem rgba(0, 0, 0, 0.75);
  transform: skewx(-15deg);
`;
const Card = styled.div`
  overflow: hidden;
  width: 6rem;

  position: relative;
  &:hover {
    width: 12rem;
    img {
      width: 15rem;
      object-position: right;
    }
  }
  img {
    transform: skewx(15deg);
    margin-left: -2rem;
    width: 10rem;
    height: 10rem;
    object-position: center;
    object-fit: cover;
  }
`;
export const BottomTeam = ({ team, onDelete }) => {
  return (
    <Container>
      {team.map(({ id, slugHeroName }) => (
        <Card onClick={onDelete(id)}>
          <img
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${slugHeroName}_full.png`}
            alt={slugHeroName}
          />
        </Card>
      ))}
    </Container>
  );
};

BottomTeam.propTypes = {
  team: PropTypes.arrayOf(PropTypes.any),
};
