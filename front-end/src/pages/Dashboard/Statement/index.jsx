import PropTypes from 'prop-types';
import { format }from 'date-fns';
import { FiDollarSign } from 'react-icons/fi'
import {
  StatementContainer,
  StatementItemContainer,
  StatementItemInfo,
  StatementItemImage,
} from './styles';


function StatementItem({user, value, type, updateAt}) {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size='30px'/>
      </StatementItemImage>
      <StatementItemInfo>
        <p>
          {value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <p>
          {type === 'pay' ? 'Pay to: ' : 'Received from: '}
          <strong>{user.firstName} {user.lastName}</strong>
        </p>
        <p>
          {format(updateAt, "dd/MM/yyyy 'às' HH:mm")}
        </p> 
      </StatementItemInfo>
    </StatementItemContainer>
  )
}
export default function Statement() {
  const statements = [
    {
      user:{
        firstName: 'Enio',
        lastName: 'Andrade',
      },
      value: 250.00,
      type: 'pay',
      updateAt: new Date(),
    },
    {
      user:{
        firstName: 'Priscilla',
        lastName: 'Quites',
      },
      value: 560.00,
      type: 'received',
      updateAt: new Date(),
    }
  ];
  
  return (
    <StatementContainer>
      {statements.map(item => <StatementItem {...item} />)}
    </StatementContainer>
  )
}

StatementItem.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  updateAt: PropTypes.string.isRequired,
}
