import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum StoryPoint {
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P5 = "P5",
  P8 = "P8",
  P13 = "P13",
  P20 = "P20"
}

export enum RoomStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}

type EstimationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerEstimation = {
  readonly id: string;
  readonly point?: StoryPoint | keyof typeof StoryPoint | null;
  readonly Ticket?: Ticket | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly estimationTicketId?: string | null;
}

type LazyEstimation = {
  readonly id: string;
  readonly point?: StoryPoint | keyof typeof StoryPoint | null;
  readonly Ticket: AsyncItem<Ticket | undefined>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly estimationTicketId?: string | null;
}

export declare type Estimation = LazyLoading extends LazyLoadingDisabled ? EagerEstimation : LazyEstimation

export declare const Estimation: (new (init: ModelInit<Estimation, EstimationMetaData>) => Estimation) & {
  copyOf(source: Estimation, mutator: (draft: MutableModel<Estimation, EstimationMetaData>) => MutableModel<Estimation, EstimationMetaData> | void): Estimation;
}

type EagerTicket = {
  readonly id: string;
  readonly title: string;
  readonly Room?: Room | null;
  readonly status: RoomStatus | keyof typeof RoomStatus;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketRoomId?: string | null;
}

type LazyTicket = {
  readonly id: string;
  readonly title: string;
  readonly Room: AsyncItem<Room | undefined>;
  readonly status: RoomStatus | keyof typeof RoomStatus;
  readonly owner?: string | null;
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
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoom = {
  readonly id: string;
  readonly title: string;
  readonly status: RoomStatus | keyof typeof RoomStatus;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Room = LazyLoading extends LazyLoadingDisabled ? EagerRoom : LazyRoom

export declare const Room: (new (init: ModelInit<Room, RoomMetaData>) => Room) & {
  copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}