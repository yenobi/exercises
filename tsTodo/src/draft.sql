INSERT INTO my_contacts
(last_name, first_name, email, gender)
VALUES
('ANDERSON', 'JILLIAN', 'jill_anderson@mail.com', 'F');

create table easy_drinks
(
drink_name varchar(20) not null,
main varchar(10) not null,
amount1 int not null DEFAULT 1.5,
second VARCHAR(30) not null,
amount2 int not null DEFAULT 1
);

insert into easy_drinks
(drink_name, main, second)
VALUES
('Golubaya luna', 'sodovaya', 'chernich juice');

insert into easy_drinks
(drink_name, main, second)
VALUES
('Laim friz', 'sprite', 'sok laim');

insert into easy_drinks
(drink_name, main, second)
VALUES
('One tree', 'sodovaya', 'visnya juice');

insert into easy_drinks
(drink_name, main, second)
VALUES
('Borzaya', 'sodovaya','grapefruit juice');
-----
insert into easy_drinks
(drink_name, main, amount1, second, amount2)
VALUES
('vot tebe', 'persik nek', 3, 'ananas juice', 1);

insert into easy_drinks
(drink_name, main, amount1, second, amount2)
VALUES
('kiss', 'visnya j', 2, 'apricot', 7);

insert into easy_drinks
(drink_name, main, amount1, second, amount2)
VALUES
('hot gold', 'apricot n', 3, 'apelsin j', 6);

insert into easy_drinks
(drink_name, main, amount1, second, amount2)
VALUES
('frog', 'cold tea', 3, 'limonad', 5);

insert into easy_drinks
(drink_name, main, amount1, second, amount2)
VALUES
('soda plus', 'sodovaya', 2, 'vinograd j', 1);

insert into easy_drinks
(drink_name, main, amount1, second, amount2)
VALUES
('gran sum', 'apple j, 2, 'hot tea', 6);