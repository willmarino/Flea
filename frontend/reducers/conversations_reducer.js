import {
  RECEIVE_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  REMOVE_CONVERSATION
} from '../actions/conversations_actions';

const ConversationsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {}
  switch(action.type){
    case RECEIVE_CONVERSATIONS:
      action.conversations.forEach((conversation) => {
        newState[conversation.id] = conversation;
      });
      return newState;
    case RECEIVE_CONVERSATION:
      return Object.assign({}, state, { [action.conversation.id] : action.conversation });
    case REMOVE_CONVERSATION:
      newState = Object.assign(state, {});
      newState.delete(action.conversationId);
      return newState;
    default:
      return state;
  }
}

export default ConversationsReducer;