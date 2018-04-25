var fs = require('fs');
var hbs = require('handlebars');
var moment = require('moment');

// Get content from file
var content = fs.readFileSync('products.json');

// Define to JSON type
var jsonContent = JSON.parse(content);

// Get current date using momentJs
var currentDate = moment().format('YYYY-MM-DD');

console.log('\nWriting Files...\n')

// Set the if statement for Handlebars
hbs.registerHelper('ifvalue', function(conditional, options) {
    if(options.hash.value === conditional) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

// Compiling Red Products

function checkDirectory(directory, callback) {
    fs.stat(directory, function(err, stats){
        if (err && err.errno === 34) {
            fs.mkdir(directory, callback);
        } else {
            callback(err)
        }
    });
}

checkDirectory("./results/", function(error) {  
    if(error) {
        console.log("Creating Directory Results...");
        fs.mkdirSync('./results/');
    } else {
        //Carry on, all good, directory exists / created.
    }
});

checkDirectory("./results/red/", function(error) {  
    if(error) {
        console.log("Creating Directory Red...");
        fs.mkdirSync('./results/red/');
    } else {
        //Carry on, all good, directory exists / created.
    }
});

checkDirectory("./results/green/", function(error) {  
    if(error) {
        console.log("Creating Directory Green...\n");
        fs.mkdirSync('./results/green/');
    } else {
        //Carry on, all good, directory exists / created.
    }
});

setTimeout(() => {
    for (let i = 0; i < jsonContent['products-red'].length; i++) {

        var source = fs.readFileSync('tpl/productTpl.md', 'utf8');
    
        var template = hbs.compile(source);
    
        var data = { 'code': jsonContent['products-red'][i].code, 'name': jsonContent['products-red'][i].name, 'line': jsonContent['products-red'][i].line, 'layout': jsonContent['products-red'][i].layout, 'currentDate': currentDate, 'img': jsonContent['products-red'][i].img, 'family': jsonContent['products-red'][i].family, 'line': jsonContent['products-red'][i].line, 'permalink': jsonContent['products-red'][i].permalink, 'energy': jsonContent['products-red'][i].energy, 'cadDraw': jsonContent['products-red'][i].cadDraw, 'exploded': jsonContent['products-red'][i].exploded, 'dataSheet': jsonContent['products-red'][i].dataSheet, 'dimensioni': jsonContent['products-red'][i].dimensioni, 'dimensioniInterne': jsonContent['products-red'][i].dimensioniInterne, 'griglieIncluse': jsonContent['products-red'][i].griglieIncluse, 'capacità': jsonContent['products-red'][i].capacità, 'pesoNetto': jsonContent['products-red'][i].pesoNetto, 'amperaggio': jsonContent['products-red'][i].amperaggio, 'consumo': jsonContent['products-red'][i].consumo, 'compressore': jsonContent['products-red'][i].compressore, 'modelloCompressore': jsonContent['products-red'][i].modelloCompressore, 'termostato': jsonContent['products-red'][i].termostato, 'modelloTermostato': jsonContent['products-red'][i].modelloTermostato, 'gasRefrigerante': jsonContent['products-red'][i].gasRefrigerante, 'temperatura': jsonContent['products-red'][i].temperatura, 'spessoreCoibentazione': jsonContent['products-red'][i].spessoreCoibentazione, 'alzatina': jsonContent['products-red'][i].alzatina};
    
        var result = template(data);
    
        fs.writeFile('results/red/' + jsonContent['products-red'][i].code + '.md', result, 'utf8', function(err){
            if(err) {
                return console.log(err);
            }
        });
    
        console.log('Writing RED... ' + jsonContent['products-red'][i].code + '.md')
    
    };
    
    // Compiling Green Products
    
    for (let i = 0; i < jsonContent['products-green'].length; i++) {
    
        var source = fs.readFileSync('tpl/productTpl.md', 'utf8');
    
        var template = hbs.compile(source);
    
        var data = { 'code': jsonContent['products-green'][i].code, 'name': jsonContent['products-green'][i].name, 'line': jsonContent['products-green'][i].line, 'layout': jsonContent['products-green'][i].layout, 'currentDate': currentDate, 'img': jsonContent['products-green'][i].img, 'family': jsonContent['products-green'][i].family, 'line': jsonContent['products-green'][i].line, 'permalink': jsonContent['products-green'][i].permalink, 'energy': jsonContent['products-green'][i].energy, 'cadDraw': jsonContent['products-green'][i].cadDraw, 'exploded': jsonContent['products-green'][i].exploded, 'dataSheet': jsonContent['products-green'][i].dataSheet, 'dimensioni': jsonContent['products-green'][i].dimensioni, 'dimensioniInterne': jsonContent['products-green'][i].dimensioniInterne, 'griglieIncluse': jsonContent['products-green'][i].griglieIncluse, 'capacità': jsonContent['products-green'][i].capacità, 'pesoNetto': jsonContent['products-green'][i].pesoNetto, 'amperaggio': jsonContent['products-green'][i].amperaggio, 'consumo': jsonContent['products-green'][i].consumo, 'compressore': jsonContent['products-green'][i].compressore, 'modelloCompressore': jsonContent['products-green'][i].modelloCompressore, 'termostato': jsonContent['products-green'][i].termostato, 'modelloTermostato': jsonContent['products-green'][i].modelloTermostato, 'gasRefrigerante': jsonContent['products-green'][i].gasRefrigerante, 'temperatura': jsonContent['products-green'][i].temperatura, 'spessoreCoibentazione': jsonContent['products-green'][i].spessoreCoibentazione, 'alzatina': jsonContent['products-green'][i].alzatina};
    
        var result = template(data);
    
        fs.writeFile('results/green/' + jsonContent['products-green'][i].code + '.md', result, 'utf8', function(err){
            if(err) {
                return console.log(err);
            }
        });
    
        console.log('Writing GREEN... ' + jsonContent['products-green'][i].code + '.md')
    
    };
}, 100);