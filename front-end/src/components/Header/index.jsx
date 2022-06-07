import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';
import UserCircle from '../UserCircle';
import logoBank from '../../assets/images/logoBank.jpg';

export default function Header(){
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/');
  }
  const initials = 'EA'
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoBank} width={172} height={61} alt='logo bank' />
        <UserInfo>
          <UserCircle initials={initials}/>
          <div>
            <p> Olá. <span>Enio</span></p>
            <a href="#" onClick={handleLogOut}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
};
