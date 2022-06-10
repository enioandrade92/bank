import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import homeBank from '../../assets/images/homeBank.jpg';
import logoBank from '../../assets/images/logoBank.jpg';
import Card from '../../components/Card';
import Input from '../../components/Input'
import Button from '../../components/Button'


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { authSingIn } = useAuth();

  const handleToSignIn = async () => {
    const response = await authSingIn({email, password});
    if (response.id) {
      return navigate('/dashboard');
    }
    return alert(response);
  }

  return(
    <Wrapper>
      <Background image={homeBank} />
      <Card width='403px'>
        <img src={logoBank} width={340} height={150} alt='logo bank'/>
        
        <InputContainer>
          <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </InputContainer>
        <ButtonContainer>
          <Button type='button' onClick={handleToSignIn} >ENTRAR</Button>
          <p>Ainda não é cadastrado? <Link to='/signup'> Cadastre-se </ Link></p>
        </ButtonContainer>
        
      </Card>
    </Wrapper>
  )
}
