import React, { useState, useEffect } from 'react';

const Merch = () => {

  return (
    <div className="content-container">

<article>
        <div className="article-heading">
          <h1>
            Merch
          </h1>
        </div>
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>
          --- Coming Soon! ---
        </h2>
        {/* <div className="article-heading">
          <h2>
            --- Coming Soon! ---
          </h2>
        </div> */}

      </article>

      <article>
        <div className='donate-section'>
          <p>
            Want to support us without also supporting your hoarding habit? Enter whatever amount you are comfortable with and then click "Donate"!
          </p>
          <stripe-buy-button
            buy-button-id="buy_btn_1NtMfxG2r3wfxV4350VIu2sM"
            publishable-key="pk_test_51Nt2OZG2r3wfxV43qN7tZnXdwMSpoRt7Mq4d8kcXSAlG2AU3MdC0XEJDxVmkFmkUyApjGAkEDaHETA3JJQQ5MYVC00nxESAYTZ"
          ></stripe-buy-button>
          
        </div>
      </article>

    </div>
  )

};

export default Merch;