import React, { useState, useEffect } from "react";
import axios from "axios";

function usePerson() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    getAll(index);
    setData(data);
    console.log(data[index]);
  },[item, index])

  const getAll = async (i)=>{
    const res = await axios.get('http://localhost:3000/api/v1/person');
    const data = res.data
    setData(data);
    setItem(data[i]);
  };

  const after = () =>{
      if (!data.length==0) {
        index < (data.length - 1) ? setIndex(index + 1) :setIndex(0);
        getAll(index);
      }
    };
    
    const before = () =>{
    if (!data.length==0) {
      index >= 1 ? setIndex(index - 1) :setIndex((data.length - 1));
      getAll(index);
    }
  };
  return ({
    index,
    after,
    before,
    item
  });
}

export { usePerson };
