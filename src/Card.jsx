import React from 'react'
import styled from 'styled-components'

function Card(props) {
  const { localized_name, imageURL } = props
  return (
    <Root>
      <Img src={imageURL} />
      <Title>{localized_name}</Title>
    </Root>
  )
}

const Root = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 4px;

  display: grid;
  grid-template-rows: 1fr auto;

  background-color: blue;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.div`
  padding: 2rem 1rem;

  align-self: flex-end;
`

export default Card
