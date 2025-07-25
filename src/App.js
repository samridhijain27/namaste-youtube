import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    //Children will go where Outlet is
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head></Head>
        <RouterProvider router={appRouter} />
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
