

export const getMessages = (conversation) => {
  let res = conversation.messages.map((message) => {
    return JSON.parse(message).body;
  })
  return res;
}

export const getLastMessage = (conversation) => {
  let lastMessage = conversation.messages[conversation.messages.length - 1];
  return JSON.parse(lastMessage).body;
}

export const getOtherUserId = (conversation, curUserId) => {
  let initalMessage = conversation.messages[0];
  let senderId = JSON.parse(initalMessage).sender_id
  let receiverId = JSON.parse(initalMessage).receiver_id
  let otherUserId = (curUserId.toString() === senderId) ? receiverId : senderId;
  return otherUserId;
}

export const numMessages = (conversation) => {
  return conversation.messages.length;
}

export const getPrettyDate = (conversation) => {
  let createdAt = conversation.created_at;
  let str = createdAt.slice(0,10);
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let [year, month, day] = str.split('-');
  if(month.toString()[0] === "0"){
    month = parseInt(month.toString()[1]);
  }
  return `${months[month].slice(0, 3)} ${day}, ${year}`; 
}