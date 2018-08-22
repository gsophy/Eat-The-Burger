create database burgers_db;
use burgers_db;

Create table burgers
(
    id not null auto_increment,
    burger_name varchar(255) not null,
    devoured boolean not null default 0,
    date timestamp not null default current_timestamp,
    primary key (id)
);