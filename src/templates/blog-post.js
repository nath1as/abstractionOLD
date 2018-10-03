import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'
import Bio from '../components/Bio'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
   const Abstraction = () =>
        <div>
        <div className="title" >ABSTRACTION</div>
        <div className="topback "></div>
        <div className="topbackground"></div>
      </div>

    return (
    <div>
      <Link to={"/"} >
        <Abstraction />
      </Link>
      <div className="content-background">
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={`${post.frontmatter.title} | ${siteTitle}`}
          />
          <div className="contentAll">
          <h1 className="contentTitle">{post.frontmatter.title}</h1>
          <div className="contentPost" dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <p className="contentDate" > {post.frontmatter.date} </p>
          <Bio />
        </div>
          <ul className="content-foot" >
            <li>
              {
                previous &&
                <Link className="previous" to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title} →
                </Link>
              }
            </li>
            <li>
              {
                next &&
                <Link className="next" to={next.fields.slug} rel="next">
                  ← {next.frontmatter.title} 
                </Link>
              }
            </li>
          </ul>
        </Layout>
      </div>
    </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        tags
      }
    }
  }
`
