// usando o immer para alterar o valor no redux de forma  segura e imutavel
import produce from 'immer';
// criando reducer passando os parametros necessarios para o funcionamento

export default cart = (state = [], actions) => {
  switch(actions.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { product } = actions;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const prodIndex = draft.findIndex((prod) => prod.id === actions.id);
        if (prodIndex >= 0) draft.splice(prodIndex, 1);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, (draft) => {
        const prodIndex = draft.findIndex((prod) => prod.id === actions.id);
        if (prodIndex >= 0) {
          draft[prodIndex].amount = Number(actions.amount)
        }
      })
    default:
      return state;
  }
}