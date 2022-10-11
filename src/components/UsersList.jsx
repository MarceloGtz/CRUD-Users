import { Button, Card, Col, Row } from 'react-bootstrap';
import './UsersList.css';

const UsersList = ({ usersList }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className='g-3'>
      {usersList.map(user => (
        <Col key={user.id}>
          <Card>
            <Card.Body>
              <Card.Title>
                {user.first_name} {user.last_name}
                <hr />
              </Card.Title>
              <Card.Text>
                <span className='Card__Subtitle'>EMAIL</span> <br />{' '}
                {user.email} <br /> <br />{' '}
                <span className='Card__Subtitle'>BIRTHDAY</span> <br />{' '}
                <i className='fa-solid fa-cake-candles'> </i>
                {' ' + user.birthday}
              </Card.Text>
              <div className='UsersList__Button'>
                <Button variant='light'>
                  <i className='fa-solid fa-pencil'></i>
                </Button>
                <Button variant='danger'>
                  <i className='fa-solid fa-trash-can'></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UsersList;
