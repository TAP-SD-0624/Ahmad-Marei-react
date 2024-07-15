import React from "react";
import Header from "../components/header";
import MainContent from "../components/homeBody";

export default function Home() {
  return (
    <div className="flex-grow-1 d-flex justify-content-between flex-column">
      <Header />
      <MainContent />
    </div>
  );
}
