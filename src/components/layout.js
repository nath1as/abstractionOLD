import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import "./layout.css"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
    <div>
      <div className="title text-center" >ABSTRACTION</div>
      <div className="blogposts"> {children} </div>
    </div>
    )
  }
}

export default Template
