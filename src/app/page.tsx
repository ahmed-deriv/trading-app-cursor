import styles from './page.module.scss'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}
