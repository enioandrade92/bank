import PropTypes from 'prop-types';
import { CircleContainer } from './styles';


export default function UserCircle({initials}) {
  return (
    <CircleContainer>
      {initials}
    </CircleContainer>
  )
}

UserCircle.propTypes = PropTypes.string.isRequired;
