import { Message } from "node-nats-streaming";
import {
  Listener,
  Subjects,
  OrderCreatedEvent,
  NotFoundError
} from "@funprojects/common";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const order = Order.build({
      id: data.id,
      status: data.status,
      price: data.ticket.price,
      version: data.version,
      userId: data.userId
    });

    await order.save();

    msg.ack();
  }
}
