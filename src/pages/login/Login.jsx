import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Link,
} from "./Login.style"

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR ONE ACCOUNT FOR EVERYTHING !</Title>

        <Form>
          <Input placeholder="Username" />

          <Input placeholder="Password" />

          <Agreement>
            By logging in, you agree to our
            <b> PRIVACY POLICY</b>
          </Agreement>
          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD ?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
