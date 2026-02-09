import React from 'react'
import { UnderConstruction } from '../src/components/UnderConstruction'
import { Home } from '../src/Home'

const App = () => {
  const showPortfolio = false

  return (
    <div>
      {showPortfolio ? <UnderConstruction /> : <Home />}
    </div>
  )
}

export default App
