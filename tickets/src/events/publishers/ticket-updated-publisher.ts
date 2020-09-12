import { Publisher, Subjects, TicketUpdatedEvent } from "@funprojects/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
