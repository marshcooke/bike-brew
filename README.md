# BikeBrewMN

BikeBrewMN is a web application combining biking and breweries in Minnesota. The database contains every brewery's information in the state of Minnesota and allows users to save their favorite breweries. Additionally, users have an interactive map which populates their favorite breweries along with their chosen bike route and diections. 

[ ] Link to the live version of the app if it's hosted on Heroku.

- [Take a look at my project scope here](https://docs.google.com/document/d/1RVb7cJbX4B_1CxbWtwK6yrFTSbYnUJyGIuLqZl9dS1c/edit?usp=sharing)

## Built With

SEAN stack (AngularJS, ExpressJS, Node.JS, PostgreSQL), Passport, ng-map, Bootstrap, FontAwesome Icons

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- npm install dependencies

### Installing

- Execute the ```sqlstuff.sql``` file to find the base of the database. However, the data will not automatically populate. 

## Screen Shot

- Homepage
![Homepage](/server/public/images/homepage.png "Homepage")
- Minnesota Breweries
![Minnesota Breweries](/server/public/images/mn-breweries.png "Minnesota Breweries")
- Favorite Breweries
![Favorite Breweries](/server/public/images/favorite-breweries.png "Favorite Breweries")
- Map
![Map](/server/public/images/map.png "Map")
- Mapped Directions
![Mapped Directions](/server/public/images/map-directions.png "Mapped Directions")
- Directions
![Directions](/server/public/images/directions.png "Directions")

### Completed Features

High level list of items completed:

- [x] Curated database with Minnesota Brewery names and cities
- [X] Ability for users to select their favorite Minnesota Breweries
- [X] Users easily see where their favorite breweries are on a map
- [X] Users search for bike routes between two locations and are able to see where the route will lead them with an overlay of their favorite breweries 
- [X] Users are able to adjust their route by dragging the determined route; directions automatically update
- [X] Turn-by-turn bicylce directions are available for users
- [X] Users are able to interact with with BikeBrewMN through social media

### Next Steps

Features that you would like to add at some point in the future:

- [ ] Mobile responsive design
- [ ] Expand information within the brewery database (open hours, website, social media, etc.) / add BreweryDB API connection
- [ ] Incorporate a notification/alert system that confirms to the user that each brewery button they have selected has been selected
- [ ] More dynamic interaction between brewery information and map 
- [ ] Change the pin design on the map

## Authors

* Sarah Cooke

## Acknowledgments

* Passport initial set up thanks to Prime instructors
* ng-map guidance from [Jen Show](https://github.com/jdshow), [Abdi Suleman](https://github.com/abdisuleman12), and [Tom Ritland](https://github.com/tritland)
* Shoutout to my beer loving friend [Alex Hand](https://github.com/AlexJHand) for SQL and Brewery support
* Thanks to beer and bike loving comrade on the adventure [Katie Campbell](https://github.com/katyasoup)