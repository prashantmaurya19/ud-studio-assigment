# ud-studio-assignment
-------------


https://github.com/user-attachments/assets/26ae8fa6-3f12-4e75-99fe-e1c0cb4b8e13



https://github.com/user-attachments/assets/530c2593-a4cf-41d1-bdd0-9a841e383822

#### Sorry for color flickering it is due to video compression 🥺

# Installation

## With Docker 🐋

```bash
# requirement docker and docker compose
docker compose up
# visit http://localhost:5000 
```

## Without Docker

### Requirements
- mongodb
- node js (v22.17.1)
- yarn (v1.22.22)

```bash
# for building frontend (not required)
cd ./frontend && ./build.sh && cd ..

# runing backend server
cd ./backend && yarn start

# visit http://localhost:5000 
```

# Folder  Structure 📁

- **`ud-studio-assignment/`**
	- **`backend/`**
		* **`public/`**: contain frontend files (HTML, JS, CSS, SVG)  
		* **`src/`**: contain main application sorce code
			* **`api/`**:  contain api routes (e.g express.Routers())
				* **`user/`**: contain user related api routes
				* **`auth/`**: contain oauth related api routes
				* **`test/`**: contain test related api routes
			* **`db/`**: contain connector code for mongodb
				* **`model/`**: contain mongoose models
				* **`schema/`**: contain mongoose schema for models
			* **`oauth/`**: contain passport js Strategy setup
				* **`facebook/`**: passport js Strategy setup for facebook (similarly for google and github)
				* **`google/`**:
				* **`facebook/`**:
			* **`util/`**: contain app utility
				* **`file/`**: contain file and folder related utility
				* **`route/`**: similarly for routes 
				* **`unsplash/`**: utility for interacting with unsplash api
				* **`url/`**: utility url modification utility
		* **`package.json`**: Project dependencies and scripts.
	* **`frontend/`**:  ⚛
		* **` src/`**: container jsx and css file
			* **`components/`**: Reusable UI components used throughout the application.
			* **`pages/`**: Top-level components representing different views or pages.
			* **`store/`**: Redux Toolkit store and slices 
			* **`util/`**: Application Utilities
				* **`jjsx.js/`**: JSX jsdocs types
		* **`public/`**: Static assets and the main HTML file.
		* **`dist/`**: React Build files
		* **`page_design/`**: design images for pages
		* **`vite.config.js/`**: vite config file
		* **`package.json`**: Project dependencies and scripts.
	* **`Dockerfile`**: Dockerfile for application
	* **`docker-compose.yml`**: docker compose file with dependency images

## Note
```
- module_name/: any module (e.g util , api , oauth)
	- index.js: it used inplace of module_name.js
	- submodule_name/:
	  - index.js|jsx
	- ....
```
**i  used above module creation patter for better code spliting and function extextions** 

# curl Examples

## Endpoint 1 : /api/top-search
```bash
# return 5 top-searchs
curl http://localhost:5000/api/top-search

# for 10 top-searches default is 5
curl http://localhost:5000/api/top-search?n=10
```
### response
```json
[
  {
    "_id": "69087214bdf5f2a55d3c143e",
    "query": "camping on hills",
    "__v": 0,
    "createdOn": [
      "2025-11-03T09:12:52.869Z",
      "2025-11-03T09:13:05.743Z",
      "2025-11-03T09:13:09.447Z"
    ],
    "search_count": 3,
    "user_ids": ["116686678645029658074"]
  },
  {
    "_id": "690871e9bdf5f2a55d3c143b",
    "query": "hero",
    "__v": 0,
    "createdOn": ["2025-11-03T09:12:09.350Z"],
    "search_count": 1,
    "user_ids": ["116686678645029658074"]
  },.... more
]
```
## Endpoint 2 : api/history
```bash
# for testing use test=y
curl http://localhost:5000/api/history?test=y

# connect.sid value found in browser after logging 
# browserconsole > application > Cookies
# replace connect.sid_value with actual value
curl --cookie "connect.sid=<connect.sid_value>" http://localhost:5000/api/history
```
### response
```json
[
  {
    "_id": "69087214bdf5f2a55d3c143e",
    "query": "camping on hills",
    "__v": 0,
    "createdOn": [
      "2025-11-03T09:12:52.869Z",
      "2025-11-03T09:13:05.743Z",
      "2025-11-03T09:13:09.447Z"
    ],
    "search_count": 3,
    "user_ids": ["116686678645029658074"]
  },
  {
    "_id": "690871e9bdf5f2a55d3c143b",
    "query": "hero",
    "__v": 0,
    "createdOn": ["2025-11-03T09:12:09.350Z"],
    "search_count": 1,
    "user_ids": ["116686678645029658074"]
  },.... more
]
```
## Endpoint 3 : /api/search/?query=query_value
```bash
# for testing use test=y
# unsplace api "/search/photos" endpoint query parameter supported 
# query parameter is must to pass
curl 'http://localhost:5000/api/search/?query=bike%20on%20mountain&test=y'

# connect.sid value found in browser after logging 
# browserconsole > application > Cookies
# replace connect.sid_value with actual value
curl --cookie "connect.sid=<connect.sid_value>" http://localhost:5000/api/search/?query=skyscraper
```
### response

```json
{
  "total": 10000,
  "total_pages": 1000,
  "results": [
    {
      "id": "PhYq704ffdA",
      "created_at": "2017-02-06T18:36:51Z",
      "updated_at": "2025-11-03T07:04:08Z",
      "promoted_at": "2017-02-06T18:36:51Z",
      "width": 6000,
      "height": 4000,
      "color": "#d9f3f3",
      "urls": {
        "raw": "url_to_image",
        "full": "url_to_image",
        "regular": "url_to_image",
        "small": "url_to_image",
        "thumb": "url_to_image",
        "small_s3": "url_to_image"
      },
      "links": {
        "self": "url_to_image",
        "html": "url_to_image",
        "download": "url_to_image",
        "download_location": "url_to_image"
      },
      "likes": 5630,

    } ... more
  ]
}
```