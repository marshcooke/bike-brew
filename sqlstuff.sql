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