var credits = '<center><h2>Contributors</h2><span class="profile"> <img src="https://avatars0.githubusercontent.com/u/65277548?s=460&u=046c4080657ef13dd8de8cd0e598a92b12839435&v=4"><span class="profile text">Daniel4-Scratch</span></span>       <span class="profile"> <img src="https://avatars0.githubusercontent.com/u/69394951?s=460&u=71572a469b965f85b1f62ae009eba43563f31425&v=4"><span class="profile text">icositetrachoron</span></span> <span class="profile"> <img src="https://avatars0.githubusercontent.com/u/61620631?s=460&u=2ba1aabd88eb759b069c4d74c32f0b771a6b8590&v=4"><span class="profile text">R4356th</span></span> <span class="profile"> <img src="https://avatars1.githubusercontent.com/u/65285239?s=460&v=4"><span class="profile text">18001767679</span></span> <span class="profile"> <img src="https://avatars3.githubusercontent.com/u/55925854?s=460&u=c34a515bc942fbe97c3d961940f94345f42765d5&v=4"><span class="profile text">Sombrero64</span></span></center>'




var template = function(title, banner, content) {
  document.body.innerHTML = '<!DOCTYPE html> <html lang="en"> <head> <link rel="icon" href="https://snapforks.github.io/SnapForks/favicon.ico"> <link rel="manifest" href="/manifest.webmanifest"/> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>'+title+' | SnapForks</title> <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"> <link rel="stylesheet" href="https://snapforks.github.io/assets/css/style.css"> <script src="https://snapforks.github.io/assets/js/script.js" defer></script> </head> <body> <div class="navbar" id="myTopnav"> <a href="index.html" class="logo"><img src="https://cdn.glitch.com/92e53b87-44f7-4277-9851-81b7949b69e2%2Fwhite-snapforks.png" width="40" class="r-do"> SnapForks </a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="ri-menu-fill"></i>    </a> <a href="run" class="navbar1 button-white right">Run</a> <a href="install" class="navbar1 button right">Install</a> <a href="https://github.com/SnapForks" class="navbar1 button right">Github <i class="ri-github-fill ri-lg r-do"></i></a> <a href="status" class="navbar1 button right">Status</a> </div>'
  if (title == "Credits"){
  document.body.innerHTML += '<div class="header">'+banner+'</div> <div class="content">'+credits+''+content+'</div>'
  }else{
  document.body.innerHTML += '<div class="header">'+banner+'</div> <div class="content">'+content+'</div>'
  }
  document.body.innerHTML += '<div class="footer"> © 2021 SnapForks<br><br> Snap! is licensed under the terms of GNU General Public License v3.0. <section> <h3>Social</h3> <a href="https://github.com/SnapForks">Github <i class="ri-github-fill r-do"></i></a> <br> <a href="https://forum.snap.berkeley.edu/t/snapforks-official-part-2">The Snap! Forums</a> </section> <section> <h3>Pages</h3> <a href="run">Player</a> <br> <a href="install">Install</a> <br> <a href="status">Status</a> <br> <a href="credits">Credits</a> </section> </div> </body> </html>'
}
