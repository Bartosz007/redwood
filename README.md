## Redwood project
#### Frontend:
	HTML + LESS + React.js
	
#### Backend:
	 Java + Spring Boot
 
------------
##### Repository structure:
*/redwood-backend*   - directory containing backend files i.e. Java and Spring Boot files\
*/redwood-frontend* - directory containing frontend files i.e. HTML pages, LESS and CSS files and JS with React.js files\
/*schemes* - folder contains schemes of project

##### Roles:

|   | not logged in  |  ZBANOWANY |USER |MODERATOR|ADMIN|
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| viewing articles and comments  | +  |  + | +  |+ |+ |
|color settings |  + |+   |+   |+|+ |
|saving settings in database |  - |  + |+   |+ |+ |
|adding comments  | -  | -  |  + |+ |+ |
|adding unverified articles |  -    |-   |+|+ |+ |
|adding verified articles  | -  |  -    |-|+ |+ |
|verifying articles| -  | -  | -  |+ |+ |
|removing articles| -  |  - |  - | +|+ |
|removing comments| -  |  -    |-|+ |+ |
|adding warnings| -  | -  | -  |- |+|
|banning| -  |-   | -  |- | +|
|role managing| -  |-   |   -| -| +|
|remove accounts|  - |  - | -  |- |+ |
