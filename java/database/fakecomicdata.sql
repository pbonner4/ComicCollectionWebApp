ALTER TABLE collections RENAME COLUMN privated TO is_private

CREATE TABLE comics (
	comic_id serial,
	comic_title varchar NOT NULL,
	comic_description varchar NOT NULL,
	comic_date date,
	comic_price int,
	comic_creator varchar NOT NULL,
	comic_publisher varchar
);

INSERT INTO comics (comic_title, comic_description, 
					comic_date, comic_price, comic_creator, comic_publisher)
VALUES ('X-Men Days of Future Past', 
		' It deals with a dystopian future in which mutants are incarcerated in internment camps. An adult Kate Pryde transfers her mind into her younger self, the present-day Kitty Pryde, who brings the X-Men to prevent a fatal moment in history that triggers anti-mutant hysteria', 
		'01/01/1981',20, 'Chris Claremont', 'Marvel' );

INSERT INTO comics (comic_title, comic_description, 
					comic_date, comic_price, comic_creator, comic_publisher)
VALUES ('Annihilation','Annihilation is a 2006 crossover storyline published by Marvel Comics, highlighting several outer space-related characters in the Marvel Universe.','11/01/2005',80,' Gabriele DellOtto','Marvel')

INSERT INTO comics (comic_title, comic_description, 
					comic_date, comic_price, comic_creator, comic_publisher)
VALUES ('Daredevil: Born Again',
		'The story details Daredevils descent into insanity and destitution at the Kingpins hands, as well as a subsequent struggle to build a new life for himself. 
		','09/01/1986', 22, 'Frank Miller', 'Marvel')
		
INSERT INTO comics (comic_title, comic_description, 
					comic_date, comic_price, comic_creator, comic_publisher)
VALUES ('Batman: The Killing Joke','Batman: The Killing Joke is a 1988 DC Comics one-shot graphic novel featuring the characters Batman and the Joker written by Alan Moore and illustrated by Brian Bolland.','03/01/1988',20 , 'Alan Moore', 'DC Comics')

INSERT INTO comics (comic_title, comic_description, 
					comic_date, comic_price, comic_creator, comic_publisher)
VALUES ('Watchmen','Watchmen is set in an alternate reality that closely mirrors the contemporary world of the 1980s. The primary difference is the presence of superheroes. The point of divergence occurs in the year 1938. Their existence in this version of the United States is shown to have dramatically affected and altered the outcomes of real-world events such as the Vietnam War and the presidency of Richard Nixon.'
		,'09/01/1986', 20, 'ALan Moore', 'DC Comics')
		
SELECT comic_id, comic_title, comic_description, comic_date, comic_price, comic_creator, comic_publisher
FROM comics
WHERE comic_id = 1
GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO final_capstone_appuser;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA public
TO final_capstone_appuser;

