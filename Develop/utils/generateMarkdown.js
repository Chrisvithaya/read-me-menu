// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Content
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Installation](#Insatllation)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${answers.usage}

  ## Usage
  ${answers.usage}

  ## Installation
  ${answers.installation}

  ## Contribution
  ${answers.contribution}

  ## Questions
  ${answers.email}
  ${answers.github}

  ## License
  ${answers.license}

`;
}

module.exports = generateMarkdown;
