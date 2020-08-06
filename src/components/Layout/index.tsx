import React from "react";

import { Grid } from "./styles";
import SeverList from "../SeverList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";

const Layout: React.FC = () => {
  return (
    <Grid>
      <SeverList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <UserList />
    </Grid>
  );
};

export default Layout;
