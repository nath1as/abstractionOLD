import React from 'react'
import { Link } from 'gatsby'
import "./layout.css"

class Template extends React.Component {

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
    <div>
      <div className="blogposts" > {children} </div>
    </div>
    )
  }
}

export default Template
