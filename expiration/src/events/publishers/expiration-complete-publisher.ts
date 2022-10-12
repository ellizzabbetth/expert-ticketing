import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@elizabethtickets/common-v2";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
