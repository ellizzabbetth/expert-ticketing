import { Publisher, OrderCreatedEvent, Subjects } from "@elizabethtickets/common-v2";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
