import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';

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
