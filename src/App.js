
import { Provider } from "react-redux";
import {BrowserRouter, HashRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './store';
import {createStore, applyMiddleware} from 'redux'
import NavBar from "./Components/NavBar";
import './Styles/App.scss';
import AppRouter from './Components/AppRouter';
import Footer from "./Components/Footer";
import Tech from "./Components/Tech";

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      
      <BrowserRouter>
      <NavBar />
        <div className="App">          
          <AppRouter />                         
        </div>

      <Footer />

      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
