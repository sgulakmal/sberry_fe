export interface Friend {
  id: string;
  name: string;
  avatar: string;
  highlights: {
    birthday?: string;
    workAnniversary?: string;
    farewell?: string;
    graduation?: string;
  };
}
export interface FriendState {
  friends: Friend[];
}