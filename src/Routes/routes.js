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
        component: () => <h1>Projects</h1>,
      },
      {
        path: "/projects/1",
        key: "PROJECTS_1",
        exact: true,
        component: () => <Project1 />,
      },
      {
        path: "/projects/2",
        key: "PROJECTS_2",
        exact: true,
        component: () => <h1>PROJECT2</h1>,
      },
      {
        path: "/projects/3",
        key: "PROJECTS_3",
        exact: true,
        component: () => <h1>PROJECT3</h1>,
      },
      {
        path: "/projects/4",
        key: "PROJECTS_4",
        exact: true,
        component: () => <h1>PROJECT4</h1>,
      },
      {
        path: "/projects/5",
        key: "PROJECTS_5",
        exact: true,
        component: () => <h1>PROJECT5</h1>,
      },
      {
        path: "/projects/6",
        key: "PROJECTS_6",
        exact: true,
        component: () => <h1>PROJECT6</h1>,
      },
      {
        path: "/projects/7",
        key: "PROJECTS_7",
        exact: true,
        component: () => <h1>PROJECT7</h1>,
      },
      {
        path: "/projects/8",
        key: "PROJECTS_8",
        exact: true,
        component: () => <h1>PROJECT8</h1>,
      },
      {
        path: "/projects/9",
        key: "PROJECTS_9",
        exact: true,
        component: () => <h1>PROJECT9</h1>,
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

