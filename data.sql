-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2025 at 04:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `productID` varchar(255) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `customerName` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `transactionDate` datetime DEFAULT NULL,
  `createBy` varchar(255) DEFAULT NULL,
  `createOn` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `productID`, `productName`, `amount`, `customerName`, `status`, `transactionDate`, `createBy`, `createOn`, `createdAt`, `updatedAt`) VALUES
(1372, '10001', 'Test 1', '1000', 'abc', 0, '2022-07-10 04:14:52', 'abc', '2022-07-10 04:14:52', '2025-10-04 06:44:52', '2025-10-04 12:08:28'),
(1373, '10002', 'Test 2', '2000', 'abc', 0, '2022-07-11 06:14:52', 'abc', '2022-07-10 06:14:52', '2025-10-04 06:49:42', '2025-10-04 06:49:42'),
(1374, '10001', 'Test 1', '1000', 'abc', 0, '2022-08-10 05:14:52', 'abc', '2022-07-10 05:14:52', '2025-10-04 13:36:53', '2025-10-04 13:36:53'),
(1375, '10002', 'Test 2', '1000', 'abc', 1, '2022-08-10 06:10:52', 'abc', '2022-07-10 06:10:52', '2025-10-04 13:38:43', '2025-10-04 13:38:43'),
(1376, '10001', 'Test 1', '1000', 'abc', 0, '2022-08-10 06:11:52', 'abc', '2022-07-10 06:11:52', '2025-10-04 12:30:48', '2025-10-04 12:30:48'),
(1377, '10002', 'Test 2', '2000', 'abc', 0, '2022-08-12 06:14:52', 'abc', '2022-07-10 06:14:52', '2025-10-04 12:29:46', '2025-10-04 12:38:46'),
(1378, '10001', 'Test 1', '1000', 'abc', 0, '2022-08-12 07:11:52', 'abc', '2022-07-10 07:11:52', '2025-10-04 13:48:25', '2025-10-04 13:48:25'),
(1379, '10002', 'Test 2', '1000', 'abc', 1, '2022-09-13 04:14:52', 'abc', '2022-07-10 04:14:52', '2025-10-04 13:49:05', '2025-10-04 13:49:05'),
(1380, '10001', 'Test 1', '1000', 'abc', 0, '2022-09-13 06:14:52', 'abc', '0000-00-00 00:00:00', '2025-10-04 13:50:20', '2025-10-04 13:50:20'),
(1381, '10002', 'Test 2', '2000', 'abc', 0, '2022-09-14 02:11:52', 'abc', '2022-07-10 02:11:52', '2025-10-04 13:51:08', '2025-10-04 13:51:08'),
(1382, '10001', 'Test 1', '1000', 'abc', 0, '2022-09-14 03:14:52', 'abc', '2022-07-10 03:14:52', '2025-10-04 13:57:39', '2025-10-04 14:04:24'),
(1383, '10002', 'Test 2', '1000', 'abc', 1, '2022-08-15 06:14:52', 'abc', '2022-07-10 06:14:52', '2025-10-04 14:06:32', '2025-10-04 14:06:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
