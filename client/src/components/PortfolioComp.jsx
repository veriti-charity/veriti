import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { useMutation } from "@apollo/client";
// import { ALL_CHARITIES } from "../utils/queries";
// import { SAVE_CHARITY } from "../utils/mutations";
// import CardNoCTA from "./CardNoCTA";
import { useQuery } from "@apollo/client";
import EmptyState from "./EmptyState";
import CardSaved from "../components/CardSaved";
import { QUERY_ME } from "../utils/queries";

const Portfolio = () => {
  // checking user has saved user charities or not
  const { data } = useQuery(QUERY_ME);
// Changed this from data == 0  (data was undefined)
  if (!data) {
    return (
      <div className="">
        <EmptyState />
      </div>
    );
  } else {
    // if user has saved charities then it's dispalyed on card saved component
    return (
      <div className="">
        <CardSaved />
      </div>
    );
  }
};

export default Portfolio;
