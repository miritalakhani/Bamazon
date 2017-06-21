
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chulbuli369^^",
  database: "Bamazon"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  getAllproducts();


  //return all products

function  getAllproducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) {
      throw err;
    }

    printNames(res);
  });

function printNames(res) {
  for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price );
    }
  console.log("-----------------------------------");

  askquestion();
}


}


function askquestion() {
var questions = [
    {
      type: 'input',
      name: 'ID',
      message: 'please enter the ID of product you would like to buy'
    },

    {
      type: 'input',
      name: 'units',
      message: 'How many units you would like to buy?'
    }
  ]


  inquirer.prompt(questions).then(function (answers) {
  //console.log(JSON.stringify(answers, null, '  '));


  var id = parseInt(answers.ID);
  var unit = parseInt(answers.units);


  connection.query("SELECT * FROM products WHERE item_id = " + id, function(err, res) {
    if (err) {
      throw err;
    }

    console.log("Available Quantity: " + res[0].stock_quantity);
    var available = res[0].stock_quantity;
    var totalPrice = unit * res[0].price;

    if(available > unit){
      console.log("sucess!! you are able to purchase");

    var newstock = available-unit;

    connection.query("UPDATE products SET stock_quantity = " + newstock + " WHERE item_id = " + id, function(err, res) {
    if (err) {
      throw err;
    }

    console.log("Total price is: " + totalPrice);

  });


        }

    else { console.log("Insuficient quantity!!");}
  });


  });
}




});
