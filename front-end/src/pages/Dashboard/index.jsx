import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Splitter from '../../components/Splitter';
import Statement from './Statement';
import { DashboardBackground, BodyContainer, InlineContainer, InlineTitle } from './styles'
import useAuth from '../../hooks/useAuth';
import { request, pay } from '../../services/resources/pix';

export default function Dashboard() {
  const [pixValue, setPixValue] = useState('');
  const [key, setKey] = useState('');
  const [keyPay, setKeyPay] = useState('');

  const { user, getCurrentUser } = useAuth();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const generateCode = async () => {
    const data = await request(+pixValue);
    if (data.message) return alert(data.message);
    return setKey(data.requestkey)
  }

  const payCode = async () => {
    const response = await pay(keyPay);
    return alert(response.message);
  }

  return (
    user.id ? (
      <DashboardBackground>
        <Header />
        <BodyContainer>
          <Splitter width='40vw'>
            <Card noShadow width='90%'>
              <InlineTitle>
                <h2>Current balance:</h2>
              </InlineTitle>
              <InlineContainer>
                <h3 className='balance'>
                  {user.wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
                </h3>
              </InlineContainer>
            </Card>
            <Card noShadow width='90%'>
              <InlineTitle>
                <h2>Receive pix</h2>
              </InlineTitle>
              <InlineContainer>
                <Input style={{flex: 1}} placeholder='Insert value' onChange={e => setPixValue(e.target.value)}/>
                <Button onClick={() => generateCode()}> Generate code</Button>
              </InlineContainer>
              {
                key ? (
                  <div>
                    <p>Copy the pix key: <i><b>{key}</b></i></p>
                  </div>
                ) : (
                  <br />
                )
              }
            </Card>
            <Card noShadow width='90%'>
              <InlineTitle>
                <h2>Pay pix</h2>
              </InlineTitle>
              <InlineContainer>
                <Input style={{flex: 1}} placeholder='Insert key' onChange={e => setKeyPay(e.target.value)} />
                <Button onClick={payCode}> Pay pix </Button>
              </InlineContainer>
            </Card>
          </Splitter>
          <Splitter width='22vw'>
            <Card noShadow width='90%'>
              <InlineTitle>
                <h2>Received</h2>
              </InlineTitle>
              <Statement />
            </Card>
          </Splitter>
          <Splitter width='22vw'>
            <Card noShadow width='90%'>
              <InlineTitle>
                <h2>Paid</h2>
              </InlineTitle>
              <Statement type='pay'/>
            </Card>
          </Splitter>
        </BodyContainer>
      </DashboardBackground>    
    ) : (
      <div>
        <h3><center>Loading...</center></h3>
      </div>
    )
  );

  


}
