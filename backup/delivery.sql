-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Трв 31 2023 р., 18:34
-- Версія сервера: 8.0.30
-- Версія PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `delivery`
--

-- --------------------------------------------------------

--
-- Структура таблиці `coupon`
--

CREATE TABLE `coupon` (
  `id` int NOT NULL,
  `code` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` decimal(5,2) NOT NULL,
  `title` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `coupon`
--

INSERT INTO `coupon` (`id`, `code`, `discount`, `title`) VALUES
(1, '001000', '10.00', 'Discount 10'),
(2, '002000', '20.00', 'Discount 20'),
(3, '000999', '9.99', 'Discount 9.99');

-- --------------------------------------------------------

--
-- Структура таблиці `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп даних таблиці `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230526102819', '2023-05-26 13:28:39', 1015),
('DoctrineMigrations\\Version20230530152011', '2023-05-30 18:20:52', 127),
('DoctrineMigrations\\Version20230530152625', '2023-05-30 18:26:37', 131),
('DoctrineMigrations\\Version20230530152750', '2023-05-30 18:27:59', 12),
('DoctrineMigrations\\Version20230530152922', '2023-05-30 18:29:37', 26),
('DoctrineMigrations\\Version20230530154438', '2023-05-30 18:44:45', 4),
('DoctrineMigrations\\Version20230530154616', '2023-05-30 18:46:21', 10),
('DoctrineMigrations\\Version20230530154718', '2023-05-30 18:47:36', 15);

-- --------------------------------------------------------

--
-- Структура таблиці `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `order`
--

CREATE TABLE `order` (
  `id` int NOT NULL,
  `shop_id` int DEFAULT NULL,
  `products_data` json NOT NULL,
  `coupon_data` json NOT NULL,
  `date` datetime NOT NULL,
  `client_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_email` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_phone` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `order`
--

INSERT INTO `order` (`id`, `shop_id`, `products_data`, `coupon_data`, `date`, `client_name`, `client_email`, `client_phone`, `client_address`) VALUES
(5, 2, '[{\"id\": 10, \"name\": \"Neapolitan Pizza\", \"count\": 6, \"price\": \"35.78\", \"totalPrice\": \"214.68\"}, {\"id\": 13, \"name\": \"Sicilian Pizza\", \"count\": 1, \"price\": \"93.95\", \"totalPrice\": \"93.95\"}, {\"id\": 15, \"name\": \"California Pizza\", \"count\": 7, \"price\": \"124.30\", \"totalPrice\": \"870.10\"}, {\"id\": 16, \"name\": \"Detroit Pizza\", \"count\": 4, \"price\": \"117.48\", \"totalPrice\": \"469.92\"}]', '[]', '2023-05-30 18:40:14', 'dasd', 'dasdas', 'dasda', 'dasdas'),
(6, 2, '[{\"id\": 10, \"name\": \"Neapolitan Pizza\", \"count\": 6, \"price\": \"35.78\", \"totalPrice\": \"214.68\"}, {\"id\": 13, \"name\": \"Sicilian Pizza\", \"count\": 1, \"price\": \"93.95\", \"totalPrice\": \"93.95\"}, {\"id\": 15, \"name\": \"California Pizza\", \"count\": 7, \"price\": \"124.30\", \"totalPrice\": \"870.10\"}, {\"id\": 16, \"name\": \"Detroit Pizza\", \"count\": 4, \"price\": \"117.48\", \"totalPrice\": \"469.92\"}]', '[]', '2023-05-30 20:32:01', 'adasdas', 'dasdas@dasd.dasd', '380123123123', 'вулиця Бакала, 7а, Коцюбинське, Київська обл., Україна, 08298'),
(7, 2, '[{\"id\": 10, \"name\": \"Neapolitan Pizza\", \"count\": 6, \"price\": \"35.78\", \"totalPrice\": \"214.68\"}, {\"id\": 13, \"name\": \"Sicilian Pizza\", \"count\": 1, \"price\": \"93.95\", \"totalPrice\": \"93.95\"}, {\"id\": 15, \"name\": \"California Pizza\", \"count\": 7, \"price\": \"124.30\", \"totalPrice\": \"870.10\"}, {\"id\": 16, \"name\": \"Detroit Pizza\", \"count\": 4, \"price\": \"117.48\", \"totalPrice\": \"469.92\"}]', '[]', '2023-05-30 20:33:01', 'adasdas', 'dasdas@dasd.dasd', '380123123123', 'вулиця Бакала, 7а, Коцюбинське, Київська обл., Україна, 08298'),
(8, 2, '[{\"id\": 10, \"name\": \"Neapolitan Pizza\", \"count\": 6, \"price\": \"35.78\", \"totalPrice\": \"214.68\"}, {\"id\": 13, \"name\": \"Sicilian Pizza\", \"count\": 1, \"price\": \"93.95\", \"totalPrice\": \"93.95\"}, {\"id\": 15, \"name\": \"California Pizza\", \"count\": 7, \"price\": \"124.30\", \"totalPrice\": \"870.10\"}, {\"id\": 16, \"name\": \"Detroit Pizza\", \"count\": 4, \"price\": \"117.48\", \"totalPrice\": \"469.92\"}]', '[]', '2023-05-30 20:33:50', 'Михайло Марчук', 'mikemarchuk@gmail.com', '0973613939', 'проспект Героїв Сталінграду, 7, кв 109, Харків, Харківська область, Україна, 61000'),
(9, 2, '[{\"id\": 10, \"name\": \"Neapolitan Pizza\", \"count\": 6, \"price\": \"35.78\", \"totalPrice\": \"214.68\"}, {\"id\": 13, \"name\": \"Sicilian Pizza\", \"count\": 1, \"price\": \"93.95\", \"totalPrice\": \"93.95\"}, {\"id\": 15, \"name\": \"California Pizza\", \"count\": 7, \"price\": \"124.30\", \"totalPrice\": \"870.10\"}, {\"id\": 16, \"name\": \"Detroit Pizza\", \"count\": 4, \"price\": \"117.48\", \"totalPrice\": \"469.92\"}]', '[]', '2023-05-30 20:38:32', 'Михайло Марчук', 'mikemarchuk@gmail.com', '0973613939', 'Kyiv'),
(10, 2, '[{\"id\": 10, \"name\": \"Neapolitan Pizza\", \"count\": 1, \"price\": \"35.78\", \"totalPrice\": \"35.78\"}, {\"id\": 11, \"name\": \"Chicago Pizza\", \"count\": 1, \"price\": \"111.12\", \"totalPrice\": \"111.12\"}]', '[]', '2023-05-30 20:42:04', 'Михайло Марчук', 'mikemarchuk@gmail.com', '0938583065', 'ГАГАРИНА 88'),
(11, 1, '[{\"id\": 1, \"name\": \"Hamburger\", \"count\": 1, \"price\": \"74.60\", \"totalPrice\": \"74.60\"}, {\"id\": 2, \"name\": \"Cheeseburger\", \"count\": 9, \"price\": \"94.14\", \"totalPrice\": \"847.26\"}]', '{\"id\": 3, \"code\": \"000999\", \"title\": \"Discount 9.99\", \"discount\": \"9.99\"}', '2023-05-30 20:42:36', 'Михайло Марчук', 'mikemarchuk@gmail.com', '0973613939', 'Kyiv'),
(12, 2, '[{\"id\": 10, \"name\": \"Neapolitan Pizza\", \"count\": 1, \"price\": \"35.78\", \"totalPrice\": \"35.78\"}]', '[]', '2023-05-31 17:52:56', 'Михайло Марчук', 'mikemarchuk@gmail.com', '0973613939', 'Kyiv');

-- --------------------------------------------------------

--
-- Структура таблиці `shop`
--

CREATE TABLE `shop` (
  `id` int NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `shop`
--

INSERT INTO `shop` (`id`, `name`, `address`) VALUES
(1, 'Fast Food Shop', ''),
(2, 'Pizza Shop', ''),
(3, 'Health Food Shop', ''),
(4, 'Burger Shop', ''),
(5, 'Sushi Shop', ''),
(6, 'Meat Shop', ''),
(7, 'Home Food Shop', ''),
(8, 'Fish Shop', '');

-- --------------------------------------------------------

--
-- Структура таблиці `shop_product`
--

CREATE TABLE `shop_product` (
  `id` int NOT NULL,
  `shop_id` int NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `shop_product`
--

INSERT INTO `shop_product` (`id`, `shop_id`, `name`, `price`) VALUES
(1, 1, 'Hamburger', '74.60'),
(2, 1, 'Cheeseburger', '94.14'),
(3, 1, 'Sandwich', '56.79'),
(4, 1, 'Burrito', '95.35'),
(5, 1, 'Taco', '98.33'),
(6, 1, 'Hot dog', '77.83'),
(7, 1, 'Fried chicken', '85.68'),
(8, 1, 'Pizza', '115.78'),
(9, 1, 'Onion ring', '14.89'),
(10, 2, 'Neapolitan Pizza', '35.78'),
(11, 2, 'Chicago Pizza', '111.12'),
(12, 2, 'New York-Style Pizza', '85.71'),
(13, 2, 'Sicilian Pizza', '93.95'),
(14, 2, 'Greek Pizza', '105.35'),
(15, 2, 'California Pizza', '124.30'),
(16, 2, 'Detroit Pizza', '117.48'),
(17, 2, 'St. Louis Pizza', '127.52'),
(18, 2, 'Types of Pizza Crust', '127.52'),
(19, 3, 'Avocados', '62.62'),
(20, 3, 'Bananas', '69.99'),
(21, 3, 'Blueberries', '75.78'),
(22, 3, 'Apples', '56.04'),
(23, 3, 'Strawberries', '64.88'),
(24, 3, 'Lemons', '90.07'),
(25, 3, 'Broccoli', '74.73'),
(26, 3, 'Cucumber', '80.98'),
(27, 3, 'Garlic', '59.88'),
(28, 3, 'Cauliflower', '89.21'),
(29, 3, 'Carrots', '84.41'),
(30, 3, 'Tomatoes', '81.72'),
(31, 4, 'Burger Fortress', '88.26'),
(32, 4, 'The Burger Dynasty ', '71.84'),
(33, 4, 'Atlas Burger', '88.26'),
(34, 4, 'Burger Horizon', '82.27'),
(35, 4, 'Burger Bribe', '86.53'),
(36, 4, 'Burger Blvd', '106.78'),
(37, 4, 'Burger Bistro', '86.73'),
(38, 4, 'Master Burger ', '82.71'),
(39, 4, 'The Prime Burger', '108.72'),
(40, 4, 'The Epic Burger', '84.22'),
(41, 4, 'Burger Wagon', '70.83'),
(42, 4, 'Burger Mayor', '77.04'),
(43, 4, 'The Burger Dynasty ', '71.84'),
(44, 5, 'California Roll', '71.12'),
(45, 5, 'Shrimp Tempura Roll', '68.23'),
(46, 5, 'Cucumber Roll', '65.53'),
(47, 5, 'Philadelphia Roll', '50.96'),
(48, 5, 'Alaska Roll', '98.30'),
(49, 5, 'Dragon Roll', '91.36'),
(50, 5, 'Spicy Tuna Roll', '71.55'),
(51, 6, 'Pork', '114.32'),
(52, 6, 'Beef', '126.05'),
(53, 6, 'Lamb and Mutton', '120.77'),
(54, 6, 'Chicken', '120.67'),
(55, 6, 'Turkey', '83.88'),
(56, 6, 'Venison', '83.83'),
(57, 6, 'Duck', '124.35'),
(58, 6, 'Wild Boar', '98.26'),
(59, 6, 'Bison', '115.68'),
(60, 6, 'Goose', '109.01'),
(61, 6, 'Rabbit', '83.73'),
(62, 6, 'Pheasant', '114.32'),
(63, 6, 'Goat Meat', '124.47'),
(64, 7, 'Pork tenderloin', '101.97'),
(65, 7, 'Stew beef', '122.12'),
(66, 7, 'Ham', '99.88'),
(67, 7, 'Butter', '101.02'),
(68, 7, 'Cream', '110.96'),
(69, 7, 'Yogurt', '124.42'),
(70, 7, 'Chocolate', '100.81'),
(71, 7, 'Biscuits', '90.24'),
(72, 8, 'Swedish', '74.87'),
(73, 8, 'Sardine', '57.97'),
(74, 8, 'Poseidon', '48.97'),
(75, 8, 'Neptune', '42.03'),
(76, 8, 'Cheeto', '61.55'),
(77, 8, 'Sparky', '52.19'),
(78, 8, 'Swim Shady', '57.04'),
(79, 8, 'Ninja', '70.99');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Індекси таблиці `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Індекси таблиці `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_F52993984D16C4DD` (`shop_id`);

--
-- Індекси таблиці `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `shop_product`
--
ALTER TABLE `shop_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D07944874D16C4DD` (`shop_id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `order`
--
ALTER TABLE `order`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблиці `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблиці `shop_product`
--
ALTER TABLE `shop_product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_F52993984D16C4DD` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `shop_product`
--
ALTER TABLE `shop_product`
  ADD CONSTRAINT `FK_D07944874D16C4DD` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
