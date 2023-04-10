# owasp-site-automation

ui automation for the task assessment using WebdriverIO.

## Authors

- [@hridoydas](https://github.com/hridoydas)


## Run Locally

Clone the project

```bash
  git clone https://github.com/hridoydas/owasp-site-automation.git
```
To run the project Locally, need Node version 16 or above in device.

Go to the project directory and open any command prompt to install node_module package
```bash
  npm install
```
To run the both assessment sequentially in one chrome browser
```bash
  npm run assessment  
```

To run the both assessment parallelly in two chrome browser
```bash
  npm run test  
```

Run API automation
Step 1: Go to api_automation directory
Step 2: Open both json file in postman
Step 3: Run first collection "owasp_api_collection_test1" 
Step 4: Delete previous items of busket from UI
Step 5: Run second collection "owasp_api_collection_test2"