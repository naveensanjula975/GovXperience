import { Badge, Card, Dropdown, Table } from 'react-bootstrap';

// type
import { ProjectDetail } from './types';

type ProjectsProps = {
    projectDetails: ProjectDetail[];
};

const Projects = ({ projectDetails }: ProjectsProps) => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>View All</Dropdown.Item>
                        {/* <Dropdown.Item>Anothther Action</Dropdown.Item>
                        <Dropdown.Item>Something Else</Dropdown.Item>
                        <Dropdown.Item>Separated link</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mt-0 mb-3">Vehicle Transfers</h4>

                <Table responsive hover className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>ID Number</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(projectDetails || []).map((projectDetail, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{projectDetail.id}</td>
                                    <td>{projectDetail.name}</td>
                                    <td>{projectDetail.startDate}</td>
                                    <td>{projectDetail.dueDate}</td>
                                    <td>
                                        <Badge bg={projectDetail.variant}>{projectDetail.status}</Badge>
                                    </td>
                                    <td>{projectDetail.clients}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Projects;
