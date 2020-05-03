import React from "react"
import Project from "../Projects/Project"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const query = graphql`
  {
    allStrapiProjects(sort: { fields: published, order: ASC }, limit: 4) {
      nodes {
        Title
        id
        url
        published
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default function Projects() {
  const {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <section className={styles.courses}>
      <Title title="Latest" subtitle="projects" />
      <div className={styles.center}>
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      <Link to="/courses" className="btn-primary">
        all projects
      </Link>
    </section>
  )
}
