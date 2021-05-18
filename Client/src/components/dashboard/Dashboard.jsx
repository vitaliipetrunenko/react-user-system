import React, { useEffect, useState } from "react";
import { getStats } from "../../apiCalls/apiCalls";
import styl from "./Dashboard.module.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    profiles: 0,
    matureProfiles: 0,
  });
  useEffect(() => {
    getStats().then((res) => {
      setStats({ users: res[0], profiles: res[1], matureProfiles: res[2] });
    });
  }, []);
  return (
    <div className={styl.Dashboard}>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div>
        Users:
        <br />
        <span>{stats.users}</span>
      </div>{" "}
      <div>
        Profiles:
        <br /> <span>{stats.profiles}</span>
      </div>{" "}
      <div>
        Profiles older than 18:
        <br /> <span>{stats.matureProfiles}</span>
      </div>
    </div>
  );
}
