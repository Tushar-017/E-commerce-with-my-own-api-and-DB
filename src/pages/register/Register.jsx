import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Moto,
} from "./Register.style"

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>BECOME A NEW MEMBER</Title>
        <Moto>
          Create your ShopWings Member profile and get first access to the very
          best and Newly launched products.
        </Moto>
        <Form>
          <Input placeholder="Full Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my entered
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
