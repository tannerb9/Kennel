import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/home";
import AnimalList from "./animal/animalList";
import AnimalDetail from "./animal/animalDetail";
import AnimalForm from "./animal/animalForm";
import LocationList from "./location/locationList";
import LocationDetail from "./location/locationDetail";
import EmployeeList from "./employee/employeeList";
import EmployeeForm from "./employee/employeeForm";
import OwnerList from "./owner/ownerList";

const ApplicationViews = () => {
  return (
    <React.Fragment>
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
          return <AnimalList {...props} />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={(props) => {
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/animals/new"
        render={(props) => {
          return <AnimalForm {...props} />;
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          return <LocationList />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={(props) => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/locations/new"
        render={(props) => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        path="/owners"
        render={(props) => {
          return <OwnerList />;
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          return <EmployeeList {...props} />;
        }}
      />
      <Route
        path="/employees/new"
        render={(props) => {
          return <EmployeeForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
