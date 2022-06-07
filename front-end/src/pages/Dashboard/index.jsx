import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Statement from './Statement';
import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from './styles'

export default function Dashboard() {
  const wallet = 5000;

  return(
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2>Current balance:</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className='balance'>
                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
              </h3>
            </InlineContainer>
          </Card>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2>Receive pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex: 1}} placeholder='Insert value' />
              <Button> Generate code</Button>
            </InlineContainer>
            <p>pix copie e cole</p>
            <p>keyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</p>
          </Card>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2>Pay pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex: 1}} placeholder='Insert key' />
              <Button> Pay pix </Button>
            </InlineContainer>
          </Card>
        </div>
        <div>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2>Account statement</h2>
            </InlineTitle>
          <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )
}
