// https://www.dbdesigner.net/designer/schema/170799

CREATE TABLE `USER_LOGIN` (
	`user_login_id` int(100) NOT NULL AUTO_INCREMENT,
	`username` varchar(100) NOT NULL UNIQUE DEFAULT '_blank',
	`old_password` varchar(100) NOT NULL DEFAULT '_blank',
	`password` varchar(100) NOT NULL DEFAULT '_blank',
	`security_question` varchar(500) NOT NULL DEFAULT '_blank',
	`security_question_answer` varchar(500) NOT NULL DEFAULT '_blank',
	`is_premium` boolean NOT NULL DEFAULT '0',
	`phone` int(10) NOT NULL DEFAULT '0',
	`email` varchar(100) NOT NULL DEFAULT '_blank',
	PRIMARY KEY (`user_login_id`)
);

CREATE TABLE `USER_ADDRESS_DETAILS` (
	`user_address_details_id` int NOT NULL AUTO_INCREMENT,
	`user_login_id` int NOT NULL,
	`address1` varchar(500) NOT NULL DEFAULT '_blank',
	`address2` varchar(500) NOT NULL DEFAULT '_blank',
	`city` varchar(500) NOT NULL DEFAULT '_blank',
	`state` varchar(500) NOT NULL DEFAULT '_blank',
	PRIMARY KEY (`user_address_details_id`)
);

CREATE TABLE `AUDIO` (
	`audio_id` int NOT NULL AUTO_INCREMENT,
	`title` varchar(500) NOT NULL DEFAULT '_blank',
	`author` varchar(500) NOT NULL DEFAULT '_blank',
	`genre` varchar(500) NOT NULL DEFAULT '_blank',
	`speaker` varchar(500) NOT NULL DEFAULT '_blank',
	`price` int(100) NOT NULL DEFAULT '0',
	`discount` int(100) NOT NULL DEFAULT '0',
	`is_premium` boolean NOT NULL DEFAULT '0',
	`is_free` boolean NOT NULL DEFAULT '0',
	`banner` blob NOT NULL,
	`file` blob NOT NULL,
	PRIMARY KEY (`audio_id`)
);

CREATE TABLE `VIDEO` (
	`video_id` int NOT NULL AUTO_INCREMENT,
	`title` varchar(500) NOT NULL DEFAULT '_blank',
	`author` varchar(500) NOT NULL DEFAULT '_blank',
	`cast` varchar(500) NOT NULL DEFAULT '_blank',
	`genre` varchar(500) NOT NULL DEFAULT '_blank',
	`price` int(100) NOT NULL DEFAULT '0',
	`discount` int(100) NOT NULL DEFAULT '0',
	`is_premium` boolean NOT NULL DEFAULT '0',
	`is_free` boolean NOT NULL DEFAULT '0',
	`banner` blob NOT NULL,
	`file` blob NOT NULL,
	PRIMARY KEY (`video_id`)
);

CREATE TABLE `BOOK` (
	`book_id` int NOT NULL AUTO_INCREMENT,
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
	`banner` blob NOT NULL,
	PRIMARY KEY (`book_id`)
);

CREATE TABLE `AUDIO_FEEDBACK` (
	`audio_feedback_id` int NOT NULL AUTO_INCREMENT,
	`audio_id` int NOT NULL,
	`feedback` varchar(500) NOT NULL DEFAULT '_blank',
	`rating` int(100) NOT NULL DEFAULT '0',
	PRIMARY KEY (`audio_feedback_id`)
);

CREATE TABLE `VIDEO_FEEDBACK` (
	`video_feedback_id` int NOT NULL AUTO_INCREMENT,
	`video_id` int NOT NULL,
	`feedback` varchar(500) NOT NULL DEFAULT '_blank',
	`rating` int(100) NOT NULL DEFAULT '0',
	PRIMARY KEY (`video_feedback_id`)
);

CREATE TABLE `BOOK_FEEDBACK` (
	`book_feedback_id` int NOT NULL AUTO_INCREMENT,
	`book_id` int NOT NULL,
	`feedback` varchar(500) NOT NULL DEFAULT '_blank',
	`rating` int(100) NOT NULL DEFAULT '0',
	PRIMARY KEY (`book_feedback_id`)
);

CREATE TABLE `USER_ACCESS_AUDIO` (
	`user_access_audio_id` int NOT NULL AUTO_INCREMENT,
	`user_login_id` int NOT NULL,
	`audio_id` int NOT NULL,
	PRIMARY KEY (`user_access_audio_id`)
);

CREATE TABLE `USER_ACCESS_BOOK` (
	`user_access_book_id` int NOT NULL AUTO_INCREMENT,
	`user_login_id` int NOT NULL,
	`book_id` int NOT NULL,
	PRIMARY KEY (`user_access_book_id`)
);

CREATE TABLE `USER_ACCESS_VIDEO` (
	`user_access_video_id` int NOT NULL AUTO_INCREMENT,
	`user_login_id` int NOT NULL,
	`video_id` int NOT NULL,
	PRIMARY KEY (`user_access_video_id`)
);

ALTER TABLE `USER_ADDRESS_DETAILS` ADD CONSTRAINT `USER_ADDRESS_DETAILS_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `USER_LOGIN`(`user_login_id`);

ALTER TABLE `AUDIO_FEEDBACK` ADD CONSTRAINT `AUDIO_FEEDBACK_fk0` FOREIGN KEY (`audio_id`) REFERENCES `AUDIO`(`audio_id`);

ALTER TABLE `VIDEO_FEEDBACK` ADD CONSTRAINT `VIDEO_FEEDBACK_fk0` FOREIGN KEY (`video_id`) REFERENCES `VIDEO`(`video_id`);

ALTER TABLE `BOOK_FEEDBACK` ADD CONSTRAINT `BOOK_FEEDBACK_fk0` FOREIGN KEY (`book_id`) REFERENCES `BOOK`(`book_id`);

ALTER TABLE `USER_ACCESS_AUDIO` ADD CONSTRAINT `USER_ACCESS_AUDIO_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `USER_LOGIN`(`user_login_id`);

ALTER TABLE `USER_ACCESS_AUDIO` ADD CONSTRAINT `USER_ACCESS_AUDIO_fk1` FOREIGN KEY (`audio_id`) REFERENCES `AUDIO`(`audio_id`);

ALTER TABLE `USER_ACCESS_BOOK` ADD CONSTRAINT `USER_ACCESS_BOOK_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `USER_LOGIN`(`user_login_id`);

ALTER TABLE `USER_ACCESS_BOOK` ADD CONSTRAINT `USER_ACCESS_BOOK_fk1` FOREIGN KEY (`book_id`) REFERENCES `BOOK`(`book_id`);

ALTER TABLE `USER_ACCESS_VIDEO` ADD CONSTRAINT `USER_ACCESS_VIDEO_fk0` FOREIGN KEY (`user_login_id`) REFERENCES `USER_LOGIN`(`user_login_id`);

ALTER TABLE `USER_ACCESS_VIDEO` ADD CONSTRAINT `USER_ACCESS_VIDEO_fk1` FOREIGN KEY (`video_id`) REFERENCES `VIDEO`(`video_id`);