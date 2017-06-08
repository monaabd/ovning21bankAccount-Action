//reducers
import {WITHDRAW,DEPOSIT,TRANSFERFUNDS,CLOSINGACCOUNT} from './ovning21bankAcountAxtion.js'

function reducer(state, action) {
  switch( action.type ) {
    case WITHDRAW:
      return {
              balance: state.balance- action.amount
            };
        case DEPOSIT:
            return {
              balance: state.balance + action.amount
            };
        case TRANSFERFUNDS:
            return {
              destinationAccount: TRANSFERFUNDS.destinationAccount,
              balance: state.balance- action.amount
            };
        case CLOSINGACCOUNT:
            return {
              openAccount:action.openAccount;
            }
        default:
          return Object.assign({},state);
    }
}
export default rootReducer;
