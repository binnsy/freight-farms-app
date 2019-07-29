import React, { useState, useEffect, useReducer } from 'react'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { languages } from './languages'

/**
 * This is completely arbitrary, but as to demonstrate a state management designed to scale
 * For this specific component, doing this would not make a lot of sense
 * See the "HolaButton" below for an example on another option more suited for this
 */

// api layer
const getRandomHello = () => {
  const randomIndex = (Math.random() * languages.length) | 0
  return languages[randomIndex]
}

const initialState = { language: '', text: '' }

// this is a common pattern for Redux
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'reset':
      return ''
    case 'fetch_random_hello':
      var { language, text } = getRandomHello()
        return { ...state, language, text }
    case 'fetch_previous_hello':
      // { language, text } = usePrevious()
      return { ...state, language, text }
    default:
      return state
  }
}

const HelloButton = () => {

  const initialState = { language: '', text: '' }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'fetch_random_hello' })
  }, [])

  return (
    <div className="button-style" data-test="buttonComponent">
      <button
        onClick={() => {
          dispatch({ type: 'fetch_random_hello' })
        }}
        className="button border border-white rounded"
      >
        Hello World
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: 'fetch_previous_hello' })
        }}
        className="button border border-white rounded"
      >
        Previous
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'reset' })
        }}
        className="button border border-white rounded"
      >
        Clear
      </button>

      <div className="button-output">
        <h4 className="output">
          {state.language}
          <br />
          {state.text}
        </h4>
      </div>
    </div>
  )
}

// eslint-disable-next-line
const HolaButton = () => {
  const [randomHello, setRandomHello] = useState({ language: '', text: '' })

  const fetchRandomHello = () => {
    const randomIndex = (Math.random() * languages.length) | 0
    // opted to not destructure an additional time, but you can visualize as:
    // const { language, text } = languages[randomIndex]
    setRandomHello(languages[randomIndex])
  }
  // load a `hello` on mount
  useEffect(() => {
    fetchRandomHello()
  }, [])

  return (
    <div className="button-style" data-test="buttonComponent">
      <button
        onClick={fetchRandomHello}
        className="button border border-white rounded"
      >
        Hello World
      </button>
      <div className="button-output">
        <h4 className="output">
          {randomHello.language}
          <br />
          {randomHello.text}
        </h4>
      </div>
    </div>
  )
}

export default HelloButton
