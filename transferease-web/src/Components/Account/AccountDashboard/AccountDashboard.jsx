import React from 'react';
import './AccountDashboard.css';
import RequestCard from './RequestCard/RequestCard';
import InvitationCard from './InvitationCard/InvitationCard';

const AccountDashboard = () => {
  return (
    <div>
      <div className="requestSection">
        < RequestCard />
        < RequestCard />
        < RequestCard />
        < RequestCard />
        < RequestCard />
      </div>
      <div className="invitationSection">
        < InvitationCard />
      </div>
    </div>
  )
}

export default AccountDashboard