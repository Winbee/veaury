import React from 'react'

export default function ReactButton(props) {
  return <button disabled={props.disabled}>
    {props.children}
  </button>
}
