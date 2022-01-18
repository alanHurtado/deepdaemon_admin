USE deepdaem_web_admin;

DELIMITER $$
USE `deepdaem_web_admin`$$

CREATE PROCEDURE `techAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(50),
  IN _descr VARCHAR(255),
  IN _icon varchar(50)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO tech (name, descr, icon)
    VALUES (_name, _descr, _icon);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE tech
    SET
    name = _name,
    descr = _descr,
    icon = _icon
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
