DROP TABLE IF EXISTS collections, comics, comic_ratings, ratings;



CREATE TABLE collections (
collection_id serial,
	standard_user_id int NOT NULL,
	premium_user_id int NOT NULL,
	collection_issue_name varchar,
	tradeable boolean,
	is_favorited boolean
);

CREATE TABLE comics (
comic_id serial,
	collection_id int NOT NULL,
	comic_creators varchar NOT NULL,
	issue_date date,
	comic_rating_id int NOT NULL,
	comic_price int,
	publisher varchar
);

CREATE TABLE comic_ratings (
comic_rating_id serial,
	comic_id int NOT NULL,
	rating_id int NOT NULL
);

CREATE TABLE ratings (
rating_id serial,
	comic_rating_id int NOT NULL,
	rating_name varchar NOT NULL
);