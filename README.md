# My Store Application
E-commerce website - an application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

Application on S3: [App](http://mystore-123456.s3-website-us-east-1.amazonaws.com/)

## Technologies
- Angular
- Express
- Postgres
- AWS S3, Elastic BeanStalk, RDS

## Deployment

### RDS Database
Follow the below steps to setup database
1. Go to AWS management console [AWS Console](https://console.aws.amazon.com/console/)
2. Search for 'RDS'
3. Create a Database
4. Enter database name, username, and password.
5. Make the database public to be accessible by the application.
6. Note down the endpoint and port.
7. Username,password,dbname,endpoint and port are used in establishing connection with the database
8. By default, database name should be 'postgres'


### Elastic Beanstalk
Follow the steps to deploy the API in AWS.
1. Go to AWS management console [AWS Console](https://console.aws.amazon.com/console/)
2. Search for 'Elastic Beanstalk' in services
3. Create an enironment and then choose the desired service options suitable for the application.
4. Upload the zip folder (files generated after build)
5. In Configuration, add all the environment variables used in the code.
6. Deploy
8. Add Inbound rules to enable requests from specific machines
7. Test the APIs using Postman

### Amazon S3
I used Amazon S3 to host the angular web application. Follow the steps to make it available on internet.
1. Go to AWS management console [AWS Console](https://console.aws.amazon.com/console/)
2. Create S3 bucket
3. Enable static web hosting in properties
4. Write a bucket policy in Permissions
5. Make the bucket public
6. Add index.html in properties as index file
7. Add the files to the bucket which are generated after ng build (do not add the folder, but add all the files from build folder to the bucket)
8. Ensure index.html file uploaded 
9. Go to Properties, and find the application URL under web hosting

### CircleCI
Implemented CI/CD pipeline using CicleCI.
Whenever code is pushed into database setup, build, test and deploy scripts are run.
Added AWS Keys and region as environment variables


## Functionality

- User will be able to add to products to the cart from the main page.
- User can navigate to product details and even add to cart from there.
- User can check the cart details by navigating to cart from the navigation bar in the header.
- User can remove cart items from the cart.
- User can adjust the quantity to order from the cart.
- User need to give valid information before placing the order.


Please refer to documentation for dependencies, project architecture, and pipeline
