import {
  ApolloServer,
  gql,
} from 'apollo-server';

const initialState =  [
  {
    id: '1',
    name: 'KitKat',
    calories: 518,
    fat: 26,
    carbs: 65,
    protein: 60,
  },
  {
    id: '2',
    name: 'Lollipop',
    calories: 398,
    fat: 2,
    carbs: 98,
    protein: 0,
  },
  {
    id: '3',
    name: 'Marshmallow',
    calories: 318,
    fat: 3,
    carbs: 81,
    protein: 2,
  },
  {
    id: '4',
    name: 'Nougat',
    calories: 308,
    fat: 19,
    carbs: 9,
    protein: 37,
  },
  {
    id: '5',
    name: 'Oreo',
    calories: 437,
    fat: 18,
    carbs: 63,
    protein: 4,
  },
];

class Dessert {
  data = [];
  static ID = 0;

  constructor() {
    this.data = initialState;
    Dessert.ID = initialState.length;
  }

  addDessert({ dessert }) {
    Dessert.ID += 1
    const id = Dessert.ID.toString();
    this.data.push({ id, ...dessert });
    return { id, ...dessert };
  }

  deleteDessert({ dessertId }) {
    console.log('dessertId', dessertId);
    const deletedDessert = this
      .data
      .find((dessert) => dessert.id === dessertId);

    console.log('deletedDessert', deletedDessert);

    const newData = this
      .data
      .filter((dessert) => dessert.id !== dessertId);

    this.data = newData;
    return deletedDessert;
  }

  deleteDesserts({ dessertIds }) {
    dessertIds.map((dessertId) => {
      const newData = this
        .data
        .filter((dessert) => dessert.id !== dessertId);

      this.data = newData;
    });

    return {
      success: true,
      message: 'Desserts have been deleted',
    };
  }

  getAllDesserts() {
    return this.data;
  }

  getDessertByID({ dessertId }) {
    return this.data.find((dessert) => {
      return dessert.id === dessertId;
    });
  }

  reset() {
    this.data = [];
    return {
      success: true,
      message: 'All data has been reset',
    };
  }
}

const dessertObj = new Dessert();

const resolvers = {
  Query: {
    desserts: () => dessertObj.getAllDesserts(),
    dessert: (parent, { id: dessertId }, context, info) => dessert.getDessertByID({ dessertId }),
  },
  Mutation: {
    addDessert: (_, { dessert }) => {
      console.log('addDessert -> dessert', dessert)
      return dessertObj.addDessert({ dessert });
    },
    deleteDessert: (_, { id: dessertId }) => {
      console.log('deleteDessert -> dessertId', dessertId)
      return dessertObj.deleteDessert({ dessertId });
    },
    deleteDesserts: (_, { dessertIds }) => {
      console.log('deleteDesserts -> dessertIds', dessertIds)
      return dessertObj.deleteDesserts({ dessertIds });
    },
    reset: () => dessertObj.reset(),
  }
};

const typeDefs = gql`
  type Dessert {
    id: ID!
    name: String
    calories: Int
    fat: Int
    carbs: Int
    protein: Int
  }

  type Query {
    desserts: [Dessert]!
    dessert(id: ID!): Dessert
  }

  type ResetResponse {
    success: Boolean!
    message: String
  }

  input DessertInput {
     name: String
     calories: Int
     fat: Int
     carbs: Int
     protein: Int
   }

  type Mutation {
    addDessert(dessert: DessertInput): Dessert
    deleteDessert(id: ID!): Dessert!
    deleteDesserts(dessertIds: [ID]!): ResetResponse!
    reset: ResetResponse
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});