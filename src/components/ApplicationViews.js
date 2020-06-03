import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/home";
import AnimalList from "./animal/animalList";
import AnimalDetail from "./animal/animalDetail";
import AnimalForm from "./animal/animalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationList from "./location/locationList";
import LocationDetail from "./location/locationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";
import EmployeeList from "./employee/employeeList";
import EmployeeForm from "./employee/employeeForm";
import OwnerList from "./owner/ownerList";
import OwnerForm from "./owner/OwnerForm";
import Login from "./auth/Login";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={(props) => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={(props) => {
          if (isAuthenticated()) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/new"
        render={(props) => {
          if (isAuthenticated()) {
            return <AnimalForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          if (isAuthenticated()) {
            return <LocationList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={(props) => {
          if (isAuthenticated()) {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/new"
        render={(props) => {
          if (isAuthenticated()) {
            return <LocationForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners"
        render={(props) => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owners/new"
        render={(props) => {
          if (isAuthenticated()) {
            return <OwnerForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/new"
        render={(props) => {
          if (isAuthenticated()) {
            return <EmployeeForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
