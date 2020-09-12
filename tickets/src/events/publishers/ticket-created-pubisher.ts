import { Publisher, Subjects, TicketCreatedEvent } from "@funprojects/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
