import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import history from '../modules/history/HistoryState';

export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  history,
});
