import React from 'react';
import './Account.css';
import AccountHeader from './AccountHeader/AccountHeader';
import AcoountSideBar from './AcoountSideBar/AccountSideBar';

const Account = () => {
  return (
    <>
      < AccountHeader />
      <div className="accountBody">
        <div className="leftContainor">
            < AcoountSideBar />
        </div>
        <div className="rightContainor">right</div>
      </div>
    </>
  )
}

export default Account