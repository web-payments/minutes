var _ = require('underscore');
var async = require('async');
var fs = require('fs')
var path = require('path');
var program = require('commander');
var scrawl = require('./scrawl');
var wp = require('wporg');

program
  .version('0.3.0')
  .option('-d, --directory <directory>', 'The directory to process.')
  .option('-h, --html', 'If set, write the minutes to an index.html file')
  .option('-w, --wordpress', 'If set, publish the minutes to the blog')
  .option('-e, --email', 'If set, publish the minutes to the mailing list')
  .option('-t, --twitter', 'If set, publish the minutes to Twitter')
  .option('-g, --google', 'If set, publish the minutes to G+')
  .option('-q, --quiet', 'Don\'t print status information to the console')
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
logData = '';
var gDate = path.basename(dstDir);
gDate = gDate.replace(/-[a-z]+$/, '');
 
// configure scrawl
scrawl.group = "Web Payments Community Group";
scrawl.people = JSON.parse(peopleJson);

/************************* Utility Functions *********************************/
function postToWordpress(username, password, content, callback) {
  var client = wp.createClient({
    username: username,
    password: password,
    url: 'https://www.w3.org/community/webpayments/xmlrpc.php'
//    url: 'https://manu.sporny.org/xmlrpc.php'
  });
  
  // Re-format the HTML for publication to a Wordpress blog
  var datetime = new Date(gDate);
  datetime.setHours(37);
  var wpSummary = content.post_content;
  wpSummary = wpSummary.substring(
    wpSummary.indexOf('<dl>'), wpSummary.indexOf('</dl>') + 5);
  wpSummary = wpSummary.replace(/href=\"#/g, 
    'href="http://web-payments.org/minutes/' + mDate + '/#');
  wpSummary = wpSummary.replace(/href=\"audio/g, 
    'href="http://web-payments.org/minutes/' + mDate + '/audio');
  wpSummary = wpSummary.replace(/<div><audio[\s\S]*\/audio><\/div>/g, '');
  wpSummary += '<p>Detailed minutes and recorded audio for this call are ' +
    '<a href="https://web-payments.org/minutes/' + mDate +
    '/">available in the archive</a>.</p>';

  // calculate the proper post date
  gmtDate = datetime.toISOString();
  gmtDate = gmtDate.replace('T', ' ');
  gmtDate = gmtDate.replace(/\.[0-9]*Z/, '');
  
  content.post_content = wpSummary;
  content.post_date_gmt = gmtDate;
  content.terms_names = ['Meetings'];
  content.post_name = mDate + '-minutes';
  content.custom_fields = [{
    s2_meta_field: 'no'
  }];

  client.newPost(content, function(err, data) {
    if(err) {
      console.log(err);
      
      console.log('scrawl: You may have to add this information manually:');
      
      console.log('Title:\n' + content.post_title);
      console.log('Content:\n' + content.post_content);
      console.log('Slug:\n' + content.post_name);
    }
    else {
      console.log(data);
      // Do something.
    }
    callback();
  });
}

/*************************** Main Functionality ******************************/

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
}, function(data, callback) {
  logData = data;
  // generate the index.html file
  var minutes = 
    htmlHeader + 
    '<section><div class="container"><div class="row white"><br>' +
    '<div class="col-lg-offset-2 col-lg-8">' +
    scrawl.generateMinutes(logData, 'html', gDate) + 
    '</div></div></div></section>' + htmlFooter;
  callback(null, minutes);
}, function(minutes, callback) {
  // write the index.html file to disk
  if(program.html) {
    if(!program.quiet) {
      console.log('scrawl: Writing', indexFile);
    }
    fs.writeFile(indexFile, minutes, {}, callback);
  } else {
    callback();
  }
}, function(callback) {
  if(program.wordpress) {
    if(!program.quiet) {
      console.log('scrawl: Creating new blog post.');
    }
    var content = {
      post_title: 'Web Payments Meeting Minutes for ' + gDate,
      post_content: scrawl.generateMinutes(logData, 'html', gDate)
    };
    
    if(process.env.SCRAWL_WP_USERNAME && process.env.SCRAWL_WP_PASSWORD) {
      postToWordpress(
        process.env.SCRAWL_WP_USERNAME, process.env.SCRAWL_WP_PASSWORD, 
        content, callback);
    } else {
      var prompt = require('prompt');
      prompt.start();
      prompt.get({
        properties: {
          username: {
            description: 'Enter the Web Payments WordPress username',
            pattern: /^.{4,}$/,
            message: 'The username must be at least 4 characters.',
            'default': 'msporny'
          },
          password: {
            description: 'Enter the user\'s password',
            pattern: /^.{4,}$/,
            message: 'The password must be at least 4 characters.',
            hidden: true,
            'default': 'password'
          }
        }
      }, function(err, results) {
        postToWordpress(results.username, results.password, content, callback);
      });
    }
  } else {
    callback();
  }
}], function(err) {
  // check to ensure there were no errors
  if(err) {
    console.log('Error:', err);
  }
});

