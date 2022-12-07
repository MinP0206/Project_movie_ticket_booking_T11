
import React from 'react';
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AlertCanNotAccess from './alertCanNotAccess';
// import usersApi from '../../api/usersApi';
// import { LOGIN_SUCCESS } from '../../reducers/constants/Auth';

function AdminRoute(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  console.log("Staff-----: ", currentUser);
  const { component: ComponentStaff, ...rest } = props;
  let location = useLocation();
  return (
    <Route {...rest} render={(routeProps) => {
      if (currentUser && currentUser?.data?.role !== undefined) {
        // if (currentUser) {
        if (currentUser?.data?.role === "[ROLE_STAFF]") { 
          return <ComponentStaff {...routeProps} />
        }
        return <AlertCanNotAccess />
      }
      return <Redirect to={{
        pathname: "/dangnhap",
        state: location.pathname,
      }} />
    }} />
  )
}
export default AdminRoute;