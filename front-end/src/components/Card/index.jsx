import PropTypes from 'prop-types';
import { CardContainer } from './styles';

export default function Card({
  children,
  width='100%',
  heigth='auto',
  noShadow=false,
}) {
  return(
    <CardContainer width={width} heigth={heigth} noShadown={noShadow}>
      {children}
    </CardContainer>
  )
}

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  width: PropTypes.string,
  heigth: PropTypes.string,
  noShadow: PropTypes.bool,
}

Card.defaultProps = {
  width: '100%',
  heigth: 'auto',
  noShadow: false,
}
