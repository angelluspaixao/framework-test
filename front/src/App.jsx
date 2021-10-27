import styles from './App.module.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigator from './components/Navigator'
import Albums from './components/Albums'
import Posts from './components/Posts'
import ToDos from './components/ToDos'

const App = () => {
  return (
    <Router>
      <main className={styles.mainGrid}>
        <h1 className={styles.title}>Teste Framework Digital</h1>
        <Navigator />
        <Switch>
          <Route path='/' exact>
            <Posts/> 
          </Route>
          <Route path='/albums'>
            <Albums/>
          </Route>
          <Route path='/todos'>
            <ToDos/>
          </Route>
        </Switch>
        
      </main>
    </Router>
  )
}

export default App
