let fs = require('fs')
let hbs = require('handlebars')
let moment = require('moment')

// Get content from file
let content = fs.readFileSync('content.json')

// Define to JSON type
let jsonContent = JSON.parse(content)

// Get current date using momentJs
let currentDate = moment().format('YYYY-MM-DD')

console.log('\nWriting Files...\n')

// Set the if statement for Handlebars
hbs.registerHelper('ifvalue', function(conditional, options) {
    if(options.hash.value === conditional) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
})

// Check / Create directory function
function checkDirectory(directory, callback) {
    fs.stat(directory, function(err, stats){
        if (err && err.errno === 34) {
            fs.mkdir(directory, callback)
        } else {
            callback(err)
        }
    })
}

// Looking for Results directory
checkDirectory("./results/", function(error) {  
    if(error) {
        console.log("Creating Directory Results...")
        fs.mkdirSync('./results/')
    } else {
        //Carry on, all good, directory exists / created.
    }
})



/* *********** HACKING NEEDED HERE *********** //

Copy and paste the code below and hack it accordingly
to your needs. It will create a sub-directory

checkDirectory("./results/SUBDIR-NAME/", function(error) {  
    if(error) {
        console.log("Creating Directory SUBDIR-NAME...")
        fs.mkdirSync('./results/red/')
    } else {
        //Carry on, all good, directory exists / created.
    }
})

// **************************************** */



// Looking for sub-directory 1
checkDirectory("./results/EXAMPLE1/", function(error) {  
    if(error) {
        console.log("Creating Directory EXAMPLE1...")
        fs.mkdirSync('./results/EXAMPLE1/')
    } else {
        //Carry on, all good, directory exists / created.
    }
})

// Looking for sub-directory 2
checkDirectory("./results/EXAMPLE2/", function(error) {  
    if(error) {
        console.log("Creating Directory EXAMPLE2...")
        fs.mkdirSync('./results/EXAMPLE2/')
    } else {
        //Carry on, all good, directory exists / created.
    }
})



/* *********** HACKING NEEDED HERE *********** //

You have to fill the code inside each setTimeout function
with your data, fields, etc

You can also copy and paste the same block each time you need

// **************************************** */



// Writing Files
setTimeout(() => {

    let jsonData = jsonContent['EXAMPLE1']

    for (let i = 0; i < jsonData.length; i++) {

        let source = fs.readFileSync('template/markdownTemplate.md', 'utf8')

        let template = hbs.compile(source)

        let data = {
            'name': jsonData[i].name,
            'subtitle': jsonData[i].subtitle,
            'id': jsonData[i].id,
            'coverIMG': jsonData[i].coverIMG,
            'collection': jsonData[i].collection,
            'currentDate': currentDate,
            'published': jsonData[i].published,
            'layout': jsonData[i].layout,
            'content': jsonData[i].content,
            'ifExample': jsonData[i].ifExample
        }

        let result = template(data);

        fs.writeFile('results/EXAMPLE1/' + jsonData[i].name + '.md', result, 'utf8', function(err){
            if(err) {
                return console.log(err)
            }
        })

        console.log('Writing EXAMPLE1... ' + jsonData[i].name + '.md')

    }

}, 100)

// Writing Files
setTimeout(() => {

    let jsonData = jsonContent['EXAMPLE2']

    for (let i = 0; i < jsonData.length; i++) {

        let source = fs.readFileSync('template/markdownTemplate.md', 'utf8')

        let template = hbs.compile(source)

        let data = {
            'name': jsonData[i].name,
            'subtitle': jsonData[i].subtitle,
            'id': jsonData[i].id,
            'coverIMG': jsonData[i].coverIMG,
            'collection': jsonData[i].collection,
            'currentDate': currentDate,
            'published': jsonData[i].published,
            'layout': jsonData[i].layout,
            'content': jsonData[i].content,
            'ifExample': jsonData[i].ifExample
        }

        let result = template(data)

        fs.writeFile('results/EXAMPLE2/' + jsonData[i].name + '.md', result, 'utf8', function(err){
            if(err) {
                return console.log(err)
            }
        });

        console.log('Writing EXAMPLE2... ' + jsonData[i].name + '.md')

    }

}, 100)