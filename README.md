# Mutation tests

In this repo, i used the lib [stryker](https://stryker-mutator.io/stryker/) to applay some concepts of mutation tests.

## Getting Started
To get success with the tests, you need to follow this steps

### Ensure you have the node and npm installed on your machine.

1. Clone this repo.
2. checkout on branch master
3. Run the follow command:
   `npm i`
4. Run the test: `npm run test`

### You'll see the test coverage is **100%**, but now, we'll run the mutation test.

1. checkout on branch stryker
2. Run the follow command:
   `npm install -g stryker-cli`, it will install stryker globally. 
3. Run the mutation test: `stryker run`

### Note the mutation tests show **60%** of coverage in mutant. 

1. checkout on branch kill-mutants
2. Run the mutation test again: `stryker run`

### Now we have **100%** of coverage in mutant. 

During the checkouts, look the diferences in 'index.test.js'

Some questions? 
Let me know, eliasreis54@gmail.com. =)