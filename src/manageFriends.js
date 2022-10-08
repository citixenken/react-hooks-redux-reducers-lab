export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] };
    case "friends/remove":
      return {
        friends: state.friends.filter((friend) => friend.id !== action.payload),
      };
    default:
      return state;
  }
}
// let state = { friends: [] };
// let action_a = { type: "friends/add" };
// let action_b = { type: "friends/remove" };
// manageFriends(state, action_a);
// manageFriends(state, action_b);
