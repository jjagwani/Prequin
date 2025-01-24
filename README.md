# Prequin
Assigment for Prequin fullstack interview .net and react

# Description
-The repository includes 2 different folders, MicroFrontends and MicroService.
-MicroService has a .Net core project, built using Entity framework core and on latest .Net 8
-MicroService also includes a sqlite database by the name PrequinDB.db
-McroFrontends contains 2 projects, Investors and Commitments both built on React
-The design of the project has been created strictly looking at the wireframes and description provided

# How to run the project
-Download the repository
-Inside MicroService find InvestorCommitmetments.sln open and run in debug mode
-It will launch a commandline along with Swagger on Web browser which will provide all the details of the APIs available
-Go to MicroFronends, go to Investors, open in VS Code
-Open terminal at MicroFrontends/Investor and run npm install
-Once installation is done run npm start
-Repeat the same for other MicroFrontend, Commitments
-Investors run on 3000 while Commitments run on 3001
-Hit url localhost/3000 to check list of Investors and click on any of the investors in table to go to its commitments

# Techstack MicroService
- C#, .Net, sqlite, Entity framework core, Swagger

# Techstack MicroFrontends
- TypeScript, React, Redux toolkit, React router, MicroFronend using Module federation plugin

# For any queries
- Reach out to: jaijagwani96@gmail.com
