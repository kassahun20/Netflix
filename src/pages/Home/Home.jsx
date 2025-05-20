import React from "react";
import RowList from "../../components/Rowlist/RowList";
import Banner from "../../components/Banner/Banner";
import Layout from "../Layouts/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <RowList />
      </Layout>
    </>
  );
};

export default Home;
