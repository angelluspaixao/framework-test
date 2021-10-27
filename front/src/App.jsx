import styles from './App.module.scss'
import Albums from './components/Albums'
import Posts from './components/Posts'
import ToDos from './components/ToDos'

const App = () => {
  return (
    <main className={styles.mainGrid}>
      <h1 className={styles.title}>Teste Framework Digital</h1>
      <Posts/>
      <Albums/>
      <ToDos/>
    </main>
  )
}

export default App
