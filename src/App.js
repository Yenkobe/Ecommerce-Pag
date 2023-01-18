import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import SingIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return
  <h1>I am the shop page</h1>
};


const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* 'index' this tells this route is that when you match the (/), with nothing on it, then this should be the home component*/}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SingIn />} />

      </Route>

    </Routes>

  );
};

export default App;
