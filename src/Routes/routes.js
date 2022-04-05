import React from "react";
import { Route, Switch } from "react-router-dom";
import Project1 from "../Pages/Projects/1_Project";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <h1>Log in</h1> },
  // Routes for the Navbar and the Footer
  {
    path: "/home",
    key: "HOME",
    component: RenderRoutes,
    routes: [
      {
        path: "/home",
        key: "HOME_ROOT",
        exact: true,
        component: () => <h1>Home</h1>,
      },
    ],
  },
  {
    path: "/about",
    key: "ABOUT",
    component: RenderRoutes,
    routes: [
      {
        path: "/about",
        key: "ABOUT_ROOT",
        exact: true,
        component: () => <h1>About</h1>,
      },
    ],
  },
  {
    path: "/contact",
    key: "CONTACT",
    component: RenderRoutes,
    routes: [
      {
        path: "/contact",
        key: "CONTACT_ROOT",
        exact: true,
        component: () => <h1>Contact</h1>,
      },
    ],
  },

  {
    path: "/projects",
    key: "PROJECTS",
    component: RenderRoutes,
    routes: [
      {
        path: "/projects",
        key: "PROJECTS_ROOT",
        exact: true,
        component: () => <h1>PROJECTS</h1>,
      },
      {
        path: "/projects/1",
        key: "PROJECTS_1",
        exact: true,
        component: () => <h1>PROJECT1</h1>,
      },
    ],
  },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

  export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }

