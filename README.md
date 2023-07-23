# Candidates-Portal Documentation

This documentation provides an overview of the *Candidates portals** project, which is built using Next.js, TypeScript, Tailwind CSS, Prisma, and a Postgres container (Docker).

## To clone this repository: 
```git clone git@github.com:badhon252/Candidates-portal.git```

## To run this project: ]
- ```docker-compose up```
- ```npm run dev```

## To run this project in production mode: 
```npm run build && npm run start```

## Table of Contents

- [Candidates portals Documentation](#movie-vault-documentation)
  - [To clone this repository: `git clone git@github.com:badhon252/Candidates-portal.git`](#to-clone-this-repository-git-clone-gitgithubcombadhon252candidates-portalgit)
  - [To run this project: `npm run dev`](#to-run-this-project-npm-run-dev)
  - [To run this project in production mode: `npm run build && npm run start`](#to-run-this-project-in-production-mode-npm-run-build--npm-run-start)
  - [Table of Contents](#table-of-contents)
  - [Project Setup](#project-setup)
  - [UI Phase](#ui-phase)
  - [Database Phase](#database-phase)
  - [Testing Phase](#testing-phase)
  - [Git Hooks Phase](#git-hooks-phase)
  - [Type Declaration Phase](#type-declaration-phase)

## Project Setup

1. Initialize a Next.js app with TypeScript.
2. Set up ESLint and Prettier for this project.
3. Initialize Prisma.
4. Create a user model on Prisma.
5. Connect Prisma with a Postgres container.
6. Add a Docker YAML file, which will generate a Postgres database.

## UI Phase

1. Design a simple UI using Tailwind CSS.
2. Add input fields for name, email, and occupation.
3. Implement an "Add User" button that saves the entered data to the database and updates the user table.
4. Display all users in a table with columns for name, email, occupation, and a delete button.
5. Implement the delete button to remove the user from the database and update the user table.
6. Fetch user data from the database using Prisma to display in the UI.

## Database Phase

1. Store user data in the database upon submission.
2. Delete user data from the database upon deletion.

## Testing Phase

1. Add a simple Jest test, such as a hello world, or add two number test.

## Git Hooks Phase

1. Set up conventional commit, commitlint, and commitizen for proper commit messages.
2. Set up Husky to run test and lint commands before every commit.

## Type Declaration Phase

1. Use proper type declarations throughout the project.

---

This revised plan provides a clear and concise outline for the project, which should ensure that it is completed on time and with the necessary features and functionality.
