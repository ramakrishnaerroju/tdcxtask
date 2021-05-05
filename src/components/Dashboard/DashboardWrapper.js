import React from "react";
import Dashboard from "./DashboardView";
import { size } from "lodash";

const DashboardWrapper = ({ data }) => {
  return <>{size(data) > 0 && <Dashboard data={data} />}</>;
};

export default DashboardWrapper;
