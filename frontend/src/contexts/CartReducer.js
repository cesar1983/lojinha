import { updatedObject } from "./utils";

const addOrderItem = (state, payload) => {
  let changedOrderItems = [...state.orderItems];
  const prodOrderIndex = changedOrderItems.findIndex(
    (item) => item.id === payload.id
  );
  if (prodOrderIndex >= 0) {
    changedOrderItems[prodOrderIndex].orderQuantity++;
  } else {
    const prodInfo = { ...payload };
    prodInfo.orderQuantity = 1;
    changedOrderItems.push(prodInfo);
  }
  return updatedObject(state, {
    orderItems: changedOrderItems,
  });
};

const removeOrderItem = (state, payload) => {
  let changedOrderItems = [...state.orderItems];
  const prodOrderIndex = state.orderItems.findIndex(
    (item) => item.id === payload.id
  );
  if (prodOrderIndex >= 0) {
    changedOrderItems[prodOrderIndex].orderQuantity--;
  }
  if (changedOrderItems[prodOrderIndex].orderQuantity === 0) {
    changedOrderItems.splice(prodOrderIndex, 1);
  }

  return updatedObject(state, {
    orderItems: changedOrderItems,
  });
};

const clearCart = (state) => {
  return updatedObject(state, {
    orderItems: [],
  });
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return addOrderItem(state, action.payload);

    case "REMOVE_ITEM":
      return removeOrderItem(state, action.payload);

    case "CLEAR_CART":
      return clearCart(state);

    default:
      return state;
  }
};
