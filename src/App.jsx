import ModalComponent from './components/ModalComponent';
import UsersList from './components/UsersList';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data));
  }, []);

  return (
    <Container className='mt-3'>
      <ModalComponent />
      <br />
      <UsersList usersList={usersList} />
    </Container>
  );
};

export default App;
