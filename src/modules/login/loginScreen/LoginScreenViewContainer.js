// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import LoginScreenView from './LoginScreenView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(LoginScreenView);
