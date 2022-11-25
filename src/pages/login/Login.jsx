import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/apiCalls"
import { Link } from "react-router-dom"
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  LInk,
  Error,
  Guest,
} from "./Login.style"

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  })

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
            value={user.username}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <Agreement>
            By logging in, you agree to our
            <b> PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          <Guest
            onClick={() => setUser({ username: "guest", password: "123456" })}
          >
            GUEST CREDENTIALS
          </Guest>
          {error && <Error>Wrong credentials.</Error>}
          <LInk>DO NOT REMEMBER THE PASSWORD ?</LInk>
          <LInk>
            <Link to="/register">CREATE NEW ACCOUNT</Link>
          </LInk>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
