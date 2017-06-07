
let initialState = {
  account :{
     accountNo:222,
     balance:300,
     openAccount: true,

   }
   customer:{
     name:'person'
   }
}

const withdraw = 'WITHDRAW';
const deposit ='DEPOSIT';
const transferFunds ='TRANSFERFUNDS'
//ACTIONS
function withdrawAmount (amount) {
   const action ={
    type: "WITHDRAW",
    amount:amount
  }
  retunr {action.type,action.amount}

}
function depositAmount (amount) {
   const action ={
    type: "DEPOSIT",
    amount:amount
  }
  retunr {action.type,action.amount}

}

function transferFunds(amount, destinationAccount)  {
   const action ={
    type: "TRANSFERFUNDS",
    amount:amount,
    destinationAccount:destinationAccount
  }
  retunr {action.type,action.amount,action.destinationAccount}

}

function closingAccount(amount, destinationAccount)  {
   const action ={
    type: "closingAccount",
    amount:amount,
    destinationAccount:destinationAccount,
    openAccount:false
  }
  retunr {action.type,action.amount,action.destinationAccount}

}
