// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RoomStatus = {
  "OPEN": "OPEN",
  "CLOSED": "CLOSED"
};

const { Ticket, Room } = initSchema(schema);

export {
  Ticket,
  Room,
  RoomStatus
};