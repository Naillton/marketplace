import { all } from 'redux-saga/effects';

import cart from './modules/cart/saga';

export default function* rootSaga() {
  return yield all([cart]);
}