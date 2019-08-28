BEGIN;
DROP table if exists users, tweets, comments CASCADE;
create table users (
  id serial Primary key,
  name varchar(20),
  email varchar UNIQUE,
  password varchar(20),
  imgUrl varchar,
  gender varchar(10),
  birthday varchar,
  country varchar(30),
  bio text
);

create table tweets(
  id serial primary key,
  tweetcontent text NOT NULL,
  tweetpublishTime timestamp,
  user_id integer references users(id)
);

create table comments(
  id serial primary key,
  commentcontent text,
  commentpublishTime timestamp,
  user_id integer references users(id),
  tweet_id integer references tweets(id)
);

insert into users (name,email,password,imgUrl,gender,birthday, country, bio) values ('Fares','fares@gmail.com','fares1998','hgjjjkhghghjjhj','male','29/5/1998','Palestine','Web fullstack Developer');
insert into tweets (user_id,tweetcontent,tweetpublishTime) values (1,'Be optimistic ^_^','2019-08-27T13:08:15.369Z');
insert into comments (user_id,commentcontent,commentpublishTime) values (1,'nice','2019-08-27T13:08:15.369Z');
COMMIT;