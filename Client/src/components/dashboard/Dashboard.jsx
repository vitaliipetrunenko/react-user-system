import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getStats } from "../../apiCalls/apiCalls";
import styl from "./Dashboard.module.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    profiles: 0,
    matureProfiles: 0,
  });
  const [areStatsLoading, setStatsLoading] = useState(false)//
  useEffect(() => {
    setStatsLoading(true)
    getStats().then((res) => {
      setStats({ users: res[0], profiles: res[1], matureProfiles: res[2] });
      setStatsLoading(false);//
    });
  }, []);
  return (
    <div className={styl.Dashboard}>
      <div className={styl.DashBox}>
        <h2>Dashboard</h2>
      </div>
      <div className={styl.DashBox}>
        Users:
        <br />
        <span>{areStatsLoading ? <CircularProgress/> : stats.users}</span>
      </div>{" "}
      <div className={styl.DashBox}>
        Profiles:
        <br /> <span>{areStatsLoading ? <CircularProgress/> : stats.profiles}</span>
      </div>{" "}
      <div className={styl.DashBox}>
        Profiles over 18:
        <br /> <span>{areStatsLoading ? <CircularProgress/> : stats.matureProfiles}</span>
      </div>
    </div>
  );
}

