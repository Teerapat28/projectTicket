-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2021 at 03:51 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `Address_ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `AddressStatus` tinyint(1) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `District` varchar(20) NOT NULL,
  `Province` varchar(20) NOT NULL,
  `Zipcode` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_ID` int(11) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Root` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Admin_ID`, `Username`, `Password`, `Root`) VALUES
(1, 'Matichai', '1234', 0),
(2, 'Teerapat', '1234', 0),
(3, 'ROOT', '1234', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hall`
--

CREATE TABLE `hall` (
  `Hall_ID` int(11) NOT NULL,
  `HallName` varchar(20) NOT NULL,
  `HallStatus` tinyint(1) NOT NULL,
  `HallValue` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hall`
--

INSERT INTO `hall` (`Hall_ID`, `HallName`, `HallStatus`, `HallValue`) VALUES
(1, 'ImpactExhCenter01', 1, 15000),
(2, 'ImpactExhCenter02', 1, 15000),
(3, 'ImpactExhCenter03', 1, 15000),
(4, 'ImpactExhCenter04', 1, 15000);

-- --------------------------------------------------------

--
-- Table structure for table `promotion`
--

CREATE TABLE `promotion` (
  `Prom_ID` int(11) NOT NULL,
  `PromName` varchar(20) NOT NULL,
  `DiscountPrice` double NOT NULL,
  `PromCode` varchar(10) NOT NULL,
  `PromDes` varchar(50) NOT NULL,
  `AdminID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `receipts`
--

CREATE TABLE `receipts` (
  `Rep_ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ShowID` int(11) NOT NULL,
  `ShowDateTimeID` int(11) NOT NULL,
  `ZoneID` int(11) NOT NULL,
  `SeatID` int(11) DEFAULT NULL,
  `TimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `PromID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `Seat_ID` int(11) NOT NULL,
  `SeatNumber` varchar(3) NOT NULL,
  `SeatStatus` tinyint(1) NOT NULL,
  `ZoneID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `show`
--

CREATE TABLE `show` (
  `Show_ID` int(11) NOT NULL,
  `ShowName` varchar(30) NOT NULL,
  `BookingDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `HallNumber` int(11) NOT NULL,
  `Owner` varchar(20) NOT NULL,
  `AdminID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `show`
--

INSERT INTO `show` (`Show_ID`, `ShowName`, `BookingDate`, `EndDate`, `HallNumber`, `Owner`, `AdminID`) VALUES
(2, 'โปรเจคลับเด็กในหมู่บ้าน', '2021-03-23', '2021-03-31', 1, 'RMUTT ดอกบัวบาน', 1),
(3, '60 กว่าปี พี่เบิร์ดธงไชย', '2021-03-30', '2021-04-08', 2, 'ใครไม่รู้', 1),
(4, 'เซ็ตอัพวันไดร์ฟ', '2021-03-08', '2021-03-22', 3, 'ภูจิ จำกัดมหาชน', 1);

-- --------------------------------------------------------

--
-- Table structure for table `showdatetime`
--

CREATE TABLE `showdatetime` (
  `ShowDateTime_ID` int(11) NOT NULL,
  `DateTime` datetime NOT NULL,
  `ShowID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `showdatetime`
--

INSERT INTO `showdatetime` (`ShowDateTime_ID`, `DateTime`, `ShowID`) VALUES
(1, '2021-04-01 23:28:49', 2),
(2, '2021-04-02 23:28:49', 2),
(3, '2021-04-03 23:29:13', 2),
(4, '2021-05-12 23:29:24', 3),
(5, '2021-05-13 23:29:24', 3),
(6, '2021-05-14 23:29:24', 3),
(7, '2021-03-28 23:29:24', 4),
(8, '2021-03-29 23:29:24', 4),
(9, '2021-03-30 23:29:24', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `User_ID` int(11) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Fname` varchar(20) NOT NULL,
  `Lname` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `CiitID` varchar(13) NOT NULL,
  `PhoneNum` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`User_ID`, `Username`, `Fname`, `Lname`, `email`, `password`, `CiitID`, `PhoneNum`) VALUES
(7, 'ServerE', 'เมธิชัย', 'ศุขสมบัติ', 'notnoth43@gmail.com', '12345', '12', '12'),
(11, 'LordPhoeniX', 'Matichai', 'Suksombut', 'notnoth43@gmail.com', '2919633139abc1cbbedb969c63b994c7', '1100600416370', '0958723577');

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `Zone_ID` int(11) NOT NULL,
  `ZoneName` varchar(3) NOT NULL,
  `Capacity` int(11) NOT NULL,
  `ZonePrice` double NOT NULL,
  `HallID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`Zone_ID`, `ZoneName`, `Capacity`, `ZonePrice`, `HallID`) VALUES
(1, 'A', 20, 3000, 1),
(2, 'B', 30, 2000, 1),
(3, 'C', 40, 1000, 1),
(4, 'VIP', 10, 5000, 1),
(5, 'A', 20, 3000, 2),
(6, 'B', 30, 2000, 2),
(7, 'C', 40, 1000, 2),
(8, 'VIP', 10, 5000, 2),
(9, 'A', 20, 3000, 3),
(10, 'B', 30, 2000, 3),
(11, 'C', 40, 1000, 3),
(12, 'VIP', 10, 5000, 3),
(13, 'A', 20, 3000, 4),
(14, 'B', 30, 2000, 4),
(15, 'C', 40, 1000, 4),
(16, 'VIP', 10, 5000, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`Address_ID`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_ID`);

--
-- Indexes for table `hall`
--
ALTER TABLE `hall`
  ADD PRIMARY KEY (`Hall_ID`);

--
-- Indexes for table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`Prom_ID`);

--
-- Indexes for table `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`Rep_ID`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`Seat_ID`);

--
-- Indexes for table `show`
--
ALTER TABLE `show`
  ADD PRIMARY KEY (`Show_ID`);

--
-- Indexes for table `showdatetime`
--
ALTER TABLE `showdatetime`
  ADD PRIMARY KEY (`ShowDateTime_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_ID`);

--
-- Indexes for table `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`Zone_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `Address_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `Admin_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `hall`
--
ALTER TABLE `hall`
  MODIFY `Hall_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `Prom_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `receipts`
--
ALTER TABLE `receipts`
  MODIFY `Rep_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `Seat_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `show`
--
ALTER TABLE `show`
  MODIFY `Show_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `showdatetime`
--
ALTER TABLE `showdatetime`
  MODIFY `ShowDateTime_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `zone`
--
ALTER TABLE `zone`
  MODIFY `Zone_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
