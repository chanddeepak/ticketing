import { Subjects, Publisher, PaymentCreatedEvent } from "@funprojects/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
