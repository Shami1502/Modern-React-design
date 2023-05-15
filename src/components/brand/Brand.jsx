import React from 'react';
import "./brand.css";
import { google,slack, atlassia, shopify,dropbox } from './import';


const Brand = () => {
  return (
    <div className='gbt__brand section__padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={shopify} alt='shopify' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={slack} alt='slack' />
      </div>
      <div>
        <img src={atlassia} alt='atlassia' />
      </div>
    </div>
  )
}

export default Brand