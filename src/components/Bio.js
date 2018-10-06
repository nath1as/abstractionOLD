import React from 'react'
const nths = `
          █▄
          ███▄
          ███▀█▄
          ███  ▀█▄              █
          ███   ███             █     ▄              ▄▄▄
          ███   ███     ▄█▄     █     █       ▄█▄  ▄█▀ ▀▀
          ███   ███   ▄█▀ ▀█▄  ▀█▀ ▄▄▄█ ▀   ▄█▀ ▀█▄ ▀█▄▄
          ███   ███ ▄██▄   ▄██▄ █▄ █  █ █ ▄██▄   ▄██▄  ▀█▄
          ███   ███                █             ▄▄▄▄▄▄▄█▀
          ███   ███
          ███   █▀
          ███
          ███
          █▀
          `




class Bio extends React.Component {
  render() {
    return (
      <div >
        <p className="decoration">⌥ </p><a className="bio" href="https://nathias.id"><pre>{nths}</pre> </a>
      </div>
    )
  }
}

export default Bio
