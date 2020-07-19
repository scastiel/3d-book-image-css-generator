import React from 'react'

export interface Props {
  html: string
  css: string
}

export const Outputs = ({ html, css }: Props) => {
  return (
    <div className="outputs">
      <div className="output">
        <h2>CSS</h2>
        <style>{css}</style>
      </div>
      <div className="output">
        <h2>HTML</h2>
        <pre>{html}</pre>
      </div>
    </div>
  )
}
