// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import StartScreenView from './StartScreenView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(StartScreenView);
