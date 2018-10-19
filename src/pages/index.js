import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
       decide: '',
      }

      this.changeDecide = this.changeDecide.bind(this);
    }
    changeDecide(value) {
      this.setState( { decide: value } );
    }

  render() {
    const Menu = () =>
        <div>
          <div className="topbackground">
              <div className="title" onClick={() => this.changeDecide("all") }>ABSTRACTION</div>
          </div>
          <div className="wrapper">
          <menu className="menu">
                  <button className="theory" onClick={() => this.changeDecide("theory") }>▲&nbsp;thΞ0riª</button>
                  <button className="praxis" onClick={() => this.changeDecide("praxis") }>pƦaXís&nbsp;▼</button>
          </menu>
        </div>
        </div>


    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteCategory = get(this, 'props.data.site.siteMetadata.category')
    const siteTags = get(this, 'props.data.site.siteMetadata.tags')
    const siteDescription = get( this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const decide = this.state.decide;

    if (decide === 'theory') {
      return (
        <div>
            <Menu />
          <Layout location={this.props.location}>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: siteDescription }]}
              title={siteTitle}
              category={siteCategory}
              tags={siteTags} />
                {posts.filter(({node}) =>
                  get(node, 'frontmatter.category') === 'theory' ).map(({ node }) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug
                    const category = get(node, 'frontmatter.category') || node.fields.slug
                    const tags = get(node, 'frontmatter.tags') || node.fields.slug
                    return (
                          <Link to={ node.fields.slug }>
                            <div key={ node.fields.slug }>
                              <h4 className="category">{ category }</h4>
                              <h3 className="postTitle">{ title }</h3>
                              <p className="postContent" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                              <div className="datewrap">
                                <h4 className="tags-wrap">{ Object.values(tags).map( tag => <p className="tags">#{tag} </p> ) }</h4>
                                <h4 className="date">{ node.frontmatter.date }</h4>
                            </div>
                            </div>
                          </Link>
                    )
                 })
                }
          </Layout>
        </div>
      )
    } else if (decide === 'praxis') {
      return (
        <div>
          <Menu />
          <Layout location={this.props.location}>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: siteDescription }]}
              title={siteTitle}
              category={siteCategory}
              tags={siteTags} />
                {posts.filter(({node}) =>
                  get(node, 'frontmatter.category') === 'praxis' ).map(({ node }) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug
                    const category = get(node, 'frontmatter.category') || node.fields.slug
                    const tags = get(node, 'frontmatter.tags') || node.fields.slug
                    return (
                          <Link to={node.fields.slug}>
                            <div key={node.fields.slug}>
                              <h4 className="category">{category}</h4>
                              <h3 className="postTitle">{title}</h3>
                              <p className="postContent" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                              <div className="datewrap">
                                <h4 className="tags-wrap">{Object.values(tags).map( tag => <p className="tags">#{tag} </p> )}</h4>
                                <h4 className="date">{node.frontmatter.date}</h4>
                            </div>
                            </div>
                          </Link>
                    )
                 })
                }
          </Layout>
        </div>
      )
    } else {

    return (
      <div>
      <Menu />
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
                <Link to={node.fields.slug}>
                  <div key={node.fields.slug}>
                    <h4 className="category">{category}</h4>
                    <h3 className="postTitle">{title}</h3>
                    <p className="postContent" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <div className="datewrap">
                      <h4 className="tags-wrap">{Object.values(tags).map( tag => <p className="tags">#{tag} </p> )}</h4>
                      <h4 className="date">{node.frontmatter.date}</h4>
                  </div>
                  </div>
                </Link>
          )
        })}

      </Layout>
    </div>
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
