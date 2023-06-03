"use client";
import React, { useState } from "react";

const TableOfContents = () => (
  <nav className="mt-4">
    <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
    <ul className="list-disc pl-6">
      <li>
        <a href="#project-setup">Project Setup</a>
      </li>
      <li>
        <a href="#ui-phase">UI Phase</a>
      </li>
      <li>
        <a href="#database-phase">Database Phase</a>
      </li>
      <li>
        <a href="#testing-phase">Testing Phase</a>
      </li>
      <li>
        <a href="#git-hooks-phase">Git Hooks Phase</a>
      </li>
      <li>
        <a href="#type-declaration-phase">Type Declaration Phase</a>
      </li>
    </ul>
  </nav>
);

const SectionTitle = ({
  title,
  onClick,
  isOpen,
}: {
  title: string;
  onClick: () => void;
  isOpen: boolean;
}) => (
  <button
    className="flex items-center justify-between w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none"
    onClick={onClick}
  >
    <h2 className="text-2xl font-bold">{title}</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 transition-transform transform ${
        isOpen ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

const SectionContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <section className="mb-4">
      <SectionTitle title={title} onClick={toggleSection} isOpen={isOpen} />
      {isOpen && <SectionContent>{children}</SectionContent>}
    </section>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-2">{children}</li>
);

const Documentation = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">Movie Vault Documentation</h1>
    <TableOfContents />

    <Section title="Project Setup">
      <ol className="list-decimal pl-6">
        <ListItem>Initialize a Next.js app with TypeScript.</ListItem>
        <ListItem>Set up ESLint and Prettier for this project.</ListItem>
        <ListItem>Initialize Prisma.</ListItem>
        <ListItem>Create a user model on Prisma.</ListItem>
        <ListItem>Connect Prisma with a Postgres container.</ListItem>
        <ListItem>
          Add a Docker YAML file, which will generate a Postgres database.
        </ListItem>
      </ol>
    </Section>

    <Section title="UI Phase">
      <ol className="list-decimal pl-6">
        <ListItem>Design a simple UI using Tailwind CSS.</ListItem>
        <ListItem>Add input fields for name, email, and occupation.</ListItem>
        <ListItem>
          Implement an &apos;Add User&apos; button that saves the entered data
          to the database and updates the user table.
        </ListItem>
        <ListItem>
          Display all users in a table with columns for name, email, occupation,
          and a delete button.
        </ListItem>
        <ListItem>
          Implement the delete button to remove the user from the database and
          update the user table.
        </ListItem>
        <ListItem>
          Fetch user data from the database using Prisma to display in the UI.
        </ListItem>
      </ol>
    </Section>

    <Section title="Database Phase">
      <ol className="list-decimal pl-6">
        <ListItem>Store user data in the database upon submission.</ListItem>
        <ListItem>Delete user data from the database upon deletion.</ListItem>
      </ol>
    </Section>

    <Section title="Testing Phase">
      <ol className="list-decimal pl-6">
        <ListItem>
          Add a simple Jest test, such as a hello world, or add two number test.
        </ListItem>
      </ol>
    </Section>

    <Section title="Git Hooks Phase">
      <ol className="list-decimal pl-6">
        <ListItem>
          Set up conventional commit, commitlint, and commitizen for proper
          commit messages.
        </ListItem>
        <ListItem>
          Set up Husky to run test and lint commands before every commit.
        </ListItem>
      </ol>
    </Section>

    <Section title="Type Declaration Phase">
      <ol className="list-decimal pl-6">
        <ListItem>
          Use proper type declarations throughout the project.
        </ListItem>
      </ol>
    </Section>

    <hr className="my-8" />

    <p className="text-center">
      This revised plan provides a clear and concise outline for the project,
      which should ensure that it is completed on time and with the necessary
      features and functionality.
    </p>
    <p className="text-center text-2xl my-5 font-semibold">
      Here is the codebase for the project:{" "}
      <a
        className="text-blue-600"
        target="_blank"
        href="https://github.com/badhon252/Candidates-portal"
      >
        GitHub
      </a>{" "}
    </p>
  </div>
);

export default Documentation;
