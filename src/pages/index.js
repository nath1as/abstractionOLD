import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteCategory = get(this, 'props.data.site.siteMetadata.category')
    const siteTags = get(this, 'props.data.site.siteMetadata.tags')
    const siteDescription = get( this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const decide = 'theory';

    if (decide === 'theory') {
    return (
      <Layout location={this.props.location}>
        <Helmet htmlAttributes={{ lang: 'en' }} meta={[{ name: 'description', content: siteDescription }]} title={siteTitle} category={siteCategory} tags={siteTags} />
        {posts.filter(({node}) => get(node, 'frontmatter.category') === 'theory' ).map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const category = get(node, 'frontmatter.category') || node.fields.slug
          const tags = get(node, 'frontmatter.tags') || node.fields.slug
          return (


                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  <div key={node.fields.slug}>
                    <small className="date">{node.frontmatter.date}</small>
                    <h4 className="category">{category}</h4>
                    <h3 className="postTitle">{title}</h3>
                    <p className="postContent" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <h4>{Object.values(tags).map( tag => <p className="tags">#{tag} </p> )}</h4>
                  </div>
                </Link>
          )
        })}
      </Layout>
    )
    } else if (decide === 'praxis') {
      <p> praxis </p>
    } else {

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
          category={siteCategory}
          tags={siteTags}
        />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const category = get(node, 'frontmatter.category') || node.fields.slug
          const tags = get(node, 'frontmatter.tags') || node.fields.slug
          return (


                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  <div key={node.fields.slug}>
                    <small className="date">{node.frontmatter.date}</small>
                    <h4 className="category">{category}</h4>
                    <h3 className="postTitle">{title}</h3>
                    <p className="postContent" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <h4>{Object.values(tags).map( tag => <p className="tags">#{tag} </p> )}</h4>
                  </div>
                </Link>
          )
        })}
      </Layout>
    )
  }
}
}
export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 450)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            category
            tags
          }
        }
      }
    }
  }
`
