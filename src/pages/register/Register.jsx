import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../redux/apiCalls"
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Moto,
  Error,
} from "./Register.style"

const Register = () => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(user)
    register(dispatch, user)
  }
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
          <Input
            placeholder="Username"
            name="username"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <Input
            placeholder="Email"
            name="email"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <Input
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my entered
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleLogin} disabled={isFetching}>
            JOIN
          </Button>
          {error && <Error>Something went wrong.</Error>}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
