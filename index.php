<?php
print <<< htmlcode
<?xml version="1.0" encoding="UTF-8"?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="https://www.w3.org/1999/xhtml" xml:lang="en" lang="en"
      class="wf-adelle1adelle2-n6-active wf-active"> 
 
<head> 
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> 
  <title>PaySwarm - Teleconferences</title> 
 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
 
  <link rel="stylesheet" href="../css/1140.css" type="text/css" media="screen" /> 
  <!--[if lte IE 9]>
  <link rel="stylesheet" href="../css/ie.css" type="text/css" media="screen" />
  <![endif]--> 
  <link rel="stylesheet" href="../css/typeimg.css" type="text/css" media="screen" /> 
  <link rel="stylesheet" href="../css/smallerscreen.css" media="only screen and (max-width: 1023px)" /> 
  <link rel="stylesheet" href="../css/mobile.css" media="handheld, only screen and (max-width: 767px)" /> 
  <link rel="stylesheet" href="../css/layout.css" type="text/css" media="screen" /> 
  <link rel="shortcut icon" type="image/png" href="../images/payswarm-icon.png" /> 
  
</head> 
<body> 
 
<div class="titlebar"> 
   <h1>PaySwarm</h1> 
</div> 
<div class="container vspacing"> 
  <div class="row"> 
    <div class="twelvecol"> 
      <h1>PaySwarm -
        <span class="subhead">Teleconferences</span></h1> 
    </div> 
  </div>
</div>

  <div id="content"> 

  <div class="row"> 
    <div class="twelvecol last"> 
           
      <p class="largeprint">All Web Payments teleconferences are open to the public. Anyone may join and participate in the discussion. All teleconferences are announced at least 24 hours in advance on the <a href="http://lists.w3.org/Archives/Public/public-webpayments/">Web Payments mailing list</a>.</p>

      <ul class="largeprint">
        <li><strong>When:</strong> 
htmlcode;
if(date('l', strtotime('today')) === 'Wednesday')
{
   print date('l, F jS (Y-m-d)', strtotime('today'));
}
else
{
   print date('l, F jS (Y-m-d)', strtotime('next Wednesday'));
}

print <<< htmlcode
</li>
        <li><strong>Time:</strong> 1500 UTC / 8am San Francisco / 11am Boston / 4pm London</li>
        <li><strong>Where:</strong> sip:<a href="sip:payswarm@digitalbazaar.com">payswarm@digitalbazaar.com</a> or land-line: +1.540.961.4469 x6300</li>
        <li><strong>IRC:</strong> <a href="irc://freenode.net/#payswarm">irc://freenode.net/#payswarm</a>
        <li><strong>Duration:</strong> 60 minutes
      </ul>

      <p class="largeprint">Make sure you have a good headset with a microphone as any background noise is distracting to others during the call. If there is excessive noise on your connection, you will be muted until you need to speak. If you cannot get SIP to work for you, there is an emergency dial-in number. If you use this number regularly, you will be expected to re-imburse the group for call charges. SIP is free for both the caller and the callee - use it. Emergency dial-in number: +1.540.961.4469 x6300.
    </div>
  </div>

  <div class="container onblack"> 
    <div class="row"> 
      <div class="twelvecol"> 
  
      <h2>Text and Audio Logs</h2>
      <p class="largeprint">Audio and text logs of all calls are kept to 
        ensure transparency throughout the entire design and 
        development process.</p>

htmlcode;

// Generate the minutes summary cache
$mscfilename = "minutes-summary-cache.html";
$mtime = filemtime($mscfilename);

// refresh the cache on demand, every hour
$mcache = fopen($mscfilename, "c+");
if(!file_exists($mscfilename) or ((time() - $mtime) > 0)) // 3600
{
   $allMinutes = array_reverse(scandir('.'));
   fwrite($mcache, "<ul>\n");
   foreach($allMinutes as $minutes)
   {
      if(preg_match("/201[0-9]-[0-9]{2,2}-[0-9]{2,2}/", $minutes))
      {
         fwrite($mcache, "   <li><a href=\"$minutes/\">Text and Audio Minutes for $minutes</a>\n");

         // open the IRC log file
         $irclogfilename = $minutes . "/irc.log";
         $irclog = file($irclogfilename, 
            FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
         $topic = 1;

         // process the raw IRC log and output the topics
         fwrite($mcache, "      <ol>\n");
         foreach($irclog as $line_num => $line)
         {
            if(preg_match("/.*Topic: (.*)/", $line, $matches))
            {
               // link to each topic in the HTML minutes
               fwrite($mcache, 
                  "         <li style=\"padding: clear;\">" .
                  htmlspecialchars($matches[1]) . 
                  " [<a href=\"$minutes/#topic-$topic\">" .
                  "permalink</a>]</li>\n");
               $topic += 1;
            }
         }
         fwrite($mcache, "      </ol></li>");
      }
   }
   fwrite($mcache, "</ul>\n");
   
   fseek($mcache, 0);
   print fread($mcache, 65536);
}
else
{
   print fread($mcache, 65536);
}
fclose($mcache);

print <<< htmlcode
      </ul>
      </div>
    </div>
  </div>
  <div class="row"> 
    <div class="twelvecol last"> 
      <div class="twelvecol"> 
      <h2>Tools</h2>
      
      <p class="largeprint">A number of tools are available to those that
        would like to participate in the calls.</p>
      
      <p><a href="http://www.linphone.org/">Linphone</a> or <a href="http://icanblink.com/">Blink</a> - Popular Voice Over IP SIP clients used for audio during the teleconferences.</p>
      <p><a href="http://webchat.freenode.net/?channels=#payswarm">Web IRC</a> - An easy-to-use Web-based IRC client for text chat during the teleconferences.</p>
      <p><a href="scribe-tool">Scribe Tool</a> - The scribe tool makes it easy to clean up minutes recorded in IRC.</p>

      </div>
    </div>
  </div>

 
<div class="container vspacing"> 
  <div class="row"> 
    <div class="threecol"> 
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a> 
    </div> 
    <div class="ninecol last"> 
      <p>&copy; 2010-2013 Digital Bazaar, Inc. 
Website CSS created by <a href="http://cssgrid.net/">@andytlr</a> 
and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/au/"> 
Creative Commons Attribution-ShareAlike 3.0 Australia License</a>. All other
website content is licensed under a 
<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"> 
Creative Commons Attribution-ShareAlike 3.0 License</a> 
</p> 
    </div> 
  </div> 
</div> 
 
<script type="text/javascript"> 
 
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-1539674-7']);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
  })();
 
</script> 
</body> 
</html>

htmlcode;

?>

