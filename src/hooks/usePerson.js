import React, { useState, useEffect } from "react";
import axios from "axios";

const URI = 'http://localhost:3000/api/v1/person';
function usePerson() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data.length == 0) {
      getAll(index);
    } else {
      getItem(index);
    }
  }, [index])

  const getAll = async (i) => {
    const res = await axios.get(URI);
    const data = res.data
    setData(data);
    setItem(data[i]);
  };
  const getItem = (i) => {
    setItem(data[i]);
  }

  const after = () => {
    if (!data.length == 0) {
      index < (data.length - 1) ? setIndex(index + 1) : setIndex(0);
    }
  };

  const before = () => {
    if (!data.length == 0) {
      index >= 1 ? setIndex(index - 1) : setIndex((data.length - 1));
    }
  };
  return ({
    after,
    before,
    item
  });
}

export { usePerson };
