import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ApiDataContextProvider from './components/contexts/ApiDataContext';

function App() {
  return (
    <div className="App">
      <Header />
      <ApiDataContextProvider>
        {/* not sure about the placement yet */}
        <Searchbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/:id" component={ProductDetails} />
          </Switch>
        </Router>
      </ApiDataContextProvider>
      <Footer />
    </div>
  );
}

export default App;
