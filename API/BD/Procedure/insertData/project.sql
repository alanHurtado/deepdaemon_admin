USE deepdaem_web_admin;

DELIMITER $$
USE `deepdaem_web_admin`$$

CREATE PROCEDURE `projectAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(100),
  IN _descr VARCHAR(500),
  IN _status ENUM('indevelop', 'completed'),
  IN _impact VARCHAR(500),
  IN _front_img VARCHAR(50),
  IN _modal_media VARCHAR(50),
  IN _modal_type ENUM('image', 'video', 'embed'),
  IN _link VARCHAR(50),
  IN _idTech INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO project (name, descr, status, impact, front_img, modal_media, modal_type, link)
    VALUES ( _name, _descr, _status, _impact, _front_img, _modal_media, _modal_type, _link);

    SET _id = LAST_INSERT_ID();
    INSERT INTO project_tech(id_project, id_tech)
    VALUES (_id, _idTech);
  
  ELSE
    UPDATE project
    SET
    name = _name,
    descr = _descr,
    status = _status,
    impact = _impact,
    front_img = _front_img,
    modal_media = _modal_media,
    modal_type = _modal_type,
    link = _link
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
