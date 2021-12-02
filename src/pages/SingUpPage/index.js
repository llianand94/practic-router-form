import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const SingUnPage = (props) => {
  return (
    <>
      <Header>
        {<Link to="/sing-in">Sing IN page</Link>}
      </Header>
      <h1>U are in SingUP page</h1>
    </>
  );
};

export default SingUnPage;
