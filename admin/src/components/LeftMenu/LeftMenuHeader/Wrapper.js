import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/logo-won-White.svg';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main.colors.won.blue};
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .projectName {
    display: block;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12rem;
  }
`;


export default Wrapper;
