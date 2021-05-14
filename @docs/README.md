## Getting Started

### ENVs

.env
```dotenv
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=1234567890
STORYBLOK_SPACE_ID=123456789
STORYBLOK_OAUTH_TOKEN=123456789
```

then

```bash
yarn 
```

to install deps

then
```bash
yarn dev 
```

to run local develpopment. It will run on `localhost:3000`


If u want to test it on "production", run
```bash
yarn serve:export:production
```

this will generate all static files, and serve it with `http-serve` on  `localhost:8080`


### Syncing Storyblok components schemas
To sync all SB component schemas, run
```bash
yarn sync:all
```
