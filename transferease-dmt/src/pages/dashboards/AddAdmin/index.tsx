import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import Projects from './Projects';

// dummy data
import { projectDetails } from './data';

const AddAdmin = () => {
    usePageTitle({
        title: 'AddAdmin',
        breadCrumbItems: [
            {
                path: '/add-admin',
                label: 'AddAdmin',
                active: true,
            },
        ],
    });

    return (
        <>

            <Row>
                
                <Col xl={12}>
                    <Projects projectDetails={projectDetails} />
                </Col>
                
            </Row>

           
        </>
    );
};

export default AddAdmin;
