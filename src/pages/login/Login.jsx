import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/apiCalls"
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Link,
  Error,
} from "./Login.style"

const Login = () => {
  const [user, setUser] = useState({})

  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(user)
    login(dispatch, user)
  }

  return (
    <Container>
      <Wrapper>
        <Title>YOUR ONE ACCOUNT FOR EVERYTHING !</Title>

        <Form>
          <Input
            placeholder="Username"
            name="username"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />

          <Agreement>
            By logging in, you agree to our
            <b> PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Wrong credentials.</Error>}
          <Link>DO NOT REMEMBER THE PASSWORD ?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
