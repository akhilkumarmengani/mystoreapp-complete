echo "EB deploy!"

echo `${aws_access_key_id}`

echo `$(aws_access_key_id)`

eb init --profile default

eb setenv POSTGRES_HOST=mystore.cuszxooszhyd.us-east-1.rds.amazonaws.com POSTGRES_DB=postgres POSTGRES_USER=postgres POSTGRES_PASSWORD=akhil123 POSTGRES_DB_TEST=storefront_test NODE_ENV=dev PORT=5432 TOKEN_SECRET=I_AM_THE_LAST_JEDI SALT_ROUNDS=10 BCRYPT_PASSWORD=UNBREAKABLE TEST_TOKEN=eyJhbGciOiJIUzI1NiJ9.MQ.SMntCq5FXdlRgXKQZztNsTeecF7EdLXPeUpop53SUlY

eb deploy 

