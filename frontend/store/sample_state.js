let sampleState = {
  entities: {
    users: {
      1: {
        id: 1,
        username: "billy1000",
        email: 'sample1@mail.com',
        description: "the first description",
        location: "NYC"
      },
      2: {
        id: 2,
        username: "billy2000",
        email: 'sample2@mail.com',
        description: "the second description",
        location: "LA"
      },
      3: {
        id: 3,
        username: "billy3000",
        email: 'sample3@mail.com',
        description: "the third description",
        location: "Maine"
      }
    }
  },
  session: {
    cur_session: { cur_user: null }
  }
};

export default sampleState;