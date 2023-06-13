import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = ({ children }) => {
  //Componente para verificar se o usuario está logado, ou seja, se há o login do usuario no contexto
  const { login } = React.useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
