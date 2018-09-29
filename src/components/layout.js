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
      <Link to={'/'}> <div className="title text-center" >ABSTRACTION</div> </Link>
      <div className="blogposts scroll-container" > {children} </div>
    </div>
    )
  }
}

export default Template
