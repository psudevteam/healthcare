-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: healthcare-db
-- Generation Time: May 18, 2022 at 08:57 AM
-- Server version: 8.0.29
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `desc` varchar(200) NOT NULL,
  `pic` varchar(600) NOT NULL,
  `qty` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `desc`, `pic`, `qty`) VALUES
(1, 'Paracetamol', '7000', 'Obat pereda Demam', 'https://static.hdmall.id/750x450/system/image_attachments/images/000/011/744/original/paracetamol-if-500mg-tab-str-1.jpg', 100),
(2, 'Amoxilin', '6000', 'OBat jengjeriheun', 'https://images.k24klik.com/product/large/apotek_online_k24klik_20211130101224359225_AMOXICILLIN-PHARMALAB-500MG-TAB-100S.jpg', 80),
(3, 'Upixon', '16000', 'Obat Cacing', 'https://images.tokopedia.net/img/cache/700/product-1/2020/7/4/100550299/100550299_06b6e479-9308-4b09-b6ec-39299a521512_786_786.jpg', 75),
(4, 'Promag', '15000', 'Obat asam lambung', 'https://image-cdn.medkomtek.com/ABfGhUV5kWlx5YWP4eQUvnNHLLs=/673x373/smart/klikdokter-media-buckets/medias/2311507/original/007215200_1578449437-Promag_12Tablet_1box_2.jpg', 75);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(200) NOT NULL,
  `role` int NOT NULL DEFAULT '1',
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `role`, `email`, `password`) VALUES
(1, 'Mpun', 2, 'fnny04@gmail.com', 'Sepuluh09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
