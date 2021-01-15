# Dessert Nutrition Table Summary

The goal of this exercise is to build a “Dessert Nutrition Table Summary” user interface. 
 
## Recommended Tech Stack 

1. React / React Hooks
2. TypeScript (Recommended)
3. CSS (Preferred: Tachyons)
4. React-Query / Apollo Client
5. Jest (Unit and Integration Testing Library)
6. React Testing Library
7. GraphQL (Preferred: Apollo-Fastify / Apollo-express server)

## Key UI Element

* UI Table with selection 
* Add Dessert Feature  ( Mutation Query )
* Delete Dessert Feature ( Mutation Query )
* Sort Desserts
* Reset the mutated data in graphql server

## Use

1. Use Graphql mock server and React-Query/Apollo to fetch data for your react components state
2. Use Graphql mock server to mutate the Nutrition Table Data
3. Write Unit and Integration Tests using Jest & React Testing Library
4. Typing of Props 

### Notes
* For the nutrition data, Please fetch data from graphql server 
* Sample Nutrition Data 
Data =   [ {dessert: "Oreo",nutritionInfo: {calories: 437,fat: 18, carb: 63,   protein: 4, } }, {dessert: "Nougat", nutritionInfo: {calories: 360,fat: 19, carb: 50,   protein: 37, } }, … ]
Once you receive this data from mock service, we expect you to have this data set in the state tree and your react components get’s data from state.
* Build your UI on Code Sandbox: https://codesandbox.io/s/new and share the URL when ready 
* Feel free to use your own workflow too if easier and upload your project files to a GitHub repo along with instructions for loading it up and testing on my end.
* Reusability of component is a key factor to consider. You’ll be evaluated based on code correctness and quality.
 
### Bonus Points
1. Using Typescript instead of Javascript
2. If the UI is responsive and works fine across different resolutions (mobile/desktop - scaling by % of page width). 
3. If there are Integration tests for components with interactions.
4. Tachyons for CSS
5. React Query for Graph QL API calls
6. Using React Context or React Query for State Management.
