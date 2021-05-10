import React, { useEffect,useState } from 'react';
import { getStats } from '../../App';

export default function Dashboard() {
    const [stats,setStats]=useState({users:0,pofiles:0,matureProfiles:0});
    useEffect(()=>{
        //setStats()
        getStats().then(res =>{
            setStats({users:res[0],profiles:res[1],matureProfiles:res[2]});
        })
        

    },[])
  return(<div>
  <h2>Dashboard</h2>
      Users: {stats.users}, Profiles: {stats.profiles}, Profiles older than 18: {stats.matureProfiles}
    
    </div>
  );
}