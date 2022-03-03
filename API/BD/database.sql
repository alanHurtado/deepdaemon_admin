/* Pre ajustes */
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO"; -- Afecta el auto_increment solo aumenta despues de un valor null

SET
  AUTOCOMMIT = 0; -- Deshabilita el modo de ejecución automatica

START TRANSACTION;
SET
    time_zone = "+00:00";

/* Creacion de Tablas */

CREATE TABLE `career` (
    `id` int(10) UNSIGNED NOT NULL,
    `short_name` varchar(10) COLLATE utf8_unicode_ci NOT NULL UNIQUE DEFAULT '0',
    `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `career`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

CREATE TABLE `school` (
    `id` int(10) UNSIGNED NOT NULL,
    `short_name` varchar(10) COLLATE utf8_unicode_ci NOT NULL UNIQUE,
    `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL UNIQUE,
     PRIMARY KEY (`id`, `short_name`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `school`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;


  CREATE TABLE `member` (
    `id` int(10) UNSIGNED NOT NULL,
    `name` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Alumno',
    `lastname` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Alumno',
    `password` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT '123456',
    `token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
    `linkedin` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
    `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL UNIQUE,
    `short_desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `long_desc` text COLLATE utf8_unicode_ci,
    `status` enum('current', 'graduate', 'leader', 'out') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'current',
    `photo_filename` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user.png',
    `ss` tinyint(1) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`, `name`, `lastname`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;
  
ALTER TABLE
  `member`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

CREATE TABLE `grade` (
    `id` int(10) UNSIGNED NOT NULL,
    `id_member` int(10) UNSIGNED NOT NULL DEFAULT '0',
    `id_school` int(10) UNSIGNED NOT NULL DEFAULT '0',
    `id_career` int(10) UNSIGNED NOT NULL DEFAULT '0',
    `type` enum('bachelor', 'masters', 'phd', 'work') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'bachelor',
    `start` date DEFAULT NULL,
    `end` date DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;


ALTER TABLE
  `grade`
ADD
  PRIMARY KEY (`id`),
ADD
  UNIQUE KEY `career` (`id_member`, `id_school`, `id_career`),
ADD
  KEY `FK_grade_career` (`id_career`),
ADD
  KEY `FK_grade_student` (`id_member`),
ADD
  KEY `FK_grade_school` (`id_school`);
  
ALTER TABLE
  `grade`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE
  `grade`
ADD
  CONSTRAINT `FK_grade_career` FOREIGN KEY (`id_career`) REFERENCES `career` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD
  CONSTRAINT `FK_grade_member` FOREIGN KEY (`id_member`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD
  CONSTRAINT `FK_grade_school` FOREIGN KEY (`id_school`) REFERENCES `school` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE `project` (
    `id` int(10) UNSIGNED NOT NULL,
    `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Proyecto',
    `status` enum('indevelop', 'completed') NOT NULL DEFAULT 'indevelop',
    `descr` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
    `impact` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
    `front_img` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'project_front.jpg',
    `modal_media` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'project_modal.jpg',
    `modal_type` enum('image', 'video', 'embed') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'image',
    `link` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `project`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

CREATE TABLE `project_member` (
    `id_member` int(10) UNSIGNED NOT NULL,
    `id_project` int(10) UNSIGNED NOT NULL,
     PRIMARY KEY (`id_member`, `id_project`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `project_member`
ADD
  CONSTRAINT `FK__member` FOREIGN KEY (`id_member`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD
  CONSTRAINT `FK__project` FOREIGN KEY (`id_project`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE `tech` (
    `id` int(10) UNSIGNED NOT NULL,
    `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Tecnologia',
    `descr` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Descripción',
    `icon` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'tech.png',
    PRIMARY KEY (`id`, `name`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `tech`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;


CREATE TABLE `project_tech` (
    `id_project` int(10) UNSIGNED NOT NULL,
    `id_tech` int(10) UNSIGNED NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `project_tech`
ADD
  PRIMARY KEY (`id_project`, `id_tech`),
ADD
  KEY `FK__tech` (`id_tech`);
  
ALTER TABLE
  `project_tech`
ADD
  CONSTRAINT `FK__project_tech` FOREIGN KEY (`id_project`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD
  CONSTRAINT `FK__tech` FOREIGN KEY (`id_tech`) REFERENCES `tech` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


CREATE TABLE `publication` (
    `id` int(10) UNSIGNED NOT NULL,
    `post_type` enum('article', 'book', 'booklet', 'conference', 'inbook', 'incollection',
                      'inproceedings', 'manual', 'mastersthesis', 'misc', 'phdthesis', 
                      'proceedings', 'techreport', 'unpublished') 
                    COLLATE utf8_unicode_ci NOT NULL,
    `descr` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
    `front_img` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'publication_front.jpg',
    `modal_media` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'publication_modal.jpg',
    `modal_type` enum('image', 'video', 'embed') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'image',
    `link` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `autor` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `title` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `journal` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `yearMonth` date DEFAULT NULL,
    `volume` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
    `numbert` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
    `pages` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
    `publisher` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `addressd` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
    `howpublished` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `booktitle` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
    `editor` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
    `series` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `organization` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `school` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    `note` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
    `institution` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

  ALTER TABLE
    `publication`
  MODIFY
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;


  CREATE TABLE `publication_tech` (
    `id_publication` int(10) UNSIGNED NOT NULL,
    `id_tech` int(10) UNSIGNED NOT NULL,
    PRIMARY KEY (`id_publication`, `id_tech`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `publication_tech`
ADD
  CONSTRAINT `FK__publication_tech` FOREIGN KEY (`id_publication`) REFERENCES `publication` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD
  CONSTRAINT `FK__tech_publication` FOREIGN KEY (`id_tech`) REFERENCES `tech` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;




  CREATE TABLE `publication_member` (
    `id_publication` int(10) UNSIGNED NOT NULL,
    `id_member` int(10) UNSIGNED NOT NULL,
    PRIMARY KEY (`id_publication`, `id_member`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;

ALTER TABLE
  `publication_member`
ADD
  CONSTRAINT `FK__publication_member` FOREIGN KEY (`id_publication`) REFERENCES `publication` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD
  CONSTRAINT `FK__member_publication` FOREIGN KEY (`id_member`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;
