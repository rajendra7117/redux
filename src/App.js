
import './App.css';
import {Provider} from 'react-redux'
import store from './redux-toolkit/store';
import Users from './components/users/Users';

function App() {

  return (
    <Provider store={store}>
    <div className="App">
   
    <Users />
    </div>
    </Provider>
  );
}

export default App;
