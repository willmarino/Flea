import * as ConversationUtil from '../util/conversations_util';

export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";

import { closeModal } from './modal_actions';

const receiveConversations = (conversations) => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
})

const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation
})

const removeConversation = (conversationId) => ({
  type: REMOVE_CONVERSATION,
  conversationId
})

export const fetchConversations = (userId) => (dispatch) => (
  ConversationUtil.fetchConversations(userId)
    .then((res) => {
      dispatch(receiveConversations(res.conversations));
    })
)

export const fetchConversation = (conversationId) => (dispatch) => (
  ConversationUtil.fetchConversation(conversationId)
    .then((res) => {
      dispatch(receiveConversation(res.conversation));
    })
)

export const createMessage = (info) => (dispatch) => (
  ConversationUtil.createMessage(info)
    .then((res) => {
      dispatch(receiveConversation(res.conversation));
      dispatch(closeModal());
    })
)

export const deleteConversation = (conversationId) => (dispatch) => (
  ConversationUtil.deleteConversation(conversationId)
    .then((res) => {
      dispatch(removeConversation(res.conversationdId));
    })
)