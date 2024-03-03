const getPizzaPrice = (price: number, size: number) => {
  switch (size) {
    case 26: {
      return price;
    }
    case 30: {
      return Math.floor(price * 1.3);
    }
    case 40: {
      return Math.floor(price * 1.8);
    }
  }
};

export default getPizzaPrice;
