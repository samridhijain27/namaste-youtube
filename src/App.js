import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head></Head>
        <Body />
      </div> 
    </Provider>
  );
}

/*
Head
Body
SideBar
MenuItems 
Main Container 
ButtonsList
Video Container
Video Card
*/

export default App;
