# Amazon Clone
![Template Screenshot](TemplateScreenshot.jpg?raw=true "Template Screenshot")

## Live demo
### [Live Demo](https://pocotep.com)

## Installation Steps

### Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


### Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```

## Environment variables

Open or create a `.env` file then edit add this setting

```
# Authentication
GOOGLE_ID=key_goes_here
GOOGLE_SECRET=key_goes_here
NEXTAUTH_URL=http://localhost:3000

# Stripe
STRIPE_PUBLIC_KEY=key_goes_here
STRIPE_SECRET_KEY=key_goes_here

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=key_goes_here

HOST=http://localhost:3000

# Need to add this to... google cloud
# http://localhost:3000/api/auth/callback/google
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

