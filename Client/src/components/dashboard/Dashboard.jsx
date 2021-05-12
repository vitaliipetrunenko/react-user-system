import React, { useEffect,useState } from 'react';
import styl from './Dashboard.module.css'

export function  getStats(){
  console.log("stage1")
  return fetch('/api/stats',{method:"POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body:null
}).then(data => 
      data.json())
}

export default function Dashboard() {
    const [stats,setStats]=useState({users:0,pofiles:0,matureProfiles:0});
    useEffect(()=>{
        //setStats()
        getStats().then(res =>{
            setStats({users:res[0],profiles:res[1],matureProfiles:res[2]});
            console.log({users:res[0],profiles:res[1],matureProfiles:res[2]})
        })
        

    },[])
  return(<div className={styl.Dashboard}>
  <div><h2>Dashboard Test</h2></div>
      <div>Users:<br/><span>{stats.users}</span></div>  <div>Profiles:<br/> <span>{stats.profiles}</span></div>  <div>Profiles older than 18:<br/> <span>{stats.matureProfiles}</span></div>
    
    </div>
  );
}