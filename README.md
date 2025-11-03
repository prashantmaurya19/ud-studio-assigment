# ud-studio-assignment
-------------

https://github.com/user-attachments/assets/26ae8fa6-3f12-4e75-99fe-e1c0cb4b8e13



https://github.com/user-attachments/assets/530c2593-a4cf-41d1-bdd0-9a841e383822



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


