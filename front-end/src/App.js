import React, { Component } from "react";
import axios from 'axios';
import {useEffect, useState} from "react";
import './App.css';
import Table1 from "./components/Table1"
import { useLayoutEffect, useRef} from 'react'



// let role = "manager";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

function App() {
  let [dataTable, setDataTable] = useState([]);
    useEffect(()=>{
    getUsers()
  }, []);
  const getUsers=()=>{
    axios({method:'get',url:'http://localhost:1212/test.php', withCredentials: false}   )
    .then(res=>setDataTable(res.data))
    .catch(err=> console.log(err))
  }
  const columns = [
    {heading: "ID", value : "id"},
    {heading: "Créateur", value : "Createur"},
    {heading: "Position demandé", value : "Postion"},
    {heading: "Date de travail", value : "Date"},
    {heading: "status", value : "status"},
    {heading: "Action"}, 
  
  ]
  // const checkbox = useRef()
  // const [checked, setChecked] = useState(false)
  // const [indeterminate, setIndeterminate] = useState(false)
  // const [selectedColumn, setSelectedColumn] = useState([])

  // useLayoutEffect(() => {
  //   const isIndeterminate = selectedColumn.length > 0 && selectedColumn.length < column.length
  //   setChecked(selectedColumn.length === column.length)
  //   setIndeterminate(isIndeterminate)
  //   checkbox.current.indeterminate = isIndeterminate
  // }, [selectedColumn])

  // function toggleAll() {
  //   setSelectedPeople(checked || indeterminate ? [] : column)
  //   setChecked(!checked && !indeterminate)
  //   setIndeterminate(false)
  // }

  return (
    <div className="App">
      <Table1 data={dataTable} column={columns} />
     
    </div>
  );
}

export default App;
