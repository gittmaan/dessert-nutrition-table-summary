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

  constructor() {
    this.data = initialState;
  }

  getAllDesserts() {
    return this.data;
  }

  getDessertByID({ dessertId }) {
    return this.data.find((dessert) => {
      return dessert.id === dessertId;
    });
  }

}

const dessert = new Dessert();

const resolvers = {
  Query: {
    desserts: () => dessert.getAllDesserts(),
  },
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
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});