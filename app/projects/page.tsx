import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectList } from '../components/pages/projects/projects-list'
import { ProjectsPageData } from '../types/page-info'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  )
}
