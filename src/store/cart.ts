import { create } from "zustand";

let timeOut: NodeJS.Timeout;

type Item = {
  id: string;
  name: string;
  price: number;
  itemCount: number;
};

type CartState = {
  totalItems: number;
  cartItems: Item[];
  totalcost: number;
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
};

export const useCartStore = create<CartState>((set) => ({
  totalItems: 0,
  cartItems: [],
  totalcost: 0,
  
  

  addToCart: (item: Item) => {
    set((state) => {
      const itemExists = state.cartItems.some((cartItem) => cartItem.id === item.id);

      return {
        totalItems: state.totalItems + 1,
        totalcost: state.totalcost + item.price,
        cartItems: itemExists
          ? state.cartItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, itemCount: cartItem.itemCount + 1 }
                : cartItem
            )
          : [...state.cartItems, { ...item, itemCount: 1 }],
      };
    });


    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      console.log("Updating your cart items...");
  
    }, 1000);
  },

  removeFromCart: (item: Item) => {
    set((state) => {

      const newCartItems = state.cartItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, itemCount: cartItem.itemCount - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.itemCount > 0);

      return {
        totalItems: Math.max(0, state.totalItems - 1),
        totalcost: state.totalcost - item.price,
        cartItems: newCartItems,
      };
    });


    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      console.log("Updating your cart items...");
    
    }, 1000);
  },
}));
