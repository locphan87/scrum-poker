// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StoryPoint = {
  "P1": "P1",
  "P2": "P2",
  "P3": "P3",
  "P5": "P5",
  "P8": "P8",
  "P13": "P13",
  "P20": "P20"
};

const RoomStatus = {
  "OPEN": "OPEN",
  "CLOSED": "CLOSED"
};

const { Estimation, Ticket, Room } = initSchema(schema);

export {
  Estimation,
  Ticket,
  Room,
  StoryPoint,
  RoomStatus
};