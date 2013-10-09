(function($)
{
   window.scrawl = window.scrawl || {};
   var scrawl = window.scrawl;

   var people = 
   {
      "Fabio Barone":
      {
         "alias": ["tawhauc", "tawhuac"]
      },
      "Jose 'Manny' De Loera":
      {
         "alias": ["manny"],
         "homepage": "http://www.linkedin.com/profile/view?id=60198289"
      },
      "Mike Johnson":
      {
         "alias": ["mjohnson", "mjohnson_db"]
      },
      "David I. Lehn":
      {
         "alias": ["taaz", "dil", "dlehn"],
         "homepage": "http://dil.lehn.org/"
      },
      "Evan Schwartz": 
      {
         "alias": ["eschwartz"],
         "homepage": "http://www.linkedin.com/in/evanmarkschwartz"
      },
      "Erik Anderson":
      {
         "alias": ["eschwartz"],
         "homepage": "http://www.linkedin.com/in/erikanderson"
      },
      "Dave Longley":
      {
         "alias": ["dlongley", "dlongley-db"]
      },
      "David Nicol":
      {
         "alias": ["dln"]
      },
      "Lloyd Hilaiel":
      {
         "alias": ["lloyd|mozilla"],
         "homepage": "http://lloyd.io/"
      },
      "Nick Person":
      {
         "alias": ["futuresoon"]
      },
      "Madhu Nott":
      {
         "alias": ["futuresoon"],
         "homepage": "http://www.linkedin.com/profile/view?id=1568433"
      },
      "Adam B. Levine":
      {
         "alias": ["AdamBLevine"],
         "homepage": "http://letstalkbitcoin.com/bio/adam"
      },
      "Anders Rundgren":
      {
         "alias": ["AndersR"],
         "homepage": "http://se.linkedin.com/in/andersrundgren"
      },
      "Manu Sporny":
      {
         "alias": ["manu-db", "manu1", "manu`", "m4nu"],
         "homepage": "http://manu.sporny.org/about"
      },
      "Pelle Braendgaard":
      {
         "alias": ["pelleb"],
         "homepage": "http://stakeventures.com/pages/whoami"
      },
      "Jeff Sayre":
      {
         "alias": ["jeffsayre"],
         "homepage": "http://jeffsayre.com/"
      },
      "Dmitry Gorilovsky":
      {
         "alias": ["mitgor"],
         "homepage": "http://aintsys.com/en/index.html"
      },
      "Patrick Strateman":
      {
         "alias": ["phantomcircuit"]
      },
      "Melvin Carvalho":
      {
         "alias": ["melvster"],
         "homepage": "http://melvincarvalho.com/"
      },
      "Amir Taaki":
      {
         "alias": ["genjix"],
         "homepage": "http://en.wikipedia.org/wiki/Amir_Taaki"
      },
      "Natasha Rooney":
      {
         "alias": ["schuki"],
         "homepage": "http://uk.linkedin.com/pub/natasha-rooney/9/a7b/560"
      },
      "Mark Cavage":
      {
         "alias": ["mcavage"],
         "homepage": "https://github.com/mcavage"
      },
      "John Foliot":
      {
         "alias": ["JF_"],
         "homepage": "http://john.foliot.ca/"
      },
      "Brent Shambaugh":
      {
         "alias": ["bshambaugh"],
         "homepage": "http://adistributedeconomy.blogspot.com/"
      },
      "Ian Myles":
      {
         "alias": ["imyles"],
         "homepage": "http://www.linkedin.com/pub/ian-myles/4/154/405"
      },
      "Kumar McMillan":
      {
         "alias": ["kumar"],
         "homepage": "http://farmdev.com/about/",
      },
      "Fernando Jiménez Moreno":
      {
         "alias": ["fernando"],
         "homepage": "https://github.com/ferjm",
      },
      "Iulian Dumitraşcu":
      {
         "alias": ["iulian"],
         "homepage": "Iulian Dumitraşcu",
      },
      "Charles (McCathieNevile) Nevile":
      {
         "alias": ["chaals"],
         "homepage": "http://www.linkedin.com/in/chaals",
      },
      "Elliott Sprehn":
      {
         "alias": ["esprehn"],
         "homepage": "http://www.elliottsprehn.com/blog/about/",
      },
      "David Bialer":
      {
         "alias": ["dbialer_"],
         "homepage": "http://www.linkedin.com/in/davidbialer",
      },
      "Andrei Oprea":
      {
         "alias": ["andreio"],
         "homepage": "https://github.com/piatra"
      },
      "Travis Choma":
      {
         "alias": ["tchoma"],
         "homepage": "http://www.linkedin.com/in/travischoma"
      },
      "Amr Fahmy":
      {
         "alias": ["amrf"],
         "homepage": "https://plus.google.com/114459538812845425714/posts"
      },
      "Pindar Wong":
      {
         "alias": ["pindar"],
         "homepage": "http://www.icann.org/en/groups/board/wong.htm"
      },
      "Ted Thibodeau Jr.":
      {
         "alias": ["macted"],
         "homepage": "http://www.linkedin.com/in/macted"
      }
   };

   var htmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n' +
'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n' +
'   "https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> \n' +
'<html xmlns="https://www.w3.org/1999/xhtml" xml:lang="en" lang="en"\n' +
'      class="wf-adelle1adelle2-n6-active wf-active"> \n' +
' \n' +
'<head> \n' +
'  <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> \n' +
'  <title>PaySwarm - Teleconferences</title> \n' +
' \n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n' + 
' \n' +
'  <link rel="stylesheet" href="../../css/1140.css" type="text/css" media="screen" /> \n' +
'  <!--[if lte IE 9]>\n' +
'  <link rel="stylesheet" href="../css/ie.css" type="text/css" media="screen" />\n' +
'  <![endif]--> \n' +
'  <link rel="stylesheet" href="../../css/typeimg.css" type="text/css" media="screen" /> \n' +
'  <link rel="stylesheet" href="../../css/smallerscreen.css" media="only screen and (max-width: 1023px)" /> \n' +
'  <link rel="stylesheet" href="../../css/mobile.css" media="handheld, only screen and (max-width: 767px)" /> \n' +
'  <link rel="stylesheet" href="../../css/layout.css" type="text/css" media="screen" /> \n' +
'  <link rel="shortcut icon" type="image/png" href="../../images/payswarm-icon.png" /> \n' +
'  \n' +
'<style type="text/css">\n' +
'h1 {\n' +
'   margin-top: 24px;\n' +
'   margin-bottom: 14px;\n' +
'}\n' +
'\n' +
'.header {\n' +
'   margin-top: 0px;\n' +
'   margin-bottom: 14px;\n' +
'}\n' +
'\n' +
'ol {\n' +
'   margin-bottom: 0em;\n' +
'}\n' +
'\n' +
'li {\n' +
'   margin-left: 1.5em;\n' +
'   margin-bottom: 0em;\n' +
'}\n' +
'#content {\n' +
'   margin-left: 15%;\n' +
'   margin-right: 15%;\n' +
'}\n' +
'\n' +
'.summary {\n' +
'   margin-left: 10%\n' +
'   margin-right: 10%\n' +
'}\n' +
'\n' +
'.name {\n' +
'   font-weight: bold;\n' +
'}\n' +
'\n' +
'.information {\n' +
'   font-style: italic;\n' +
'}  \n' +
'\n' +
'.comment-continuation {\n' +
'   margin-left: 2em;\n' +
'}\n' +
'\n' +
'dt {\n' +
'   font-style: oblique;\n' +
'}\n' +
'\n' +
'dd {\n' +
'   margin-left: 20px;\n' +
'}\n' +
'\n' +
'  </style>\n' +
'  \n' +
'</head> \n' +
'<body> \n' +
' \n' +
'<div class="titlebar"> \n' +
'   <h1 class="header">PaySwarm</h1> \n' +
'</div> \n' +
'\n' +
'  <div id="content"> \n' +
' \n' +
'  <div class="row"> \n' +
'    <div class="twelvecol last"> \n' +
'\n';

   var htmlFooter = '       </div>\n' +
'  </div>\n' +
'\n' +
'<div class="container vspacing"> \n' +
'  <div class="row"> \n' +
'    <div class="threecol"> \n' +
'      <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a> \n' +
'    </div> \n' +
'    <div class="ninecol last"> \n' +
'      <p>&copy; 2013 Digital Bazaar, Inc. \n' +
'Website CSS created by <a href="http://cssgrid.net/">@andytlr</a> \n' +
'and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/au/"> \n' +
'Creative Commons Attribution-ShareAlike 3.0 Australia License</a>. All other\n' +
'website content is licensed under a\n' + 
'<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"> \n' +
'Creative Commons Attribution-ShareAlike 3.0 License</a>\n' + 
'</p> \n' +
'    </div> \n' +
'  </div> \n' +
'</div> \n' +
' \n' +
'<script type="text/javascript"> \n' +
' \n' +
'  var _gaq = _gaq || [];\n' +
'  _gaq.push(["_setAccount", "UA-1539674-7"]);\n' +
'  _gaq.push(["_trackPageview"]);\n' +
'\n' + 
'  (function() {\n' +
'    var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;\n' +
'    ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";\n' +
'    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(ga);\n' +
'  })();\n' +
' \n' +
'</script>\n' + 
'\n' +  
'</body>\n' +
'</html>';

   scrawl.group = "Web Payments Community Group";
   scrawl.htmlHeader = htmlHeader;
   scrawl.htmlFooter = htmlFooter;
   scrawl.people = people;

})(jQuery);

