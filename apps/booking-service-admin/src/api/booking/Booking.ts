import { Attendee } from "../attendee/Attendee";
import { JsonValue } from "type-fest";
import { DailyEventReference } from "../dailyEventReference/DailyEventReference";
import { DestinationCalendar } from "../destinationCalendar/DestinationCalendar";
import { EventType } from "../eventType/EventType";
import { Payment } from "../payment/Payment";
import { BookingReference } from "../bookingReference/BookingReference";
import { User } from "../user/User";
import { WorkflowReminder } from "../workflowReminder/WorkflowReminder";

export type Booking = {
  attendees?: Array<Attendee>;
  cancellationReason: string | null;
  createdAt: Date;
  customInputs: JsonValue;
  dailyRef?: DailyEventReference | null;
  description: string | null;
  destinationCalendar?: DestinationCalendar | null;
  dynamicEventSlugRef: string | null;
  dynamicGroupSlugRef: string | null;
  endTime: Date;
  eventType?: EventType | null;
  fromReschedule: string | null;
  id: number;
  location: string | null;
  paid: boolean;
  payment?: Array<Payment>;
  recurringEventId: string | null;
  references?: Array<BookingReference>;
  rejectionReason: string | null;
  rescheduled: boolean | null;
  smsReminderNumber: string | null;
  startTime: Date;
  status?: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";
  title: string;
  uid: string;
  updatedAt: Date | null;
  user?: User | null;
  workflowReminders?: Array<WorkflowReminder>;
};
