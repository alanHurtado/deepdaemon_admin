USE deepdaem_web_admin;

DELIMITER $$
USE `deepdaem_web_admin`$$

CREATE PROCEDURE `publicationAddOrEdit` (
  IN _id INT,
  IN _post_type ENUM('article', 'book', 'booklet', 'conference', 'inbook',
                     'incollection', 'inproceedings', 'manual', 'mastersthesis',
                     'misc', 'phdthesis', 'proceedings', 'techreport','unpublished'),
  IN _descr VARCHAR(500),
  IN _front_img VARCHAR(50),
  IN _modal_media VARCHAR(50),
  IN _modal_type ENUM('image', 'video', 'embed'),
  IN _link VARCHAR(50),
  IN _autor VARCHAR(50),
  IN _title VARCHAR(50),
  IN _journal VARCHAR(50),
  IN _yearMonth DATE,
  IN _volume VARCHAR(10),
  IN _numbert VARCHAR(10),
  IN _pages VARCHAR(10),
  IN _publisher VARCHAR(50),
  IN _address VARCHAR(100),
  IN _howpublished VARCHAR(50),
  IN _booktitle VARCHAR(100),
  IN _editor VARCHAR(100),
  IN _series VARCHAR(50),
  IN _organization VARCHAR(50),
  IN _school VARCHAR(50),
  IN _note VARCHAR(100),
  IN _institution VARCHAR(100),
  IN _idTech INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO publication ( post_type, descr, front_img, modal_media, 
                            modal_type, link, autor, title, journal, 
                            yearMonth, volume, numbert, pages, publisher, 
                            addressd, howpublished, booktitle, editor, series,
                            organization, school, note, institution )
    VALUES ( _post_type, _descr, _front_img, _modal_media, _modal_type, _link,
             _autor, _title, _journal, _yearMonth, _volume, _numbert, _pages,
             _publisher, _address, _howpublished, _booktitle, _editor, _series,
             _organization, _school, _note, _institution);

    SET _id = LAST_INSERT_ID();

    INSERT INTO publication_tech(id_publication, id_tech)
    VALUES (_id, _idTech);
  ELSE
    UPDATE publication
    SET
    descr = _descr
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
