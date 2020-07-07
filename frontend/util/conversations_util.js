export const fetchConversations = (user_id) => (
  $.ajax({
    method: "GET",
    url: '/api/conversations',
    data: { user_id }
  })
)

export const fetchConversation = (conversation_id) => (
  $.ajax({
    method: "GET",
    url: `/api/conversations/${conversation_id}`
  })
)

export const createMessage = (info) => (
  $.ajax({
    method: "POST",
    url: '/api/conversations',
    data: { info }
  })
)

export const deleteConversation = (conversation_id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/conversations/${conversation_id}`
  })
)