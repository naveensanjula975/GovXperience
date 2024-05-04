import React from 'react';
import './Account.css';
import AccountHeader from './AccountHeader/AccountHeader';
import AcoountSideBar from './AcoountSideBar/AccountSideBar';
import AcoountDashboard from './AccountDashboard/AccountDashboard';

const Account = () => {
  return (
    <>
      < AccountHeader />
      <div className="accountBody">
        <div className="leftContainor">
            < AcoountSideBar />
        </div>
        <div className="rightContainor">
          <AcoountDashboard />
        </div>
      </div>
    </>
  )
}

export default Account