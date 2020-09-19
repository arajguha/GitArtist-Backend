# GitArtistBackend
Backend code for GitArtist project

## Routes
 
1. ### createProjectRoute: 
  Create a new directory(if not exists) with project name in the GitArtist root directory.
  
  Method type: Post
 
2. ### fetchProjectsRoute: 
  Get the list of projects from GitArtist root directory and returns an array of json objects as response. 
  
  Method type: Get

3. ### gitInitRoute:
   Initialize an exisiting project as git repo.
   
   Method type: POST
   
4. ### projectSummaryRoute:
   Returns a ProjectCard object with project details
   
   Method type: GET
  
