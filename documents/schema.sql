-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jun 24, 2018 at 11:04 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

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
-- Table structure for table `security_question`
--

CREATE TABLE IF NOT EXISTS `security_question` (
  `security_question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(500) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`security_question_id`),
  UNIQUE KEY `question` (`question`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

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
-- Table structure for table `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL DEFAULT '_blank',
  `description` varchar(1000) NOT NULL DEFAULT '_blank',
  `is_premium` tinyint(1) NOT NULL DEFAULT '0',
  `file` varchar(1000) NOT NULL DEFAULT '_blank',
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`task_id`, `title`, `description`, `is_premium`, `file`) VALUES
(8, 'Donâ€™t Shortcut Your Thinking', 'Conventional wisdom is a shortcut from actual thinking. When you rely on the majority to give you career, diet and spiritual advice you avoid thinking about these issues for yourself. \n\n\nOften when you peel off the covering, and start to understand the systems behind it, you can come up with more satisfying and less risky solutions to your problems.  When you peel off the outer layer from your career, you see that a job isnâ€™t just working for money, itâ€™s building skills that provide value in exchange for money. Thatâ€™s why programs designed to give people jobs, but donâ€™t provide value are insane.\n\n\nItâ€™s also why, if you donâ€™t produce value at your job, you are in a far riskier position than any entrepreneur.  Peeling off the layers to your diet and youâ€™ll see that, while people have been omnivorous throughout their evolution, few societies have consumed the same volume of meat as people do today and none ate as much processed foods. Look closely and it makes more sense for', 0, '436514fd82a64001.jpg,c331f8d54427c2aa.jpg,0d80202d16a926ae.jpg'),
(9, 'Shake off Your Problems', 'A manâ€™s favorite donkey falls into a deep precipice. He canâ€™t pull it out no matter how hard he tries. He therefore decides to bury it alive.\r\n\r\nSoil is poured onto the donkey from above. The donkey feels the load, shakes it off, and steps on it. More soil is poured.\r\n\r\nIt shakes it off and steps up. The more the load was poured, the higher it rose. By noon, the donkey was grazing in green pastures.\r\n\r\nAfter much shaking off (of problems) And stepping up (learning from them), One will graze in GREEN PASTURES.', 1, 'ed45df811b46e17f.jpg,bc653a6bd0c2da31.jpg,cf301f6665fe2e44.jpg'),
(10, 'The Obstacle in our Path', 'There once was a very wealthy and curious king. This king had a huge boulder placed in the middle of a road. Then he hid nearby to see if anyone would try to remove the gigantic rock from the road.\r\n\r\nThe first people to pass by were some of the kingâ€™s wealthiest merchants and courtiers. Rather than moving it, they simply walked around it. A few loudly blamed the King for not maintaining the roads. Not one of them tried to move the boulder.\r\n\r\nFinally, a peasant came along. His arms were full of vegetables. When he got near the boulder, rather than simply walking around it as the others had, the peasant put down his load and tried to move the stone to the side of the road. It took a lot of effort but he finally succeeded.\r\n\r\nThe peasant gathered up his load and was ready to go on his way when he say a purse lying in the road where the boulder had been. The peasant opened the purse. The purse was stuffed full of gold coins and a note from the king. The kingâ€™s note said the purseâ€™s', 0, '22bae8441d9179ee.jpg,5747a5aa43284320.png'),
(11, 'How to Discover What Youâ€™re Passionate About', 'A common theme in most writing on goal setting is the need to follow your passions.  Do the things that make you want to get up early in the morning.  Thereâ€™s only one thing missing:\r\n\r\nWhat if you donâ€™t have any passions? Iâ€™m sure everyone on this planet has interests.  But thatâ€™s not the same thing.  Enjoying playing video games isnâ€™t the same as spending thousands of hours designing your own.  Your passion has to be something you would work exceptionally hard for.\r\n\r\nSo what do you do, if there is nothing you feel that engaged about?', 0, 'b72a52c541b4b85d.jpg,dbb6f2a9e4261c46.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `task_feedback`
--

CREATE TABLE IF NOT EXISTS `task_feedback` (
  `task_feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) NOT NULL,
  `user_login_id` int(11) NOT NULL,
  `feedback` varchar(500) NOT NULL DEFAULT '_blank',
  `rating` int(100) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`task_feedback_id`),
  KEY `TASK_FEEDBACK_fk0` (`task_id`),
  KEY `TASK_FEEDBACK_fk1` (`user_login_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `task_feedback`
--

INSERT INTO `task_feedback` (`task_feedback_id`, `task_id`, `user_login_id`, `feedback`, `rating`) VALUES
(4, 8, 12, 'gud thought sir', -1),
(5, 8, 4, 'awesome', -1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`user_login_id`, `username`, `name`, `old_password`, `password`, `security_question`, `security_question_answer`, `is_premium`, `phone`, `email`) VALUES
(3, 'sathish', 'Sathish Dustakar', 'sat', 'munna', 'What is your favorite dish?', 'What is your fcoo', 0, 7353578127, 'mun.@gmail.com'),
(4, 'munna', 'Sathish', 'sathish', 'sathish', 'What is your secret keyword towards success?', 'cool', 1, 7353578127, 'mun@sathish.com'),
(6, 'sugu', 'Suganthi ', '_blank', 'goodluck40', 'What is your lucky number?', '9', 1, 7899688653, 'suganthi.v09@gmail.com'),
(9, 'yash', 'yashu', '_blank', '0309', 'What is your favorite dish?', 'mithai', 0, 9761436561, 'dikshamasi@gmail.c9n'),
(10, 'Memories', 'Gauri', '_blank', '927472925', 'What is your lucky number?', '9', 0, 7409160620, 'pbishtvaps09@gmail.com'),
(12, 'rudra123', 'Rudra NGO', 'rudra123', 'rudra321', 'What is your lucky number?', '5', 0, 7546194512, 'rudra@gmail.com');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

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
(29, 'Sample', 'Sample', 'Sample', 'Sample', 0, '7b039812b062c9be.jpg', '1dd3ccafd07081f8.mp4'),
(30, 'Latha', 'Sathish', 'Latha', 'LathaAction', 0, '1e3f5e582f07c7cc.jpg', 'b2ecb6bae77efb91.mp4');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `video_feedback`
--

INSERT INTO `video_feedback` (`video_feedback_id`, `video_id`, `feedback`, `rating`, `user_login_id`) VALUES
(1, 23, 'good one', 5, 4),
(2, 29, 'great one buddy', 4, 4),
(3, 27, 'Crazy ', 4, 6),
(4, 26, 'Pleased.. ðŸ‘Œ ', -1, 4),
(5, 26, 'useful', 4, 4),
(6, 29, 'fyy\n', 4, 3),
(7, 26, 'awesome vid', 5, 4),
(9, 24, 'grerat ', 5, 12),
(10, 29, 'awesome ðŸ˜ðŸ˜', -1, 12),
(11, 26, 'premium user comment ðŸ˜ŽðŸ˜Ž', 5, 4),
(12, 30, 'thts great magic show', 5, 4);

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
-- Constraints for table `task_feedback`
--
ALTER TABLE `task_feedback`
  ADD CONSTRAINT `TASK_FEEDBACK_fk0` FOREIGN KEY (`task_id`) REFERENCES `task` (`task_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `TASK_FEEDBACK_fk1` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE;

--
-- Constraints for table `video_feedback`
--
ALTER TABLE `video_feedback`
  ADD CONSTRAINT `VIDEO_FEEDBACK_fk0` FOREIGN KEY (`video_id`) REFERENCES `video` (`video_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `VIDEO_FEEDBACK_fk1` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
