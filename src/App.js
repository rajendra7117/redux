
import './App.css';
import {Provider} from 'react-redux'
import store from './redux-toolkit/store';
import Users from './components/users/Users';
import CakeContainer from './components/Cakes/CakeContainer';
import IcecreamsContainer from './components/Icecreams/IcecreamsContainer';

function App() {

  return (
    <Provider store={store}>
    <div className="App">
   
    <Users />
    <CakeContainer />
    <IcecreamsContainer />
    </div>
    </Provider>
  );
}

export default App;
