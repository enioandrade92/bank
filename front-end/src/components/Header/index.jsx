import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';
import UserCircle from '../UserCircle';
import logoBank from '../../assets/images/logoBank.jpg';

export default function Header(){
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogOut = () => {
    localStorage.setItem('@Bank:Token', '')
    navigate('/');
  }

  if (!user.firstName) handleLogOut();
  const initials = user.firstName.substr(0,1) + user.lastName.substr(0,1);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <a href="#" onClick={handleLogOut}>
          <img src={logoBank} width={172} height={61} alt='logo bank' />
        </a>
        <UserInfo>
          <UserCircle initials={initials || handleLogOut}/>
          <div>
            <p> Olá. <span><strong>{user.firstName} {user.lastName}</strong></span></p>
            <p>{user.accountNumber}-{user.accountDigit}</p>
            <a href="#" onClick={handleLogOut}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer> 
  )
};
