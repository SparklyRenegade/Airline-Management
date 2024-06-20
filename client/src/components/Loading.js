// Loader.js
import React from 'react';
import '../CSS/Loading.css';

const Loading = ({ isLoading }) => (
  <div id="preloader" className={isLoading ? 'visible' : 'hidden'}>
    <div className="loader">
      <div className="wait">Veuillez patienter svp</div>
      <div className="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" className="plane-img" alt="Loading" />
      </div>
      <div className="earth-wrapper">
        <div className="earth"></div>
      </div>
    </div>
  </div>
);

export default Loading;
