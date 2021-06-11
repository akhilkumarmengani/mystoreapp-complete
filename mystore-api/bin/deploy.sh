echo "EB deploy!"

echo `${aws_access_key_id}`

echo `$(aws_access_key_id)`

aws configure set aws_access_key_id AKIAQ7K4ULFR4JAUORM3 --profile default

aws configure set aws_secret_access_key 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 --profile default

eb init --profile default

eb setenv POSTGRES_HOST=mystore.cuszxooszhyd.us-east-1.rds.amazonaws.com POSTGRES_DB=postgres POSTGRES_USER=postgres POSTGRES_PASSWORD=akhil123 POSTGRES_DB_TEST=storefront_test NODE_ENV=dev PORT=5432 TOKEN_SECRET=I_AM_THE_LAST_JEDI SALT_ROUNDS=10 BCRYPT_PASSWORD=UNBREAKABLE TEST_TOKEN=eyJhbGciOiJIUzI1NiJ9.MQ.SMntCq5FXdlRgXKQZztNsTeecF7EdLXPeUpop53SUlY

eb deploy 

