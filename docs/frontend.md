## Build and Deploy

```
yarn build:wwww
cd packages/apps
aws s3 cp --recursive build s3://portal.phuquoc.dog

aws cloudfront create-invalidation --distribution-id=E24W08QZ1RM9FY  --paths '/*'

```