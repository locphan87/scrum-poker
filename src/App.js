import React from "react";
import {
  withAuthenticator,
  Flex,
  Button,
  Heading,
  Image,
  View,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";

import { Room } from "./models";
import "@aws-amplify/ui-react/styles.css";

const fetchRooms = async (userEmail) => {
  return await DataStore.query(Room, (c) => c.owner("eq", userEmail));
};

function App(props) {
  const {
    signOut,
    user: {
      attributes: { name, email },
    },
  } = props;

  React.useEffect(() => {
    fetchRooms(email);
  }, [email]);

  return (
    <Flex
      direction="column"
      padding="1rem"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        alt="Logo"
        src="https://www.patboard.com/wp-content/uploads/2020/04/patboard-planning-poker-cards-blog.jpg"
        width="25%"
      />
      <Flex justifyContent="space-between" direction="column">
        <Heading textAlign="center" level={3}>
          Hello {name}
        </Heading>
        <Button onClick={() => {}} variation="primary">
          Manage rooms
        </Button>
        <Button onClick={() => {}}>Create a new room</Button>
        <Flex direction="row" alignItems="center">
          <Text>Join a room</Text>
          <TextField placeholder="Room ID" labelHidden />
          <Button onClick={() => {}}>Join</Button>
        </Flex>
        <Button onClick={signOut}>
          <span className="text-red-700">Sign out</span>
        </Button>
      </Flex>
    </Flex>
  );
}

export default withAuthenticator(App);
