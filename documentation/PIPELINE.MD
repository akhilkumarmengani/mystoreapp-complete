# Pipeline Process
- This projects uses Circle CI/CD Pipeline to run set of processes whenever a  work is triggered.
- CircleCI encompass your workflows, which coordinate your jobs, and this is all defined in your project configuration file.

## Configuration file
- Pipelines are normally written inside configuration files as a list of steps. 
- In the case of CircleCI, this file will always be located inside a .circleci folder and will be named config.yml.

### Config.yml
Configuration file contains the following sections:

- CircleCI version: This is simply indicating which version of the platform our pipeline should use.
- Orbs : 
   ```
    node: circleci/node@4.1.0
    aws-cli: circleci/aws-cli@1.3.1
    browser-tools: circleci/browser-tools@1.1.3
   ```
   Orbs are a set of instructions created by CircleCi that allow us to configure the pipeline on which we will run our actions. These instructions will instruct the server to setup specific software on the server executing our pipeline. We could use orbs to setup node.js or install the AWS CLI for example. Orbs are not always present in a pipeline.
   
- Jobs: 
   node, awscli are installed beforing running the below jobs.
   - Install - Install all the dependencies related to the project
   - Build - packages the web application and API into dist folder
   - Test - performs test on the API to check if its ready to be deployed
   - Deploy - Deploy the application on S3 using aws-cli 

   Jobs are groups of commands that we want to run. This is where we will run commands to install, build or deploy our application.


## Environment Variables
- All environment variables used in the code should be added in from the projects settings CircleCI for the build to run without any errors.