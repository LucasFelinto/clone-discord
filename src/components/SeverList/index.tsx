import React from "react";

import ServerButton from "../SeverButton";
import { Container, Separator } from "./styles";

const SeverList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton mentions={3} />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default SeverList;
