import PropTypes from 'prop-types';
import { ButtonContainer } from './styles'

export default function Button(props) {
  return (
    <ButtonContainer {...props}>
      {props.children}
    </ButtonContainer>
  )
}


Button.propTypes = {
  children: PropTypes.string.isRequired,
}
