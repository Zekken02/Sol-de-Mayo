-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2021 a las 01:52:53
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sdm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area`
--

CREATE TABLE `area` (
  `id` int(3) NOT NULL,
  `n_area` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `area`
--

INSERT INTO `area` (`id`, `n_area`, `descripcion`) VALUES
(1, 'escolar', ''),
(2, 'tecnica', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(3) NOT NULL,
  `tipo` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `tipo`, `descripcion`) VALUES
(1, 'lapices', 'lapices varios'),
(2, 'gomas', 'gomas varias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(3) NOT NULL,
  `n_marca` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id`, `n_marca`, `descripcion`) VALUES
(1, 'bic', ''),
(2, 'faber castell', ''),
(3, 'plantec', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(8) NOT NULL,
  `nombre` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8mb4_spanish_ci NOT NULL,
  `foto` varchar(160) COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` int(6) NOT NULL,
  `stock` int(6) NOT NULL,
  `id_proveedor` int(3) NOT NULL,
  `id_categoria` int(3) NOT NULL,
  `id_marca` int(3) NOT NULL,
  `id_area` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `foto`, `precio`, `stock`, `id_proveedor`, `id_categoria`, `id_marca`, `id_area`) VALUES
(1, 'Lapiz', 'Lapiz HB Bic', '', 30, 30, 1, 1, 1, 1),
(2, 'Lapiz', 'Lapiz HB FaberCastell', '', 220, 15, 1, 1, 2, 2),
(3, 'Lapiz', 'Lapiz 2B FaberCastell', '', 220, 15, 1, 1, 2, 2),
(4, 'Lapiz', 'Lapiz 2H FaberCastell', '', 220, 15, 1, 1, 2, 2),
(5, 'Lapiz', 'Lapiz HB Plantec', '', 50, 15, 1, 1, 3, 2),
(6, 'Goma', 'Goma blanca FaberCastell', '', 60, 30, 1, 2, 2, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `area`
--
ALTER TABLE `area`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
