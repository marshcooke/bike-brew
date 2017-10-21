CREATE TABLE users (
id SERIAL PRIMARY KEY, 
firstname varchar(25), 
username varchar(20) UNIQUE NOT NULL,
password varchar(200)
);

CREATE TABLE breweries (
id SERIAL PRIMARY KEY,
breweryname text,
streetaddress text,
city text, 
state varchar(2), 
zip numeric(9),
latitude numeric(15,4),
longitude numeric(15,4)
);

CREATE TABLE users_breweries (
    users_id integer NOT NULL REFERENCES users,
    breweries_id integer NOT NULL REFERENCES breweries,
    PRIMARY KEY (users_id, breweries_id)
);