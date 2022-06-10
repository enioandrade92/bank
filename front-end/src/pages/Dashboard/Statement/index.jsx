import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import {
  StatementContainer,
  StatementItemContainer,
  StatementItemInfo,
  StatementItemImage,
} from './styles';
import { transactions } from '../../../services/resources/pix'

function StatementItemPay({requestingUser, value, updateAt}) {
  return (
    <StatementItemContainer>
      <StatementItemImage type='pay'>
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
          Pay to: <strong>{requestingUser}</strong>
        </p>
        <p>
          {updateAt.slice(0, 10)}
        </p> 
      </StatementItemInfo>  
    </StatementItemContainer>
  )
}

function StatementItemRequest({payingUser, value, updateAt}) {
  return (
    <StatementItemContainer>
      <StatementItemImage>
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
          Received from: <strong>{payingUser}</strong>
        </p>
        <p>
          {updateAt.slice(0, 10)}
        </p> 
      </StatementItemInfo>  
    </StatementItemContainer>
  )
}
export default function Statement({type}) {
  const [statementsPay, setStatementsPay] = useState([]);
  const [statementsRequest, setStatementsRequest] = useState([]);

  const getAllTransactions = async () => {
    const {paying, requesting} = await transactions();
    console.log(paying, requesting);
    setStatementsPay(paying);
    setStatementsRequest(requesting);
  };

  useEffect(() => {
    getAllTransactions();
  }, [])
  
  return ( 
    type === 'pay' ? (
      <StatementContainer>
        {statementsPay && statementsPay.map(item => <StatementItemPay {...item} />)}
    </StatementContainer>
    ) : (
      <StatementContainer>
        {statementsRequest && statementsRequest.map(item => <StatementItemRequest {...item} />)}
    </StatementContainer>
    )
  )
}

Statement.propTypes = {
  type: PropTypes.string.isRequired,
}

StatementItemPay.propTypes = {
  requestingUser: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  updateAt: PropTypes.string.isRequired,
}

StatementItemRequest.propTypes = {
  payingUser: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  updateAt: PropTypes.string.isRequired,
}

