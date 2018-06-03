--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.8
-- Dumped by pg_dump version 9.6.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "firstName" character varying(40),
    "lastName" character varying(254),
    role character varying(40),
    password text,
    username text,
    email text,
    "recoveryQuestion" text,
    "authorization" boolean NOT NULL,
    "recoveryAnswer" text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "firstName", "lastName", role, password, username, email, "recoveryQuestion", "authorization", "recoveryAnswer") FROM stdin;
1	departament	\N	departament	departament	departament	onlineuniversity@gmail.com	\N	t	\N
2	ciprian	ciprian	student	ciprian	ciprian	ciprian	ciprian	f	ciprian
4	test1	test1	student	test1	test1	test1	test1	f	test1
5	test2	test2	student	test2	test2	test2	test2	f	test2
6	test3	test3	student	test3	test3	test3	test3	f	test3
7	test4	test4	student	test4	test4	test4	test4	f	test4
9	testest5t4	testtest54	student	test4test5	test5	test4test5	test4test5	f	test4test5
11	cip	cip	student	cip	cip	cip	cip	f	cip
12	av	av	student	av	av	av	av	f	av
13	11	11	student	11	11	11	11	f	11
14	1122	1122	student	1122	22	1122	1122	f	1122
15	adf	adf	student	adf	adf	adf	adf	f	adf
16	aaaaaa	aaaaaa	student	aaaaaa	aaaaaa	aaaaaa	aaaaaa	f	aaaaaa
17	ttets	ttets	student	ttets	ttets	ttets	ttets	f	ttets
18	ax	ax	student	ax	ax	ax	ax	f	ax
19	s	s	student	s	s	s	s	f	s
20	ot	ot	student	ot	ot	ot	ot	f	ot
21	\N	\N	\N	\N	\N	\N	\N	f	\N
22	\N	\N	\N	\N	\N	\N	\N	f	\N
23	\N	\N	\N	\N	\N	\N	\N	f	\N
24	\N	\N	\N	\N	\N	\N	\N	f	\N
25	zzzh	zzzh	student	zzzh	zzzh	zzzzh	zzzh	f	zzzh
26	\N	\N	\N	\N	\N	\N	\N	f	\N
27	\N	\N	\N	\N	\N	\N	\N	f	\N
28	\N	\N	\N	\N	\N	\N	\N	f	\N
29	\N	\N	\N	\N	\N	\N	\N	f	\N
30	jsonn	jsonn	student	jsonn	jsonn	jsonn	jsonn	f	jsonn
31	resp test	resp test	student	resp test	resp test	resp test	resp test	f	resp test
32	t2t2	t2t2	student	t2t2	t2t2	t2t2	t2t2	f	t2t2
33	redirect	redirect	student	redirect	redirect	redirect	redirect	f	redirect
36	ciprian22	ciprian22	student	ciprian22	ciprian22	ciprian22	ciprian22	f	ciprian22
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 36, true);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

