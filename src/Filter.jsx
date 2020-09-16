import React from 'react'
import styled from 'styled-components'

function Filter(props) {
  const { kindClick, typeClick, kinds, attacks } = props

  return (
    <Root>
      <h1>Filter</h1>
      <Kind
        src="/images/str.png"
        onClick={() => kindClick('str')}
        active={kinds.str}
      />
      <Kind
        src="/images/agi.png"
        onClick={() => kindClick('agi')}
        active={kinds.agi}
      />
      <Kind
        src="/images/int.png"
        onClick={() => kindClick('int')}
        active={kinds.int}
      />
      <h1>Attack Type</h1>
      <AttackType onClick={() => typeClick('melee')} active={attacks.melee}>
        Melee
      </AttackType>
      <AttackType onClick={() => typeClick('ranged')} active={attacks.ranged}>
        Ranged
      </AttackType>
    </Root>
  )
}

const Root = styled.div`
  background-color: #1b1e21;

  h1 {
    font-size: 1.3rem;
  }
`

const Kind = styled.img`
  border-radius: 50%;
  border: 2px solid white;

  ${props => !props.active && 'opacity: 0.5'}
`

const AttackType = styled.button`
  ${props => !props.active && 'opacity: 0.5'}
`

export default Filter
