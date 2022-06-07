import { Link, useNavigate } from 'react-router-dom'
import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import homeBank from '../../assets/images/homeBank.jpg';
import logoBank from '../../assets/images/logoBank.jpg';
import Card from '../../components/Card';
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function SignUp() {
  const navigate = useNavigate();
  const handleToSignIn = () => {
    navigate('/dashboard')
  }

  return(
    <Wrapper>
      <Background image={homeBank} />
      <Card width='403px'>
        <img src={logoBank} width={340} height={150} alt='logo bank'/>
        
        <InputContainer>
          <Input placeholder='First name'/>
          <Input placeholder='Last name'/>
          <Input placeholder='Email'/>
          <Input placeholder='Password' type='password'/>
          <Input placeholder='Confirm password' type='password'/>
        </InputContainer>
        <ButtonContainer>
          <Button type='button' onClick={handleToSignIn}>ENTRAR</Button>
          <p>Já tem uma conta? <Link to='/'> Faça o login </ Link></p>
        </ButtonContainer>
        
      </Card>
    </Wrapper>
  )
}
