import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate('/');
  };
  return (
    <Container>
      <Form inline onSubmit={handleSubmit}>
        <br />
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="your email"
            type="email"
          />
        </FormGroup>
        <br />
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="your password"
            type="password"
          />
        </FormGroup>
        <br />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
