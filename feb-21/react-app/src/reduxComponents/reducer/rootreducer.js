const intialState = {
  groceryList: [
    {
      id: 1,
      name: "Strawberry",
    },
    {
      id: 2,
      name: "Orange",
    },
    {
      id: 3,
      name: "Banana",
    },
    {
      id: 4,
      name: "Apple",
    },
    {
      id: 5,
      name: "Carrot",
    },
    {
      id: 6,
      name: "Celery",
    },
    {
      id: 7,
      name: "Mushroom",
    },
    {
      id: 8,
      name: "Green Pepper",
    },
    {
      id: 9,
      name: "Eggs",
    },
    {
      id: 10,
      name: "Cheese",
    },
    {
      id: 11,
      name: "Butter",
    },
    {
      id: 12,
      name: "Chicken",
    },
    {
      id: 13,
      name: "Beef",
    },
    {
      id: 14,
      name: "Pork",
    },
    {
      id: 15,
      name: "Fish",
    },
    {
      id: 16,
      name: "Rice",
    },
    {
      id: 17,
      name: "Pasta",
    },
    {
      id: 18,
      name: "Bread",
    },
    {
      id: 19,
      name: "Blueberry",
    },
  ],
  basketList: [],
  all: true,
  pending: false,
  purchased: false,
};
const rootReducer = (state = intialState, action) => {
  if (action.type === "itemclick") {
    if (state.basketList.length === 0) {
      const grocerItem = {
        number: 1,
        name: action.payload.name,
        id: action.payload.id,
        isChecked: false,
      };
      const basketList = [...state.basketList, grocerItem];
      //   {...state.basketList,grocerItem};

      return { ...state, basketList };
    } else if (
      state.basketList.find((eachItem) => {
        return eachItem.id === action.payload.id;
      })
    ) {
      const newBasketList = state.basketList.map((eachob) => {
        if (eachob.id === action.payload.id) {
          return { ...eachob, number: eachob.number + 1 };
        }
        return eachob;
      });
      state.basketList = [...newBasketList];
      return { ...state };
    } else {
      const grocerItem = {
        number: 1,
        name: action.payload.name,
        id: action.payload.id,
        isChecked: false,
      };
      state.basketList = [...state.basketList, grocerItem];

      return { ...state };
    }
  } else if (action.type === "delete") {
    state.basketList = [];
    return { ...state };
  } else if (action.type === "basketitemclick") {
    const modifiedBasketList = state.basketList.map((eachItem) => {
      if (eachItem.id === action.payload) {
        return { ...eachItem, isChecked: !eachItem.isChecked };
      }
      return eachItem;
    });
    state.basketList = modifiedBasketList;
    return { ...state };
  } else if (action.type === "allclick") {
    return { ...state, all: true, pending: false, purchased: false };
  } else if (action.type === "pendingclick") {
    return { ...state, all: false, pending: true, purchased: false };
  } else if (action.type === "purchasedclick") {
    return { ...state, all: false, pending: false, purchased: true };
  }

  return state;
};

export default rootReducer;
