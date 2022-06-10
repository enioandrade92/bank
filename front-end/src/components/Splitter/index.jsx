import PropTypes from 'prop-types';
import { SplitterContainer } from './styles';

export default function Splitter({children, width='auto'}) {
  return (
    <SplitterContainer width={width}>
      {children}
    </SplitterContainer>
  )
}

Splitter.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
}
