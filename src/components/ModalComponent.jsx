import axios from 'axios';
import { Col, Form, Row, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './ModalComponent.css';

const ModalComponent = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const submit = data => {
    axios
      .post('https://users-crud1.herokuapp.com/users/', data)
      .catch(err => err.response);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='main'>
        <h1>
          <i className='fa-solid fa-users'></i> <span> Users</span>
        </h1>

        <Button variant='primary' onClick={handleShow}>
          <i className='fa-solid fa-user-plus'></i>
          <span> Create user</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  autoFocus
                  required
                  type='text'
                  placeholder='Enter First Name'
                  {...register('first_name')}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter Last Name'
                  {...register('last_name')}
                />
              </Form.Group>
            </Row>
            <Form.Group className='mb-3' controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type='email'
                placeholder='Example@mail.com'
                {...register('email')}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Enter Password'
                {...register('password')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGridBirthday'>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                required
                type='date'
                placeholder='Enter Birthday'
                {...register('birthday')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='success'
            type='submit'
            onClick={handleSubmit(submit)}
          >
            <i className='fa-solid fa-floppy-disk'></i> <span> Save</span>
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            <i className='fa-solid fa-xmark'></i> <span> Close</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
