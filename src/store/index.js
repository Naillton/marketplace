// aqui no nosso arquivo inde inicial o redux-saga vai ficar escutando
// tudo que ira ser disponibilizado para o redux e se algo estuver errado
// ele barra para nao chegar no redux
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;