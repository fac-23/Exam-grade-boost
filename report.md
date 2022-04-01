## Introduction

#### What are you building?

We are building a visual essay writing application mainly aimed at neurodiverse and international students.

#### Why are you building it?

Oliver's students need a clear, user friendly interface to get the most out his educational method.

#### Project scope

The key features of our MVP will include:

- Being able to write, edit and save the different sections of an essay following Oliver's method.
- Being able to export an essay as PDF or MS DOC.
- Providing the students with the resources they need to succeed.
- Students are able to choose a theme or personalised colours to support them in their planning and reading.

#### What are you not building?

We are not building a video hosting platform.
The product owner will provide the resources.

#### How did you decide what features were important?

User research and consulting and designing alongside the product owner.

### Project plan

#### How are you going to structure your sprints?

- Design sprint
- Build sprint 1
- Build sprint 2

#### How did user research inform your plan?

We had 7 users of varying ages, education experience and background.

Their feedback was:

- Clear instructions around use and navigation.
- Having resources side by side while writing the essay.
- Having sections broken down.
- Having an option to personalise colours.
- making sure the essay question is always visible.

## Requirement analysis

#### How will you ensure your project is accessible to as many users as possible?

- Semantic HTML.
- Aria compliant CSS.
- Reponsive design.

#### Are there any legal or regulatory requirements you should consider?

Users will want their essays to remain private, product owner expressed interest in being able to delete essays to prevent malicious behaviours. Users will be able to reset their own password.

## Project learnings

- Authentication.

- End to end testing with Cypress.

- Managing database CRUD operations.

  - Supabase

- Using external libraries:

  - Chakra UI styling library.
  - Docxtemplater library to export documents in MS DOC format.
  - jsPDF library to export documents in PDF format.

- Responsive design.

- User research and prototype testing.

- Figma wireframing.

- Deployment on Vercel and managing environmental variables.

- Liasing with product owner.

- Documenting a project.

#### Did your team work effectively?

The team :

- discussed project architecture during the design phase.
- confirmed or challenged our own assumptions during user testing.
- worked together on core features and split into role specific tasks, getting continuous feedback from the product owner.

#### What would you do differently next time?

Invest more time into researching the Chakra UI library, it proved itself very useful and well documented but at the same time it has been a slight learning curve, especially since we had a limited amount of time to produce an MVP.

## Research and findings

the user research phase brought up key aspects of the app we should focus on, very relevant to the target user, like:

- Theme Toggle Switch to offer alternative colours.
- Accordion component to serve resorces alongside essey writing section.
- Mobile-first, responsive, accessible design.

#### What did you find out from user testing?

## Project outcomes

We built an MVP covering the cover user stories. The Product Owner will use the app to present the Essay Boost methodology to teachers, parents and students with the aim of getting feedback and possibly improving it and keep using it to assist students in their learning process.

#### Were your assumptions right or wrong?

We did a second round of user testing during build sprint 2 to test our assumptions and the users valued being able to delete the essays, being able to edit the essay question and getting visual feedback on completed sections.

## Recommendations and conclusions

#### What features would you prioritise to build next?

An admin dashboard where teachers can access students essays, provide feedback and manage users.

#### Was the project a success?

The Product Owner was pleased with the result and satisfied with the MVP.

## Software Development Lifecycle stages

### Planning

#### What roles did your team take on?

##### Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

Scrum Facilitator & Liason - Oli
DevOps - Adam
QA & Documenter - Paolo
UX / UI - Split Responsibility

#### Did these roles help your team work effectively?

##### Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

We distributed work by allocating features / bugs to each developer to work on and supported each other by pairing on difficult tasks. We all had a chance to cover different aspects of the build, including responsive design, querying the database and managing state.

We had daily stand ups and sprint retrospectives at the end of each sprint.

We conducted code reviews presenting our work to other team members explaning our approach.

## Analysis

#### What might be the intended and unintended consequences of building this product?

We have taken action to make sure the app is as secure as possible but we recognise the app is not intended to secure personal information; one unintentional consequence is that passwords, emails and possibly other forms of private data could be stolen.

## Design

#### How did you plan a user experience?

An initial user research phase conducted by the product owner has been followed by a Design Sprint week which included the following phases:

- Revisiting and defining the problem statement for the project.

![](/public/report/problem%20statement.png)

- Defining what our app offers, how to use the app and how it will help the end user achieve their goals.

![](/public/report/journey%20mapping.png)

- Creating the core user stories.

![](/public/report/user%20stories.png)

- Brainstorming in relation to the challenges that might come with building the app.

![](/public/report/build%20challenges.png)

- Getting inspiration from applications / websites already present on the web.

![](/public/report/inspiration.png)

- Quickly sketching multiple ideas for the design and flow of our app.

![](/public/report/sketching.png)

- Producing a Figma interactive wireframe that we used to conduct usability testing sessions with 7 sample users.

![](/public/report/figma%20wireframe.png)

- Synthesising the users feedback.

![](/public/report/Synthesise.png)

- Identifying technical choices.

![](/public/report/Technical%20Choices.png)

- Identifying spikes to research topics.

![](/public/report/spikes%20topics.png)

#### What technical decisions did you make?

- Server-render vs client-render vs both

We used the Next.js framework, which utilises a mix of client-side rendering for state and server-side operations for database queries.

- Relational or non-relational or no DB

We created a cloud hosted relational postgres database on Supabase.

- Self-hosted or platform-as-a-service

The app is hosted on Vercel.

- Frontend first vs DB first

We did focus on the authentication flow before working on the frontend aspect of the app, after which we had a balanced approach to back end and front end development.

#### Did you create a technical specification?

##### Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

We went over technical choices like:

- How to preserve state between different pages

- Whether to implement authentication with a single dummy account; we then decided to fully implement authentication with multiple users to respond to the Product Owner request.

- We discussed how to implement pdf and ms doc conversion.

- We decided to write the database queries ourselves instead of using a service like Prisma or Firebase.

## Implementation/Build

#### How did you ensure your code was good?

##### Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

- Testing with Cypress and Huski.

- Code reviews with the team.

- Linting with ESLINT.

- Formatting the code using the Prettier VScode extension.

- Refactoring repeated code into components and functions.

#### What interesting technical problems did you have to solve?

##### Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

- Implementing the

#### How did you debug issues that arose?

##### Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

## Test

#### How did you verify your project worked correctly?

We implemented end to end testing using Cypress;

We focussed on making sure every input from the user, on every section of the Essay boost app, is inserted / updated in the database and retrieved and rendered correctly on the front end.

We tested the authentication process to make sure the user can sign up, log in and log out and cookies are set and removed accordingly.

We installed Huski to use Git Hooks and run our tests suite on pre-commit.

##### Identify and create test scenarios which satisfy the project specification (S6)

#### Did writing automated tests catch any bugs?

A few bugs were detected during the development process thanks to automated tests:

There were issues when trying to retrieve and parse strings from empty rows in the database.

##### Analyse unit testing results and review the outcomes, correcting errors. (S4)

## Deploy

#### Where/how did you deploy your application?

We deployed on Vercel.

##### Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

#### What problems did you encounter during deployment?

## Maintain

#### Is it easy for someone make changes to the codebase?

#### Could a new person quickly be onboarded to contribute?
