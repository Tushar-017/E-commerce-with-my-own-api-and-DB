import { Send } from "@mui/icons-material"
import {
  Button,
  Container,
  Desc,
  Input,
  InputContainer,
  Title,
} from "./NewsLetter.style"

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely Updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
