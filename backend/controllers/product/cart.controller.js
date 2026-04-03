import Cart from "../../models/product/cart.model.js";

// export const addToCart = async (req, res) => {
//   try {
//     const { guestId, item } = req.body;

//     let cart = await Cart.findOne({ guestId });

//     // 🧮 Calculate total price
//     const itemTotal = item.basePrice * item.quantity;

//     if (!cart) {
//       cart = new Cart({
//         guestId,
//         items: [{ ...item, totalPrice: itemTotal }],
//         totalAmount: itemTotal,
//       });
//     } else {
//       cart.items.push({ ...item, totalPrice: itemTotal });

//       cart.totalAmount = cart.items.reduce(
//         (sum, i) => sum + i.totalPrice,
//         0
//       );
//     }

//     await cart.save();

//     res.json({ success: true, cart });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

export const checkoutCart = async (req, res) => {
  try {
    const { guestId, items, totalAmount } = req.body;

    let cart = await Cart.findOne({ guestId });

    if (!cart) {
      cart = new Cart({
        guestId,
        items,
        totalAmount,
      });
    } else {
      cart.items = items;
      cart.totalAmount = totalAmount;
    }

    await cart.save();

    res.json({
      success: true,
      message: "Checkout successful",
      cart,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const { guestId } = req.params;

    const cart = await Cart.findOne({ guestId });

    res.json({
      success: true,
      cart: cart || { items: [], totalAmount: 0 },
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

export const AllCart = async (req, res) => {
  try {

    const cart = await Cart.find();

    res.json({
      success: true,
      cart: cart || { items: [], totalAmount: 0 },
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};


export const removeFromCart = async (req, res) => {
  try {
    const { guestId, index } = req.body;

    const cart = await Cart.findOne({ guestId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items.splice(index, 1);

    cart.totalAmount = cart.items.reduce(
      (sum, i) => sum + i.totalPrice,
      0
    );

    await cart.save();

    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

export const updateQuantity = async (req, res) => {
  try {
    const { guestId, index, quantity } = req.body;

    const cart = await Cart.findOne({ guestId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items[index];

    item.quantity = quantity;
    item.totalPrice = item.basePrice * quantity;

    cart.totalAmount = cart.items.reduce(
      (sum, i) => sum + i.totalPrice,
      0
    );

    await cart.save();

    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};


export const clearCart = async (req, res) => {
  try {
    const { guestId } = req.body;

    await Cart.findOneAndDelete({ guestId });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};