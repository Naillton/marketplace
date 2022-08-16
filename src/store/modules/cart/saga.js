import { all, takeLatest, select, call, put, take } from 'redux-saga/effects';
import APi from '../../../services/api';
import formatValue from '../../../utils/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({id}) {
  // criando constante que recebe uma funcao select para saber se o produto existe
  // obs: o retorno da funcao e true ou false
  const productsExist = yield select((state) =>
  state.cart.find((product) => product.id === id)
  );

  const currentAmount = productsExist ? productsExist.amount : 0;
  const amount = currentAmount + 1;

  if (productsExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    // usando call para fazer chamada de api com redux saga
    const response = yield call(APi.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatValue(response.data.price),
    };
    // usando para fazer o insert dos dados disparando a action
    yield put(addToCartSuccess(data));
  }
};

function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
]);