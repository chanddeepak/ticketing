import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from "@funprojects/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
