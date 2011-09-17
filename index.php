<?php
print <<< htmlcode
<?xml version="1.0" encoding="UTF-8"?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"
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
        <li><strong>When:</strong> Every two weeks on Fridays</li>
        <li><strong>Time:</strong> 1600 UTC, 9am San Francisco, 12pm Boston, 5pm London</li>
        <li><strong>Where:</strong> Digital Bazaar PaySwarm Telecon Bridge, SIP: <a href="sip:payswarm@digitalbazaar.com">payswarm@digitalbazaar.com</a>.</li>
        <li><strong>IRC:</strong> <a href="irc://freenode.net/#payswarm">irc://freenode.net/#payswarm</a>
        <li><strong>Duration:</strong> 60 minutes
      </ul>

      <p class="largeprint">Make sure you have a good headset with a microphone as any background noise is distracting to others during the call. If there is excessive noise on your connection, you will be muted until you need to speak. If you cannot get SIP to work for you, there is an emergency dial-in number. If you use this number regularly, you will be expected to re-imburse the group for call charges. SIP is free for both the caller and the callee - use it. Emergency dial-in number: +1.540.961.4469 x6300.
    </div>
  </div>

  <div class="container onblack"> 
    <div class="row"> 
      <div class="sixcol"> 
  
      <h2>Text and Audio Logs</h2>
      <p class="largeprint">Audio and text logs of all calls are kept to 
        ensure transparency throughout the entire design and 
        development process.</p>

      <ul>
htmlcode;

$allMinutes = scandir('.');
rsort($allMinutes);

foreach($allMinutes as $minutes)
{
   if(preg_match("/201[0-9]-[0-9]{2,2}-[0-9]{2,2}/", $minutes))
   {
     print("                 <li><a href=\"$minutes/\">$minutes</a></li>");
   }
}

print <<< htmlcode
      </ul>
      </div>
    
      <div class="sixcol last"> 
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
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a> 
    </div> 
    <div class="ninecol last"> 
      <p>&copy; 2010-2011 Digital Bazaar, Inc. 
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

