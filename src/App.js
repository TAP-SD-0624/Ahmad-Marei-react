import React from "react";
import AppRoutes from "./routes/AppRoutes";
import FavoriteItemsProvider from "./context/favoriteItems";
import Layout from "./layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <FavoriteItemsProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </FavoriteItemsProvider>
  );
}

export default App;
