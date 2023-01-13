DROP TABLE IF EXISTS standard_users, premium_users, collections, comics, comic_ratings, ratings;

CREATE TABLE standard_users (
standard_user_id serial,
user_id int NOT NULL,
collection_id int NOT NULL,
	CONSTRAINT pk_standard_users PRIMARY KEY (standard_user_id),
	CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
	CONSTRAINT collection_id FOREIGN KEY (collection_id) REFERENCES collections (collection_id)
);

CREATE TABLE premium_users (
premium_user_id serial,
	user_id int NOT NULL,
	collection_id int NOT NULL,
	CONSTRAINT pk_premium_users PRIMARY KEY (premium_user_id),
	CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
	CONSTRAINT fk_collection_id FOREIGN KEY (collection_id) REFERENCES collections (collection_id)
);

CREATE TABLE collections (
collection_id serial,
	standard_user_id int NOT NULL,
	premium_user_id int NOT NULL,
	collection_issue_name varchar,
	tradeable boolean,
	is_favorited boolean,
	CONSTRAINT pk_collections PRIMARY KEY (collection_id),
	CONSTRAINT fk_standard_user_id FOREIGN KEY (standard_user_id) REFERENCES standard_users (standard_user_id),
	CONSTRAINT fk_premium_user_id FOREIGN KEY (premium_user_id) REFERENCES premium_users (premium_user_id)
);

CREATE TABLE comics (
comic_id serial,
	collection_id int NOT NULL,
	comic_creators varchar NOT NULL,
	issue_date date,
	comic_rating_id int NOT NULL,
	comic_price int,
	publisher varchar,
	CONSTRAINT pk_comics PRIMARY KEY (comic_id),
	CONSTRAINT fk_collection_id FOREIGN KEY (collection_id) REFERENCES collections (collection_id),
	CONSTRAINT fk_comic_rating_id FOREIGN KEY (comic_rating_id) REFERENCES comic_ratings (comic_rating_id)
);

CREATE TABLE comic_ratings (
comic_rating_id serial,
	comic_id int NOT NULL,
	rating_id int NOT NULL,
	CONSTRAINT pk_comic_ratings PRIMARY KEY (comic_rating_id),
	CONSTRAINT fk_comic_id FOREIGN KEY (comic_id) REFERENCES comics (comic_id),
	CONSTRAINT fk_rating_id FOREIGN KEY (rating_id) REFERENCES ratings (rating_id)
);

CREATE TABLE ratings (
rating_id serial,
	comic_rating_id int NOT NULL,
	rating_name varchar NOT NULL,
	CONSTRAINT pk_ratings PRIMARY KEY (rating_id),
	CONSTRAINT fk_comic_rating_id FOREIGN KEY (comic_rating_id) REFERENCES comic_ratings (comic_rating_id)
);