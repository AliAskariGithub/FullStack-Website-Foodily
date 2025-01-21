import { defineField, defineType } from 'sanity';
import { BsBoxes } from "react-icons/bs";

export const Orders = defineType({
  name: 'order',
  type: 'document',
  title: 'Order',
  icon: BsBoxes,
  fields: [
    defineField({
      name: 'orderId',
      type: 'string',
      title: 'Order ID',
    }),
    defineField({
      name: 'customer',
      type: 'object',
      title: 'Customer Information',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Customer Name',
          description: 'Name of the customer who placed the order',
        }),
        defineField({
          name: 'email',
          type: 'string',
          title: 'Customer Email',
          description: 'Email address of the customer',
        }),
        defineField({
          name: 'phone',
          type: 'string',
          title: 'Customer Phone Number',
          description: 'Contact number of the customer',
        }),
        defineField({
          name: 'address',
          type: 'text',
          title: 'Customer Address',
          description: 'Complete address of the customer',
        }),
      ],
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Ordered Items',
      of: [
        defineField({
          name: 'item',
          type: 'object',
          title: 'Item',
          fields: [
            defineField({
              name: 'food',
              type: 'reference',
              to: [{ type: 'food' }],
              title: 'Food Item',
              description: 'Reference to the food item in the Food schema',
            }),
            defineField({
              name: 'quantity',
              type: 'number',
              title: 'Quantity',
              description: 'Number of units ordered for this item',
            }),
            defineField({
              name: 'price',
              type: 'number',
              title: 'Price',
              description: 'Price of the item at the time of order',
            }),
            defineField({
              name: 'notes',
              type: 'string',
              title: 'Special Instructions',
              description: 'Special instructions or preferences for this item',
            }),
          ],
        }),
      ],
      description: 'List of food items ordered by the customer',
    }),
    defineField({
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount',
    }),
    defineField({
      name: 'discount',
      type: 'number',
      title: 'Discount',
    }),
    defineField({
      name: 'tax',
      type: 'number',
      title: 'Tax',
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Order Status',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'In Progress', value: 'in_progress' },
          { title: 'Out for Delivery', value: 'out_for_delivery' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      description: 'Current status of the order',
    }),
    defineField({
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date',
    }),
    defineField({
      name: 'deliveryDetails',
      type: 'object',
      title: 'Delivery Details',
      fields: [
        defineField({
          name: 'deliveryAddress',
          type: 'text',
          title: 'Delivery Address',
          description: 'Address where the order needs to be delivered',
        }),
        defineField({
          name: 'deliveryTime',
          type: 'datetime',
          title: 'Expected Delivery Time',
          description: 'Time by which the order is expected to be delivered',
        }),
        defineField({
          name: 'deliveryStatus',
          type: 'string',
          title: 'Delivery Status',
          options: {
            list: [
              { title: 'Preparing', value: 'preparing' },
              { title: 'Out for Delivery', value: 'out_for_delivery' },
              { title: 'Delivered', value: 'delivered' },
              { title: 'Failed', value: 'failed' },
            ],
          },
          description: 'Current status of the delivery',
        }),
      ],
    }),
    defineField({
      name: 'paymentDetails',
      type: 'object',
      title: 'Payment Details',
      fields: [
        defineField({
          name: 'paymentMethod',
          type: 'string',
          title: 'Payment Method',
          options: {
            list: [
              { title: 'Cash on Delivery', value: 'cod' },
              { title: 'Online Payment', value: 'online' },
            ],
          },
          description: 'Mode of payment for the order',
        }),
        defineField({
          name: 'paymentStatus',
          type: 'string',
          title: 'Payment Status',
          options: {
            list: [
              { title: 'Pending', value: 'pending' },
              { title: 'Paid', value: 'paid' },
              { title: 'Failed', value: 'failed' },
            ],
          },
          description: 'Current status of the payment',
        }),
        defineField({
          name: 'transactionId',
          type: 'string',
          title: 'Transaction ID',
          description: 'Unique ID for the payment transaction',
        }),
      ],
    }),
  ],
});
