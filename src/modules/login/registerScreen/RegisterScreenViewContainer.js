// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import RegisterScreenView from './RegisterScreenView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(RegisterScreenView);
