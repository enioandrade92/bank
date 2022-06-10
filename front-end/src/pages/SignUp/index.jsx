import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import useAuth from '../../hooks/useAuth'
import homeBank from '../../assets/images/homeBank.jpg';
import logoBank from '../../assets/images/logoBank.jpg';
import Card from '../../components/Card';
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function SignUp() {
  const [dataCreate, setDataCreate] = useState({})
  const navigate = useNavigate();
  const { authSingUp } = useAuth();

  const handleToSignUp = async () => {
    if(dataCreate.password !== dataCreate.passwordC){
      return alert('Different passwords')  
    };

    delete dataCreate.passwordC;
    const response = await authSingUp(dataCreate);
    
    if (response.id) {
      return navigate('/dashboard');
    }
    return alert(response);
  };

  const handleDataCreate = (value) => {
    setDataCreate({ ...dataCreate, ...value })
  };


  return(
    <Wrapper>
      <Background image={homeBank} />
      <Card width='403px'>
        <img src={logoBank} width={340} height={150} alt='logo bank'/>
        
        <InputContainer>
          <Input placeholder='First name' onChange={e => handleDataCreate({firstName: e.target.value})}/>
          <Input placeholder='Last name' onChange={e => handleDataCreate({lastName: e.target.value})}/>
          <Input placeholder='Email' onChange={e => handleDataCreate({email: e.target.value})}/>
          <Input placeholder='Password' type='password' onChange={e => handleDataCreate({password: e.target.value})}/>
          <Input placeholder='Confirm password' type='password' onChange={e => handleDataCreate({passwordC: e.target.value})}/>
        </InputContainer>
        <ButtonContainer>
          <Button type='button' onClick={handleToSignUp}>ENTRAR</Button>
          <p>Já tem uma conta? <Link to='/'> Faça o login </ Link></p>
        </ButtonContainer>
        
      </Card>
    </Wrapper>
  )
}
