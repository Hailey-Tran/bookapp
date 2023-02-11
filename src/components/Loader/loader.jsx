import React from 'react';
import LoaderImg from "../../images/loading.gif";
import "./loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoaderImg} alt = 'loader' />
    </div>
  )
}

export default Loader