import './App.css'
import { Route, Switch } from 'wouter';
import home from './pages/home';



function App() {

  return (
<Switch>
<Route path="/*" component={home}></Route>
</Switch>
  )
}

export default App
