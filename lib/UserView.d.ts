import * as React from "react";

export interface UserViewProps {
  background?: string;
  image?: string;
  name?: string;
  email?: string;
}

/**
 * React Materialize: UserView
 */
declare const UserView: React.FC<UserViewProps>;

export default UserView;
