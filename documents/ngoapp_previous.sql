-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jun 13, 2018 at 09:52 PM
-- Server version: 5.6.39-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ngoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `audio`
--

CREATE TABLE IF NOT EXISTS `audio` (
  `audio_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL DEFAULT '_blank',
  `author` varchar(500) NOT NULL DEFAULT '_blank',
  `genre` varchar(500) NOT NULL DEFAULT '_blank',
  `speaker` varchar(500) NOT NULL DEFAULT '_blank',
  `is_premium` tinyint(1) NOT NULL DEFAULT '0',
  `banner` varchar(1000) NOT NULL DEFAULT '_blank',
  `file` varchar(1000) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`audio_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=44 ;

--
-- Dumping data for table `audio`
--

INSERT INTO `audio` (`audio_id`, `title`, `author`, `genre`, `speaker`, `is_premium`, `banner`, `file`) VALUES
(38, 'Democratic National Convention Keynote Speech', 'Barack Obama', 'Inspiring', 'Barack Obama', 0, 'db73d77552fa3025.jpg', '40867bc894214eb1.mp3'),
(39, 'Armaan', 'Anirudh', 'Rock', 'Anirudh', 1, '83506981926c1c70.jpg', 'd9c6b27bf9f18b93.mp3'),
(40, 'ALIVE - Sia', 'James', 'Silence', 'James', 0, '62805fd5190746c0.jpg', '8089affc0657aec7.mp3'),
(41, 'Awake Yourself', 'Usher', 'Killer', 'Usher', 1, 'a4243a69628cbfe5.jpg', '87a6d60859b9454f.mp3'),
(42, 'Deep Sea', 'Shakira', 'Romantic', 'Shakira', 0, 'a57b8856aaa27d07.jpg', 'acec7fa79620ba65.mp3'),
(43, 'Baby', 'Selena Gomez', 'Jazz', 'Selena Gomez', 0, 'e4f4c4b9f3630d42.jpg', '8a876aae76a57ea3.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `audio_feedback`
--

CREATE TABLE IF NOT EXISTS `audio_feedback` (
  `audio_feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `audio_id` int(11) NOT NULL,
  `user_login_id` int(11) NOT NULL,
  `feedback` varchar(500) NOT NULL DEFAULT '_blank',
  `rating` int(100) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`audio_feedback_id`),
  KEY `AUDIO_FEEDBACK_fk0` (`audio_id`),
  KEY `AUDIO_FEEDBACK_fk1` (`user_login_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `audio_feedback`
--

INSERT INTO `audio_feedback` (`audio_feedback_id`, `audio_id`, `user_login_id`, `feedback`, `rating`) VALUES
(9, 38, 4, 'Sathish', 2),
(10, 38, 4, 'This is just an audio where the sound clarity is gud, but needs more valuable speeches as expected from the genre of this audio', 5),
(11, 43, 4, 'omg ', 3),
(12, 39, 6, 'Wow  suuuuper ', 5),
(13, 39, 4, 'Cool', -1),
(14, 38, 4, 'excellent audio', -1),
(15, 40, 4, 'cool', 4),
(16, 42, 4, 'nice', -1);

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE IF NOT EXISTS `book` (
  `book_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL DEFAULT '_blank',
  `isbn` varchar(500) NOT NULL DEFAULT '_blank',
  `author` varchar(500) NOT NULL DEFAULT '_blank',
  `publisher` varchar(500) NOT NULL DEFAULT '_blank',
  `edition` varchar(500) NOT NULL DEFAULT '_blank',
  `edition_number` varchar(500) NOT NULL DEFAULT '_blank',
  `no_of_pages` varchar(500) NOT NULL DEFAULT '_blank',
  `binding` varchar(500) NOT NULL DEFAULT '_blank',
  `flipkart_link` varchar(1000) NOT NULL DEFAULT '_blank',
  `amazon_link` varchar(1000) NOT NULL DEFAULT '_blank',
  `banner` varchar(1000) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `name`, `isbn`, `author`, `publisher`, `edition`, `edition_number`, `no_of_pages`, `binding`, `flipkart_link`, `amazon_link`, `banner`) VALUES
(18, 'Harry Potter and the Order of Phoenix', '08432984834', 'J. K. Rowling', 'Sun Microsystem', '2', '7.1.2', '432', 'Sun Microsystem', 'https://mun-sathish.firebaseapp.com', 'http://awakenyourselfwithinyou.org', '48e77f665fa79ce1.jpg'),
(19, 'Lord of the Flies', '6621398738', 'William Golding', 'Lois Machienery', '2', '1.23', '892', 'Lois Machienery', 'https://mun-sathish.firebaseapp.com', 'http://awakenyourselfwithinyou.org', '420181e4d12aa7ef.jpg'),
(20, 'The HOBBIT', '7483768372', 'J.R.R. Tolkien', 'Goldsmith. Ltd', '75', '8.9.1', '1092', 'Goldsmith. Ltd', 'https://mun-sathish.firebaseapp.com', 'http://awakenyourselfwithinyou.org', '5381313ce30a8948.jpg'),
(21, 'DaVinci Code', '7483632912', 'Dan Brown', 'Angel and Demons', '43', '2.24.1', '768', 'Angel and Demons', 'https://mun-sathish.firebaseapp.com', 'http://awakenyourselfwithinyou.org', '220c4f58b8aafb12.jpg'),
(22, 'A Breif History of Time', '9482837831', 'Stephen Hawking', 'New York Times', '76', '83.21.2', '1203', 'New York Times', 'https://mun-sathish.firebaseapp.com', 'http://awakenyourselfwithinyou.org', 'b2a7ca63a9685a0c.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `book_feedback`
--

CREATE TABLE IF NOT EXISTS `book_feedback` (
  `book_feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL,
  `feedback` varchar(500) NOT NULL DEFAULT '_blank',
  `rating` int(100) NOT NULL DEFAULT '-1',
  `user_login_id` int(11) NOT NULL,
  PRIMARY KEY (`book_feedback_id`),
  KEY `BOOK_FEEDBACK_fk0` (`book_id`),
  KEY `BOOK_FEEDBACK_fk1` (`user_login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `security_question`
--

CREATE TABLE IF NOT EXISTS `security_question` (
  `security_question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(500) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`security_question_id`),
  UNIQUE KEY `question` (`question`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `security_question`
--

INSERT INTO `security_question` (`security_question_id`, `question`) VALUES
(2, 'What is your favorite dish?'),
(4, 'What is your favorite hobby?'),
(3, 'What is your lucky number?'),
(5, 'What is your secret keyword towards success?'),
(1, 'Where did you born?');

-- --------------------------------------------------------

--
-- Table structure for table `user_access_audio`
--

CREATE TABLE IF NOT EXISTS `user_access_audio` (
  `user_access_audio_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_login_id` int(11) NOT NULL,
  `audio_id` int(11) NOT NULL,
  PRIMARY KEY (`user_access_audio_id`),
  KEY `USER_ACCESS_AUDIO_fk0` (`user_login_id`),
  KEY `USER_ACCESS_AUDIO_fk1` (`audio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_access_book`
--

CREATE TABLE IF NOT EXISTS `user_access_book` (
  `user_access_book_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_login_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`user_access_book_id`),
  KEY `USER_ACCESS_BOOK_fk0` (`user_login_id`),
  KEY `USER_ACCESS_BOOK_fk1` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_access_video`
--

CREATE TABLE IF NOT EXISTS `user_access_video` (
  `user_access_video_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_login_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  PRIMARY KEY (`user_access_video_id`),
  KEY `USER_ACCESS_VIDEO_fk0` (`user_login_id`),
  KEY `USER_ACCESS_VIDEO_fk1` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_address_details`
--

CREATE TABLE IF NOT EXISTS `user_address_details` (
  `user_address_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_login_id` int(11) NOT NULL,
  `address1` varchar(500) NOT NULL DEFAULT '_blank',
  `address2` varchar(500) NOT NULL DEFAULT '_blank',
  `city` varchar(500) NOT NULL DEFAULT '_blank',
  `state` varchar(500) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`user_address_details_id`),
  KEY `USER_ADDRESS_DETAILS_fk0` (`user_login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE IF NOT EXISTS `user_login` (
  `user_login_id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL DEFAULT '_blank',
  `name` varchar(500) NOT NULL DEFAULT '_blank',
  `old_password` varchar(100) NOT NULL DEFAULT '_blank',
  `password` varchar(100) NOT NULL DEFAULT '_blank',
  `security_question` varchar(500) NOT NULL DEFAULT '_blank',
  `security_question_answer` varchar(500) NOT NULL DEFAULT '_blank',
  `is_premium` tinyint(1) NOT NULL DEFAULT '0',
  `phone` bigint(10) NOT NULL DEFAULT '-1',
  `email` varchar(100) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`user_login_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`user_login_id`, `username`, `name`, `old_password`, `password`, `security_question`, `security_question_answer`, `is_premium`, `phone`, `email`) VALUES
(3, 'sathish', 'Sathish Dustakar', 'sat', 'munna', 'What is your favorite dish?', 'What is your fcoo', 0, 7353578127, 'mun.@gmail.com'),
(4, 'munna', 'Sathish', 'sathish', 'sathish', 'What is your secret keyword towards success?', 'cool', 1, 7353578127, 'mun@sathish.com'),
(5, 'suguvenkat', 'Suganthi V', 'suguvenkat', 'suguvenkat', 'What is your lucky number?', '5', 0, 7899688653, 'suganthi.v09@gmail.com'),
(6, 'sugu', 'Suganthi ', '_blank', 'goodluck40', 'What is your lucky number?', '9', 1, 7899688653, 'suganthi.v09@gmail.com'),
(7, 'e', 'dhdh', '_blank', 'dhs', 'What is your secret keyword towards success?', 'b', 0, 5454, 'hsdh'),
(8, 'jdndbdbdnxnx', 'gdh', '_blank', 'dnd', 'What is your secret keyword towards success?', 'dndj', 0, 4949, 'fnfn'),
(9, 'yash', 'yashu', '_blank', '0309', 'What is your favorite dish?', 'mithai', 0, 9761436561, 'dikshamasi@gmail.c9n'),
(10, 'Memories', 'Gauri', '_blank', '927472925', 'What is your lucky number?', '9', 0, 7409160620, 'pbishtvaps09@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE IF NOT EXISTS `video` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL DEFAULT '_blank',
  `author` varchar(500) NOT NULL DEFAULT '_blank',
  `cast` varchar(500) NOT NULL DEFAULT '_blank',
  `genre` varchar(500) NOT NULL DEFAULT '_blank',
  `is_premium` tinyint(1) NOT NULL DEFAULT '0',
  `banner` varchar(1000) NOT NULL DEFAULT '_blank',
  `file` varchar(1000) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`video_id`, `title`, `author`, `cast`, `genre`, `is_premium`, `banner`, `file`) VALUES
(23, 'Do Work', 'David Banner', 'David Banner', 'Hardcore', 1, '73e7d0fac51f12b9.jpg', '85fede706bd8527b.mp4'),
(24, 'Shazam', 'Micky', 'Shazam', 'Entertainment', 0, 'f7425dd4bbc0d72a.jpg', '36801eb44c82ad65.mp4'),
(25, 'Rubble King', 'Panther', 'Panther', 'Fun', 0, '6e17c3fc20086c06.jpg', 'f1ab546f18a7ec46.mp4'),
(26, 'Majestl', 'Aladdin', 'Aladdin', 'Adventure', 1, '241fb228bce506c0.jpg', 'fd8cf461cacd0cf9.mp4'),
(27, 'Postor Troy', 'Gregor', 'Gregor', 'Gangster', 1, '9d418c7041f871b1.jpg', '13631c7daeecae15.mp4'),
(28, 'Mersal', 'Anirudh', 'Anirudh', 'Tamilan', 1, 'a25add146d09abc9.jpg', 'c5c5fac628acb0d1.mp4'),
(29, 'Sample', 'Sample', 'Sample', 'Sample', 0, '7b039812b062c9be.jpg', '1dd3ccafd07081f8.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `video_feedback`
--

CREATE TABLE IF NOT EXISTS `video_feedback` (
  `video_feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_id` int(11) NOT NULL,
  `feedback` varchar(500) NOT NULL DEFAULT '_blank',
  `rating` int(100) NOT NULL DEFAULT '-1',
  `user_login_id` int(11) NOT NULL,
  PRIMARY KEY (`video_feedback_id`),
  KEY `VIDEO_FEEDBACK_fk0` (`video_id`),
  KEY `VIDEO_FEEDBACK_fk1` (`user_login_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `video_feedback`
--

INSERT INTO `video_feedback` (`video_feedback_id`, `video_id`, `feedback`, `rating`, `user_login_id`) VALUES
(1, 23, 'good one', 5, 4),
(2, 29, 'great one buddy', 4, 4),
(3, 27, 'Crazy ', 4, 6),
(4, 26, 'Pleased.. ðŸ‘Œ ', -1, 4),
(5, 26, 'useful', 4, 4),
(6, 29, 'fyy\n', 4, 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `audio_feedback`
--
ALTER TABLE `audio_feedback`
  ADD CONSTRAINT `AUDIO_FEEDBACK_fk0` FOREIGN KEY (`audio_id`) REFERENCES `audio` (`audio_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `AUDIO_FEEDBACK_fk1` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE;

--
-- Constraints for table `book_feedback`
--
ALTER TABLE `book_feedback`
  ADD CONSTRAINT `BOOK_FEEDBACK_fk0` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `BOOK_FEEDBACK_fk1` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_access_audio`
--
ALTER TABLE `user_access_audio`
  ADD CONSTRAINT `USER_ACCESS_AUDIO_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `USER_ACCESS_AUDIO_fk1` FOREIGN KEY (`audio_id`) REFERENCES `audio` (`audio_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_access_book`
--
ALTER TABLE `user_access_book`
  ADD CONSTRAINT `USER_ACCESS_BOOK_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `USER_ACCESS_BOOK_fk1` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_access_video`
--
ALTER TABLE `user_access_video`
  ADD CONSTRAINT `USER_ACCESS_VIDEO_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `USER_ACCESS_VIDEO_fk1` FOREIGN KEY (`video_id`) REFERENCES `video` (`video_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_address_details`
--
ALTER TABLE `user_address_details`
  ADD CONSTRAINT `USER_ADDRESS_DETAILS_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE;

--
-- Constraints for table `video_feedback`
--
ALTER TABLE `video_feedback`
  ADD CONSTRAINT `VIDEO_FEEDBACK_fk0` FOREIGN KEY (`video_id`) REFERENCES `video` (`video_id`),
  ADD CONSTRAINT `VIDEO_FEEDBACK_fk1` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
