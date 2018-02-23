var fs = require('fs');
var hbs = require('handlebars');
var moment = require('moment');

// Get content from file
var content = fs.readFileSync('products.json');

// Define to JSON type
var jsonContent = JSON.parse(content);

var currentDate = moment().format('YYYY-MM-DD');

console.log('\nWriting Files...\n')

// Compiling Red Products

for (let i = 0; i < jsonContent['products-red'].length; i++) {

    var source = fs.readFileSync('tpl/productTpl.md', 'utf8');

    var template = hbs.compile(source);

    var data = { 'currentDate': currentDate, 'provaVar': jsonContent['products-red'][i].id };

    var result = template(data);

    fs.writeFile('results/red/' + jsonContent['products-red'][i].id + '.md', result, 'utf8', function(err){
        if(err) {
            return console.log(err);
        }
    });

    console.log('Writing RED... ' + jsonContent['products-red'][i].id + '.md')

};

// Compiling Green Products

for (let i = 0; i < jsonContent['products-green'].length; i++) {

    var source = fs.readFileSync('tpl/productTpl.md', 'utf8');

    var template = hbs.compile(source);

    var data = { 'currentDate': currentDate, 'provaVar': jsonContent['products-green'][i].id };

    var result = template(data);

    fs.writeFile('results/green/' + jsonContent['products-green'][i].id + '.md', result, 'utf8', function(err){
        if(err) {
            return console.log(err);
        }
    });

    console.log('Writing GREEN... ' + jsonContent['products-green'][i].id + '.md')

};


console.log('\nDONE\n');