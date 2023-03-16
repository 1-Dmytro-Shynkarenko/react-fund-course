import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import routes from "../router";

import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route path="/error" element={<Error />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  );
};

export default AppRouter;

{
  /* <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route path="/error" element={<Error />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Navigate to="/posts" replace />} /> */
}
// import About from "../pages/About";
// import Posts from "../pages/Posts";
// import Error from "../pages/Error";
// import PostIdPage from "../pages/PostIdPage";

// {
//   routes.map((route, index) => (
//     <Route
//       key={route.path}
//       component={route.component}
//       path={route.path}
//       exact={route.exact}
//     />
//   ));
// }
