create database spoonshot;

use spoonshot;

create table books_inventory (book_id varchar(100) primary key not null,
book_title varchar(100),
book_author varchar(100),
book_stock int default 0);


select * from books_inventory;

describe books_inventory;
