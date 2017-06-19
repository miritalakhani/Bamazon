
CREATE database Bamazon;

USE Bamazon;

CREATE TABLE products (
item_id INTEGER(11) auto_increment NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,4) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

USE Bamazon;
SELECT * FROM products;

USE Bamazon;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("woodenElephant", "Home", 5.25, 3);