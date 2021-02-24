import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/guihleme.png" alt="Guih Leme"/>
      <div>
        <strong>Guilherme Leme</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}
