import React from 'react'
import './styles/index.scss'

import Recipes from './components/Recipes'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh, hai react</h1>
        </section>
        <Recipes />
      </main>
    </>
  )
}

export default App
