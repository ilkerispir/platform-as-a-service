# Platform as a service(PaaS) Examples

## [GCP App Engine](https://cloud.google.com/appengine)

### [GCP SDK](https://cloud.google.com/sdk)

###  YAML File
```bash
  runtime: nodejs16
```

###  Deploy Command
```bash
  gcloud app deploy
```
## Images
### Choose region
![1](images/app-engine/1.png)

### Approve
![2](images/app-engine/2.png)

### Completed
![3](images/app-engine/3.png)

### Prove
![4](images/app-engine/4.png)

### GCP Console Interface
![4](images/app-engine/5.png)

## [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)

### [AWS EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)

###  Deploy Command
```bash
  eb create my-app
```
## Images
### Deploy
![1](images/elastic-beanstalk/1.png)

### Prove
![2](images/elastic-beanstalk/2.png)

### Aws Console Interface
![3](images/elastic-beanstalk/3.png)

## [Azue App Service](https://azure.microsoft.com/en-us/services/app-service/)

### [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/)

###  Deploy Command
```bash
  az webapp up --name ilker
```
## Images
### Deploy
![1](images/app-service/1.png)

### Prove
![2](images/app-service/2.png)

### Azure Console Interface
![3](images/app-service/3.png)

## [Heroku](https://www.heroku.com/)

### [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

###  Procfile File
```bash
  web: npm start
```
###  Create Project
```bash
  heroku create
```

###  Push to Heroku Repo
```bash
  git push heroku HEAD
```
## Images
### Create Project
![1](images/heroku/1.png)

### Deploy
![2](images/heroku/2.png)

### Prove
![2](images/heroku/3.png)

### Heroku Console Interface
![4](images/heroku/4.png)

## [Vercel](https://vercel.com/)

### [Vercel CLI](https://vercel.com/docs/cli)

### Config.json
```bash
  {
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
  }
```

###  Deploy Command
```bash
  vercel
```
## Images

### Deploy
![2](images/vercel/1.png)

### Prove
![2](images/vercel/2.png)

### Vercel Console Interface
![4](images/vercel/3.png)

## Authors
- [@ilkerispir](https://www.github.com/ilkerispir)