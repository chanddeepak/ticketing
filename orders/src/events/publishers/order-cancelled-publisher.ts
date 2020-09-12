import { Publisher, OrderCancelledEvent, Subjects } from "@funprojects/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
