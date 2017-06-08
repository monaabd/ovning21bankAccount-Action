//reducers
import {WITHDRAW,DEPOSIT,TRANSFERFUNDS,CLOSINGACCOUNT} from './ovning21bankAcountAxtion.js'

function reducer(state, action) {
  switch( action.type ) {
    case WITHDRAW:
      return {
              balance: state.balance- WITHDRAW.amount
            };
        case DEPOSIT:
            return {
              balance: state.balance + WITHDRAW.amount
            };
        case TRANSFERFUNDS:
            return {
              destinationAccount: TRANSFERFUNDS.destinationAccount,
              balance: state.balance- WITHDRAW.amount
            };
        case CLOSINGACCOUNT:
            return {
              openAccount:false;
            }
        default:
          return Object.assign({},state);
    }
}
export default rootReducer;
