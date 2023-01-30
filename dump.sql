--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    duration text NOT NULL,
    created_at text NOT NULL
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: mylist; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.mylist (
    id integer NOT NULL,
    movie_id integer NOT NULL,
    status text NOT NULL,
    created_at text NOT NULL
);


--
-- Name: mylist_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.mylist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: mylist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.mylist_id_seq OWNED BY public.mylist.id;


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: mylist id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.mylist ALTER COLUMN id SET DEFAULT nextval('public.mylist_id_seq'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (1, 'Titanic', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (2, 'Lagoa Azul', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (3, 'Um Dia', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (4, 'Gênio Indomável', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (5, 'O Contador', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (6, 'A Grande Aposta', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (7, 'Truque de Mestre', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (9, 'Cinderela', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (10, 'Rei Leão', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (11, 'A Sociedade dos Poetas Mortos', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (12, 'Fratura', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (13, 'Um Sonho de Liberdade', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (14, 'Versões de Um Crime', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (15, 'Frozen', 'a', '2h', '2023-01-25');
INSERT INTO public.movies VALUES (16, 'Frozen', 'a', '2h', '2023-01-25');


--
-- Data for Name: mylist; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.mylist VALUES (12, 14, 'unwatched', '2023-01-25');
INSERT INTO public.mylist VALUES (13, 7, 'watched', '2023-01-25');
INSERT INTO public.mylist VALUES (14, 4, 'watched', '2023-01-25');
INSERT INTO public.mylist VALUES (15, 5, 'unwatched', '2023-01-25');
INSERT INTO public.mylist VALUES (16, 6, 'watched', '2023-01-25');
INSERT INTO public.mylist VALUES (17, 3, 'watched', '2023-01-25');
INSERT INTO public.mylist VALUES (18, 13, 'watched', '2023-01-25');


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 16, true);


--
-- Name: mylist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.mylist_id_seq', 18, true);


--
-- Name: movies movies_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pk PRIMARY KEY (id);


--
-- Name: mylist mylist_movie_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.mylist
    ADD CONSTRAINT mylist_movie_id_key UNIQUE (movie_id);


--
-- Name: mylist mylist_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.mylist
    ADD CONSTRAINT mylist_pk PRIMARY KEY (id);


--
-- Name: mylist mylist_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.mylist
    ADD CONSTRAINT mylist_fk0 FOREIGN KEY (movie_id) REFERENCES public.movies(id);


--
-- PostgreSQL database dump complete
--

