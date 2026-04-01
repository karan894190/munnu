import { NextResponse } from 'next/server';

// Sample orders data for demonstration purposes
const orders = {
  '1': { id: '1', item: 'Product A', quantity: 1, status: 'shipped' },
  '2': { id: '2', item: 'Product B', quantity: 2, status: 'pending' },
};

// GET method to retrieve individual order
export async function GET(request, { params }) {
  const { orderId } = params;
  const order = orders[orderId];
  if (order) {
    return NextResponse.json(order, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Order not found' }, { status: 404 });
  }
}

// PATCH method to update individual order
export async function PATCH(request, { params }) {
  const { orderId } = params;
  const data = await request.json();
  const order = orders[orderId];
  if (order) {
    // Update order properties with data from request
    Object.assign(order, data);
    return NextResponse.json(order, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Order not found' }, { status: 404 });
  }
}