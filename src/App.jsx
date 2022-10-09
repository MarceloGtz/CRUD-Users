import ModalComponent from './components/ModalComponent';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data))
      .finally(() => console.log('Response Finalized'));
  }, []);

  console.log('Users List: ', usersList);

  return (
    <div className='App'>
      {/* MODAL COMPONENT */}
      <ModalComponent />

      {/* USERS LIST */}
      <section>
        <ul>
          {usersList.map(user => (
            <li key={user.id}>
              <div>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>Correo:</p>
                <p>{user.email}</p>
                <p>Birthday:</p>
                <p>{user.birthday}</p>
              </div>
              <div>
                <Button variant='primary'>
                  <i className='fa-solid fa-pencil'></i>
                </Button>
                <Button variant='danger'>
                  <i className='fa-solid fa-trash-can'></i>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
