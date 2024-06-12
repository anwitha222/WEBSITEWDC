CREATE DATABASE IF NOT EXISTS compassionCrew;

USE compassionCrew;

-- tables as in accordance to the schema diagram, may be changed if need be
CREATE TABLE IF NOT EXISTS users (
    ID int NOT NULL UNIQUE,
    email varchar(30),
    password varchar(50),
    firstName varchar(30),
    lastName varchar(50),
    role varchar(20),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS organisations (
    ID int NOT NULL UNIQUE,
    name varchar(50),
    email varchar(30),
    phoneNo int NOT NULL,
    managerID int,
    FOREIGN KEY (managerID) REFERENCES users(ID),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS events (
    ID int NOT NULL UNIQUE,
    title varchar(50),
    location varchar(225),
    description varchar(225),
    orgID int,
    FOREIGN KEY (orgID) REFERENCES organisations(ID),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS posts (
    ID int NOT NULL UNIQUE,
    description varchar(225),
    status varchar(10),
    date DATE,
    author varchar(30),
    orgID int,
    FOREIGN KEY (orgID) REFERENCES organisations(ID),
    PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS rsvp (
    ID int NOT NULL UNIQUE,
    status varchar(10),
    date DATE,
    eventID int,
    userID int,
    FOREIGN KEY (eventID) REFERENCES events(ID),
    FOREIGN KEY (userID) REFERENCES users(ID),
    PRIMARY KEY (ID)
);


CREATE TABLE IF NOT EXISTS admin (
    ID int NOT NULL UNIQUE,
    date DATE,
    userID int,
    FOREIGN KEY (userID) REFERENCES users(ID)
);



-- Queries to insert new data
INSERT INTO users
VALUES (1, 'email@ccrew.com', 'crewz', 'amelia', 'fule', 'volunteer');

-- Queries to retrieve data
-- SELECT * FROM users;
-- SELECT firstName, lastName FROM users;



-- username and password
-- SELECT * FROM users WHERE ID = @0;

