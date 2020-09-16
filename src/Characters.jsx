import React from 'react'
import styled from 'styled-components'

import Card from './Card'

function Characters(props) {
  const { chars } = props
  return (
    <Root>
      {chars.map(ch => (
        <Card {...ch} />
      ))}
    </Root>
  )
}

const Root = styled.div`
  width: 80vw;

  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1rem;
`

export default Characters
