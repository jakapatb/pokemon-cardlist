import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Filter from './Filter'
import Characters from './Characters'

import db from './database.json'
import { hydrate } from 'react-dom'

function App() {
  const [kinds, setKinds] = useState({ str: true, agi: true, int: true })
  const [attacks, setAttacks] = useState({ melee: true, ranged: true })

  const [chars, setChars] = useState([])

  useEffect(() => {
    async function init() {
      const data = db
        .filter(
          x => kinds[x.primary_attr] && attacks[x.attack_type.toLowerCase()]
        )
        .map(x => ({
          ...x,
          imageURL: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${toURL(
            x.localized_name
          )}_vert.jpg`
        }))

      // https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phantom_assassin_vert.jpg

      setChars(data)
    }

    /**
     * @param {string} s
     */
    function toURL(s) {
      return s.toLowerCase().replace(/ /, '_')
    }

    init()
  }, [kinds, attacks])

  function onKindClick(name) {
    setKinds(k => ({ ...k, [name]: !k[name] }))
  }

  function onTypeClick(name) {
    setAttacks(a => ({ ...a, [name]: !a[name] }))
  }

  return (
    <Page>
      <h1>Dota 2 Team builder</h1>
      <Filter
        kinds={kinds}
        attacks={attacks}
        kindClick={onKindClick}
        typeClick={onTypeClick}
      ></Filter>
      <Characters chars={chars}></Characters>
    </Page>
  )
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  color: white;
`

export default App
