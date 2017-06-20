
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
  console.log(JSON.stringify(answers, null, '  '));
  });
}


});
