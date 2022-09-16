insert into login (login_id, login, haslo) values (1, 'login', 'haslo');
insert into login (login_id, login, haslo) values (2, 'teacher1', 'haslo');
insert into login (login_id, login, haslo) values (3, 'teacher2', 'haslo');
insert into login (login_id, login, haslo) values (4, 'teacher3', 'haslo');
insert into login (login_id, login, haslo) values (5, 'teacher4', 'admin');

insert into nauczyciel (nauczyciel_id, name, surname, login_id) values (1, 'Jan', 'Kowalski', 1);
insert into nauczyciel (nauczyciel_id, name, surname, login_id) values (2, 'Marcin', 'Kowalski', 2);
insert into nauczyciel (nauczyciel_id, name, surname, login_id) values (3, 'Pawel', 'Marceli', 3);
insert into nauczyciel (nauczyciel_id, name, surname, login_id) values (4, 'Agnieszka', 'Czad', 4);
insert into nauczyciel (nauczyciel_id, name, surname, login_id) values (5, 'Natalia', 'Balwan', 5);

insert into test (czas_trwania, data_uruchomienia, data_zakonczenia, nazwa, token, nauczyciel_id, czy_aktywny) values (30, '2022-09-14', '2022-09-16', 'test1', 'token', 1, true);
insert into test (czas_trwania, data_uruchomienia, data_zakonczenia, nazwa, token, nauczyciel_id, czy_aktywny) values (30, '2022-09-14', '2022-09-16', 'test2', 'token2', 1, false);

insert into pytanie (pytanie_id, tresc, test_id) values (1, 'ile to 2+2?', '1');
insert into pytanie (pytanie_id, tresc, test_id) values (2, 'ile to 2+3?', '1');
insert into pytanie (pytanie_id, tresc, test_id) values (3, 'ile to 3+3?', '1');

insert into pytanie (pytanie_id, tresc, test_id) values (4, 'ile masz lat?', '2');
insert into pytanie (pytanie_id, tresc, test_id) values (5, 'ile masz wzrostu?', '2');

insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (true, '4', 1);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '5', 1);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '6', 1);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '0', 1);

insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '4', 2);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (true, '5', 2);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '6', 2);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '0', 2);

insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '4', 3);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '5', 3);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (true, '6', 3);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '0', 3);

insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (true, '4', 4);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '5', 4);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '6', 4);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '0', 4);

insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (true, '4', 5);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '5', 5);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '6', 5);
insert into odpowiedz (czy_poprawna, tresc, pytanie_id) values (false, '0', 5);