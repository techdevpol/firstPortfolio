import styles from './ProjectsStyles.module.css'
import toDoList from '../../assets/toDoList.jpg'
import eCommerce from '../../assets/eCommerce.jpg'
import Dashboard from '../../assets/dashboard.jpg'
import Blog from '../../assets/blog.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={toDoList}
          link='https://github.com/techdevpol'
          h3='ToDo List'
          p='Linking it soon'
        />
        <ProjectCard
          src={eCommerce}
          link='https://github.com/techdevpol'
          h3='e-Commerce'
          p='Linking it soon'
        />
        <ProjectCard
          src={Dashboard}
          link='https://github.com/techdevpol'
          h3='DA Dashboard'
          p='Linking it soon'
        />
        <ProjectCard
          src={Blog}
          link='https://github.com/techdevpol'
          h3='Blog APP with AS'
          p='Linking it soon'
        />
      </div>
    </section>
  )
}

export default Projects
