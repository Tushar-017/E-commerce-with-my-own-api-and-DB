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
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>YOUR ONE ACCOUNT FOR EVERYTHING !</Title>

        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
