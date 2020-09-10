import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImgFrame = styled.div`
  position: relative;
  overflow: hidden;
  height: 14rem;

  ::after {
    content: "";
    position: absolute;
    z-index: 10;
    width: 0;
    height: 0;
    border-bottom: 2rem solid #1b1e21;
    border-right: 12rem solid transparent;
    left: 0;
    bottom: 0;
  }
`;

const Content = styled.div`
  padding: 0.5rem 1rem;
  min-height: 2.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 14rem;
  pointer-events: none;
  border-left: 50% solid transparent;
  object-fit: cover;
  transition: transform 200ms ease-in-out;
`;
const ContainerFrame = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: linear-gradient(to left, #c31432, #240b36);
`;
const Container = styled.div`
  background-color: #1b1e21;
  border-radius: 0.5rem;
  color: #fefefe;
  overflow: hidden;
  :hover {
    ${Image} {
      transform: scale(1.2) rotate(10deg);
    }
  }
`;

const IconAttr = styled.img`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 15;
  box-shadow: 0px 0px 0.5rem 0.125rem rgba(0, 0, 0, 0.75);
  border-radius: 50%;
`;

export const Card = ({ localized_name, primary_attr, onChoose, id }) => {
  const slugHeroName = localized_name.toLowerCase().replace(" ", "_");
  return (
    <ContainerFrame onClick={onChoose({ id, slugHeroName })}>
      <Container>
        <ImgFrame>
          <Image
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${slugHeroName}_vert.jpg`}
          />
          <IconAttr src={`images/${primary_attr}.png`} />
        </ImgFrame>
        <Content>
          <h3>{localized_name}</h3>
        </Content>
      </Container>
    </ContainerFrame>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  primary_attr: PropTypes.string,
  attack_type: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string),
  localized_name: PropTypes.string,
};
