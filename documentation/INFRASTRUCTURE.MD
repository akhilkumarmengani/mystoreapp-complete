# Infrastructure
This Project uses 3 AWS Services
  - S3 : for web hosting - Application on S3: [a link](http://mystore-123456.s3-website-us-east-1.amazonaws.com/)
  - ElasticBeanStalk : for API
  - RDS : for the database

## RDS
- Amazon RDS to store and retrieve data from the database.
  - All the information about Users, Products, Orders will be stored in the database.
  - Inbound rules are added in the database to restrict requests from other applications/machines.

## ElasticBeanStalk
- Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring.
- This projects uses AWS Elastic bean stalk to deploy the application backend APIs.
- Ensure all the necessary env variables are added before deploying the project.

## S3
- AWS S3 is an amazing place to host web applications.
- Angular frontend for this project is hosted on S3. This is achevied copying the build files to the s3 bucket.

```
Add environment variables before leveraging aws services
```


