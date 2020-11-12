import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/:id" component={Product} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
