export const productReducer = (
  state = { product: [], cart: [], details: [] },
  action
) => {
  if (action.type === "Add-products") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  if (action.type === "Add-Cart") {
    return { ...state, 
        cart: [{...action.data, key: state.cart.length},...state.cart ]};
  }
  if (action.type === "Selected-Item") {
    return { ...state, details: [action.data] };
  }
  if(action.type==="Remove-Item"){
      const filterProducts=state.cart.filter((item)=>item.key !==action.data.key
      );
      return{...state,cart:filterProducts}
  }
  return state;
};
