import React from "react"
import Project from "./Project"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const query = graphql`
  {
    allStrapiProjects(sort: { fields: published, order: ASC }) {
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
      <Title title="all" subtitle="projects" />
      <div className={styles.center}>
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
