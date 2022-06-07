import PropTypes from 'prop-types';
import { CardContainer } from './styles';

export default function Card({
  children,
  width='100%',
  heigth='auto',
  noShadow=false,
}) {
  return(
    <CardContainer width={width || '100%'} heigth={heigth} noShadown={noShadow}>
      {children}
    </CardContainer>
  )
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
  heigth: PropTypes.string,
  noShadow: PropTypes.bool,
}

Card.defaultProps = {
  width: '100%',
  heigth: 'auto',
  noShadow: false,
}
