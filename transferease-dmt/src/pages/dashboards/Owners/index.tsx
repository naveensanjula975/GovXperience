import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import Projects from './Projects';

// dummy data
import { projectDetails } from './data';

const Owners = () => {
    // set pagetitle
    usePageTitle({
        title: 'Owners',
        breadCrumbItems: [
            {
                path: '/owners',
                label: 'Owners',
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

export default Owners;
