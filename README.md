## TOILIFY 

### Mission:
Toilify provides a quick and easy way to locate nearby restrooms by mapping available toilets and encouraging users to contribute by adding their own facilities.

### The challenges we address:
There are common situations we’ve all faced:
- Needing immediate access to a restroom.
- Being in an unfamiliar location and unable to find a toilet.
- Encountering unhygienic facilities (or lacking access to any restroom at all).

Toilify tackles these challenges by creating a comprehensive network that allows users to easily locate restrooms. It expands restroom availability by:
- Enabling users to tag and share public toilet locations for others to view on the map.
- Allowing individuals to rent out their private restrooms, enhancing the number of available facilities.

For many, this also presents an opportunity for extra income. Individuals with spare restrooms at home or in establishments (such as restaurants or stores) can profit from their underused facilities while providing a valuable service to those in need.

### Technology Stack:
- Frontend: React, Material UI, Google Maps API
- Backend: Node.js, Express, MongoDB

### How Toilify solves restroom-related issues:
- Customized toilet searches: Users can filter toilets based on specific needs like gender-specific restrooms, availability of toilet paper, or the type of toilet (e.g., western-style).
- Accessibility: Toilify highlights restrooms that are disability-friendly, making it easier for individuals with specific needs to find suitable facilities.
- Private bathroom leasing: Users can offer their bathrooms for rent, including bathing facilities—an idea already popular in some regions with bathhouses and "onsens."
- Better sanitation planning: By providing data on restroom availability, organizations can better understand areas where more sanitation facilities are required.
- Reducing open defecation: Toilify helps combat this problem by offering more accessible restroom options, ultimately improving public hygiene.


## Running the Project Locally

#### Prerequisites:

##### Install necessary npm packages. 
##### Set up environment variables:
 - in the *root* directory, create an *.env* file containing: 
  
 ```
 jwt_secret = some.alphanumeric.string 
 dbstring = mongodb://user:password@host:port/database?options...
 ```
  - in the */client* directory, create an *.env* file with your Google Maps API key:
```
REACT_APP_GOOGLE_MAPS_API_KEY = some.alphanumeric.string
```
_______________

#### Instructions:

Install the dependencies in both the root and */client* directories: 
```
npm install
```
Build the frontend by running the following command in the */client* directory:
```
npm run build
```
Start the backend server by running the following command in the root directory:
```
node ./index.js
```


 ### Screenshots (PWA): 
 ![alt text](screenshots/toilify_1.png)
 ![alt text](screenshots/toilify_2.png)
 ![alt text](screenshots/toilify_3.png)
 ![alt text](screenshots/toilify_4.png)
 ![alt text](screenshots/toilify_5.png)
 
