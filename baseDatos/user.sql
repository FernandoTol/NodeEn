-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-10-2021 a las 00:48:41
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `encuesta2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `last_name` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `last_login` datetime DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 0,
  `date_joined` datetime DEFAULT NULL,
  `password` varchar(255) NOT NULL DEFAULT '0',
  `is_superuser` bit(1) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `last_login`, `is_active`, `date_joined`, `password`, `is_superuser`, `user_name`) VALUES
(1, 'luis fernando', 'bañuelos', 'toledo.lufe@gmail.com', '2021-10-08 15:02:05', 1, '2021-10-08 15:02:05', '$2a$10$KA/392usMKJS6JFlj4iHquJKxbXTf.WxiVGWSdRtXlnnvK9puchlq', b'1', 'lufebato'),
(2, 'operador', 'lf', 'lfbanuelos@jot.com.mx', '2021-10-08 15:18:51', 1, '2021-10-08 15:18:51', '$2a$10$W6OYsjGN7Rql9Lc5CHJ6z.1AB.hOERXCDAYK6T.ZFL5prqkXpOuQS', b'1', 'aou'),
(3, 'operador', 'lf', 'idue@jot.com.mx', '2021-10-08 15:20:08', 1, '2021-10-08 15:20:08', '$2a$10$LEisfHPH1qlANZvlzai61Or3B8fXvDopsHqGcu3grLOYsMZ64Pdc2', b'1', 'aou'),
(4, 'operador', 'lf', 'ejemplo@jot.com.mx', '2021-10-08 15:21:31', 1, '2021-10-08 15:21:31', '$2a$10$.ebGQZPDLaicFtGyx.Xi4um8enCVufMUwHb/C59l1oAf5XMi1NINe', b'1', 'eaoeao'),
(5, 'operador', 'lf', 'lfbanueloss@jot.com.mx', '2021-10-08 15:24:52', 1, '2021-10-08 15:24:52', '$2a$10$E..FSARmJNn.9g1zTRDz5unmRCWp5ZlYGCnGA6S4ib6mPsiGqSNH2', b'1', 'lufebato'),
(6, 'luis fernando', 'bañuelos', 'ejewplo@gmail.com', '2021-10-08 15:29:02', 1, '2021-10-08 15:29:02', '$2a$10$3jGpojdtO4H1h9feeHltZuGcs9lDjVMhp5i74NZM07yoR.olMkR9a', b'1', 'lufebato'),
(7, 'luis fernando', 'bañuelos', 'ejemplo@gmail.com', '2021-10-08 15:30:39', 1, '2021-10-08 15:30:39', '$2a$10$ZmuLdcowkxht8kdhQLvf1eWugGDhxeu0N5WE.HpVVjMC9iqvqlcaa', b'1', 'lufebato');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
