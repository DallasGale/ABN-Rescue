# CGU - ABN Rescue

![Screenshot](https://github.com/DallasGale/ABN-Rescue/blob/master/_screenshots/landing-page.jpg)

## Build tool

[NextJS](https://nextjs.org) - Static Site Generator for [React](https://reactjs.org)

### Local development:
```
npm start
```

### Deployment to CGU's S3 bucket:

Clear NextJS's cache and remove the existing `out` folder:
```
rm -r .next out
```
Uncomment the assetPrefix option in the `next.config.js` file:  
```
assetPrefix: '/abn-rescue/'
```
_Note: This is required as CGU serve the app via a sub-directory.  Leaving this option turned on breaks local development and Netlify deploys - only uncomment when building for deployment to CGU's S3 bucket._

Run the `deploy` script: 
```
npm run deploy
```

Copy the contents of the `out` folder to CGU's S3 bucket.   🎉 
