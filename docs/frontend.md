## Build and Deploy

```
yarn build:wwww
cd packages/apps
aws s3 cp --recursive build s3://portal.phuquoc.dog
```