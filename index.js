console.log("From index.js");

/* 
Store (shop in the case of a cakeshop which keeps all the cakes on the shelf) - Holds the state of your application
Action (intention to buy cake and reducing the count from available cakes) - Describes the changes in the state of the application
Reducer (Shopkeeper who gives the cake) - Ties the store and actions together and carries out the state transition depending on the action
*/

// Three Principles of Redux
/* 
- The state of your whole application is stored in an object tree within a signle store - Maintain your application state in a single object which would be managed by Redux store.
- The only way to change the state is to emit an action, an object describing what happened - To update the state of your app, you need to let Redux know about that with an action and not allowed to directly update the state.
- To specify how the state is transformed by actions, write pure reducers (functions) - Reducer - (previousState, action) => newState
*/