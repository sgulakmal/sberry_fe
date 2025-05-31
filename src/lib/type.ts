import { ReactionsState } from "./features/reactions/types";
import { UserState } from "./features/user/type";

export interface Store {
    auth: UserState;
    reactions: ReactionsState;
}