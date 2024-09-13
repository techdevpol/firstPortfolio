import styles from './SkillsStyles.module.css'
import chekMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <span>
          <SkillList src={chekMarkIcon} skill='React' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='Laravel' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='Bootstrap' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='Tailwind' alt='Check icon' />
        </span>
      </div>
      <hr />
      <div className={styles.skillList}>
        <span>
          <SkillList src={chekMarkIcon} skill='JavaScript' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='PHP' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='Python' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='C++' alt='Check icon' />
        </span>
      </div>
      <hr />
      <div className={styles.skillList}>
        <span>
          <SkillList src={chekMarkIcon} skill='HTML' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='CSS' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='MySQL' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='Git' alt='Check icon' />
          <SkillList src={chekMarkIcon} skill='Node.js' alt='Check icon' />
        </span>
      </div>
    </section>
  )
}

export default Skills
