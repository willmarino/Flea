pls = {
  entities: {
    users: {
      [currentuser.id]: currentuser
    },
    products: {

    }
  },
  errors: {
    sessionErrors: [],
    userErrors: []
  },
  session: {
    currentUser: currentuser.id
  },
  ui: {
    modal: null
  }
};

export default pls;