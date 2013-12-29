var _ = require('underscore');
var async = require('async');
var fs = require('fs')
var path = require('path');
var program = require('commander');
var scrawl = require('./scrawl');

program
  .version('0.3.0')
  .option('-d, --directory <directory>', 'The directory to process.')
  .parse(process.argv);

if(!program.directory) {
  console.log('Error: You must specify a directory to process');
  process.exit(1);
}

// setup global variables
var dstDir = path.resolve(path.join(program.directory));
var logFile = path.resolve(path.join(program.directory, 'irc.log'));
var indexFile = path.resolve(path.join(program.directory, 'index.html'));
var htmlHeader = fs.readFileSync(
  __dirname + '/../../header.inc', {encoding: 'utf8'});
var htmlFooter = fs.readFileSync(
  __dirname + '/../../footer.inc', {encoding: 'utf8'});
var peopleJson = fs.readFileSync(
  __dirname + '/people.json', {encoding: 'utf8'});
htmlHeader = htmlHeader.replace(/<\?php.*\$TOP_DIR.*\?>/g, '../..');
htmlFooter = htmlFooter.replace(/<\?php.*\$TOP_DIR.*\?>/g, '../..');

// configure scrawl
scrawl.group = "Web Payments Community Group";
scrawl.people = JSON.parse(peopleJson);

async.waterfall([ function(callback) {
  // check to make sure the log file exists in the given directory
  //console.log("dstDir:", dstDir, "\nlogFile:", logFile);
  fs.exists(logFile, function(exists) {
    if(exists) {
      callback();
    } else {
      callback('Error: ' + logFile + 
        ' does not exist, required for processing.');
    }
  });
}, function(callback) {
  // read the IRC log file
  fs.readFile(logFile, 'utf8', callback);
}, function(logData, callback) {
  // generate the index.html file
  var minutes = 
    htmlHeader + 
    '<section><div class="container"><div class="row white"><br><div class="col-lg-offset-2 col-lg-8">' +
    scrawl.generateMinutes(logData, 'html') + '</div></div></div></section>' + 
    htmlFooter;
  callback(null, minutes);
}, function(minutes, callback) {
  // write the index.html file to disk
  console.log(minutes);
  callback();
}], function(err) {
  // check to ensure there were no errors
  if(err) {
    console.log('Error:', err);
  }
});

