import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import PrivateRoute from 'components/Route/PrivateRoute';
import RestrictedRoute from 'components/Route/RestrictedRoute';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Contacts />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
