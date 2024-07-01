### Steps to follow


#### 1. Clone this repo
------
#### 2. Replication steps
You need to copy all below files/directory information in your project
       
**config files/directory**    
```
.husky
.lintstagedrc.json
.prettierrc.js
.stylelintrc.json
eslint.config.mjs
```
**packages**     
```
"@eslint/js": "^9.6.0",
"eslint": "^9.6.0",
"husky": "^9.0.11",
"lint-staged": "^15.2.7",
"prettier": "3.3.2",
"stylelint": "^16.6.1",
"stylelint-config-standard": "^36.0.1",
"stylelint-config-standard-scss": "^13.1.0"
```
**scripts**   
```
"lint": "eslint && stylelint **/*.{css,scss}",
"lint:fix": "eslint --fix  && stylelint **/*.{css,scss}",
"formatting": "prettier --write .",
```
----------

#### 3. Installation     

Do npm install in your project so that required packages can be installed.     

-----------

#### 4. Running

Once everything is in place and once you've made any changes to scss/css/js/ts then on trying to commit those files the linting will be triggered.    

