import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [
        {
          // Here we have not used ObjectId because orderItems stores complete order item data,while ObjectId is used when we only store ids/references.
          type: orderItemSchema,
          required: true,
        },
      ],
      //   type:[orderItemSchema] //That could have been done like this also
    },
    address: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      // We have to provide some valid option, value could only be among these
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", orderSchema);
