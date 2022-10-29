import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum RoomStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}

type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTicket = {
  readonly id: string;
  readonly title: string;
  readonly room?: Room | null;
  readonly status: RoomStatus | keyof typeof RoomStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketRoomId?: string | null;
}

type LazyTicket = {
  readonly id: string;
  readonly title: string;
  readonly room: AsyncItem<Room | undefined>;
  readonly status: RoomStatus | keyof typeof RoomStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketRoomId?: string | null;
}

export declare type Ticket = LazyLoading extends LazyLoadingDisabled ? EagerTicket : LazyTicket

export declare const Ticket: (new (init: ModelInit<Ticket, TicketMetaData>) => Ticket) & {
  copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket, TicketMetaData>) => MutableModel<Ticket, TicketMetaData> | void): Ticket;
}

type EagerRoom = {
  readonly id: string;
  readonly title: string;
  readonly status: RoomStatus | keyof typeof RoomStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoom = {
  readonly id: string;
  readonly title: string;
  readonly status: RoomStatus | keyof typeof RoomStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Room = LazyLoading extends LazyLoadingDisabled ? EagerRoom : LazyRoom

export declare const Room: (new (init: ModelInit<Room, RoomMetaData>) => Room) & {
  copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}