# BikeBrewMN

BikeBrewMN is a web application combining biking and breweries in Minnesota. The database contains every brewery's information in the state of Minnesota and allows users to save their favorite breweries. Additionally, users have an interactive map which populates their favorite breweries along with their chosen bike route and diections. 

[ ] Link to the live version of the app if it's hosted on Heroku.

## Built With

SEAN stack, Passport, ng-map, Bootstrap

## Getting Started

[ ] These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

[ ] Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here


### Installing

[ ] Steps to get the development environment running.
See sqlstuff.sql 

```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
```

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items completed.

- [x] Feature a
- [x] Feature b

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Mobile responsive design
- [ ] Add and expand information within the brewery database
- [ ] More dynamic interaction between brewery information and map 

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Sarah Cooke


## Acknowledgments

* Passport initial set up thanks to Prime instructors
* ng-map guidance from Jen Show, Abdi Suleman, and Tom Ritland
* Shoutout to my beer loving friend Alex Hand for SQL support
* Thanks to beer and bike loving comrade on the adventure Katie Campbell