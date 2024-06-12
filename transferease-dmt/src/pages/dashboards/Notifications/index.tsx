import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

const Notifications = () => {
    usePageTitle({
        title: 'Notifications',
        breadCrumbItems: [
            {
                path: '/notifications',
                label: 'Notifications',
                active: true,
            },
        ],
    });

    return (
        <>

            
            
        </>
    );
};

export default Notifications;
