/* #region topnav + header */

var topnav = '';
/*
    <a style='cursor:auto;' class='active'><br></a>
    <a href='javascript:void(0);' class='icon' onclick='toggleNav()'>
        <i class='fa fa-bars'></i>
    </a>
    <div class='iconz'>
        <a href='https://open.spotify.com/artist/671PTL2M4TT9q3vh9tkba4' target='_blank'><img src='/assets/pics/icons/spotify.svg'></a>
        <a href='https://openness.bandcamp.com/' target='_blank'><img src='/assets/pics/icons/bandcamp.svg'></a>
        <a href='https://music.apple.com/us/artist/openness/1469974662' target='_blank'><img src='/assets/pics/icons/apple.svg'></a>
        <a href='https://soundcloud.com/opennessmusic' target='_blank'><img src='/assets/pics/icons/soundcloud.svg'></a>
        <a href='https://www.instagram.com/theopenness/' target='_blank'><img src='/assets/pics/icons/instagram.svg'></a>
        <a href='https://www.facebook.com/theopenness/' target='_blank'><img src='/assets/pics/icons/facebook.svg'></a>
    </div>
*/
topnav+='<a style=\'cursor:auto;\' class=\'active\'><br><\/a>\r\n    <a href=\'javascript:void(0);\' class=\'icon\' onclick=\'toggleNav()\'>\r\n        <i class=\'fa fa-bars\'><\/i>\r\n    <\/a>\r\n    <div class=\'iconz\'>\r\n        <a href=\'https:\/\/open.spotify.com\/artist\/671PTL2M4TT9q3vh9tkba4\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/spotify.svg\'><\/a>\r\n        <a href=\'https:\/\/openness.bandcamp.com\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/bandcamp.svg\'><\/a>\r\n        <a href=\'https:\/\/music.apple.com\/us\/artist\/openness\/1469974662\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/apple.svg\'><\/a>\r\n        <a href=\'https:\/\/soundcloud.com\/opennessmusic\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/soundcloud.svg\'><\/a>\r\n        <a href=\'https:\/\/www.instagram.com\/theopenness\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/instagram.svg\'><\/a>\r\n        <a href=\'https:\/\/www.facebook.com\/theopenness\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/facebook.svg\'><\/a>\r\n    <\/div>'

document.getElementsByClassName('topnav')[0].innerHTML = topnav;

var bontent = '';
/*
    <a class='collapsible' onclick="document.getElementById('music').scrollIntoView(true);setTimeout(toggleNav, 800);">Music</a>
    <a class='collapsible' onclick="document.getElementById('videos').scrollIntoView(true);setTimeout(toggleNav, 800);">Videos</a>
    <a class='collapsible' onclick="document.getElementById('collaborators').scrollIntoView(true);setTimeout(toggleNav, 800);">Collaborators</a>
    <a class='collapsible' onclick="document.getElementById('bio').scrollIntoView(true);setTimeout(toggleNav, 800);">Bio</a>
    <a class='collapsible' onclick="document.getElementById('merch').scrollIntoView(true);setTimeout(toggleNav, 800);">Merch</a>
    <a class='collapsible' onclick="document.getElementById('photos').scrollIntoView(true);setTimeout(toggleNav, 800);">Photos</a>
*/
bontent+='<a class=\'collapsible\' onclick=\"document.getElementById(\'music\').scrollIntoView(true);setTimeout(toggleNav, 800);\">Music<\/a>\r\n\t\t<a class=\'collapsible\' onclick=\"document.getElementById(\'videos\').scrollIntoView(true);setTimeout(toggleNav, 800);\">Videos<\/a>\r\n\t\t<a class=\'collapsible\' onclick=\"document.getElementById(\'collaborators\').scrollIntoView(true);setTimeout(toggleNav, 800);\">Collaborators<\/a>\r\n\t\t<a class=\'collapsible\' onclick=\"document.getElementById(\'bio\').scrollIntoView(true);setTimeout(toggleNav, 800);\">Bio<\/a>\r\n\t\t<a class=\'collapsible\' onclick=\"document.getElementById(\'merch\').scrollIntoView(true);setTimeout(toggleNav, 800);\">Merch<\/a>\r\n\t\t<a class=\'collapsible\' onclick=\"document.getElementById(\'photos\').scrollIntoView(true);setTimeout(toggleNav, 800);\">Photos<\/a>'

document.getElementById('bontent').innerHTML = bontent;

var header = ''
/*
    <div class='sections'>
        <a onclick="document.getElementById('music').scrollIntoView(true);">Music</a>
        <a onclick="document.getElementById('videos').scrollIntoView(true);">Videos</a>
        <a onclick="document.getElementById('collaborators').scrollIntoView(true);">Collaborators</a>
        <a onclick="document.getElementById('bio').scrollIntoView(true);">Bio</a>
        <a onclick="document.getElementById('merch').scrollIntoView(true);">Merch</a>
        <a onclick="document.getElementById('photos').scrollIntoView(true);">Photos</a>
    </div>
    <div class='icons'>
        <a href='https://open.spotify.com/artist/671PTL2M4TT9q3vh9tkba4' target='_blank'><img src='/assets/pics/icons/spotify.svg'></a>
        <a href='https://openness.bandcamp.com/' target='_blank'><img src='/assets/pics/icons/bandcamp.svg'></a>
        <a href='https://music.apple.com/us/artist/openness/1469974662' target='_blank'><img src='/assets/pics/icons/apple.svg'></a>
        <a href='https://soundcloud.com/opennessmusic' target='_blank'><img src='/assets/pics/icons/soundcloud.svg'></a>
        <a href='https://www.instagram.com/theopenness/' target='_blank'><img src='/assets/pics/icons/instagram.svg'></a>
        <a href='https://www.facebook.com/theopenness/' target='_blank'><img src='/assets/pics/icons/facebook.svg'></a>
    </div>
*/
header+='<div class=\'sections\'>\r\n        <a onclick=\"document.getElementById(\'music\').scrollIntoView(true);\">Music<\/a>\r\n        <a onclick=\"document.getElementById(\'videos\').scrollIntoView(true);\">Videos<\/a>\r\n        <a onclick=\"document.getElementById(\'collaborators\').scrollIntoView(true);\">Collaborators<\/a>\r\n        <a onclick=\"document.getElementById(\'bio\').scrollIntoView(true);\">Bio<\/a>\r\n        <a onclick=\"document.getElementById(\'merch\').scrollIntoView(true);\">Merch<\/a>\r\n        <a onclick=\"document.getElementById(\'photos\').scrollIntoView(true);\">Photos<\/a>\r\n    <\/div>\r\n    <div class=\'icons\'>\r\n        <a href=\'https:\/\/open.spotify.com\/artist\/671PTL2M4TT9q3vh9tkba4\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/spotify.svg\'><\/a>\r\n        <a href=\'https:\/\/openness.bandcamp.com\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/bandcamp.svg\'><\/a>\r\n        <a href=\'https:\/\/music.apple.com\/us\/artist\/openness\/1469974662\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/apple.svg\'><\/a>\r\n        <a href=\'https:\/\/soundcloud.com\/opennessmusic\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/soundcloud.svg\'><\/a>\r\n        <a href=\'https:\/\/www.instagram.com\/theopenness\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/instagram.svg\'><\/a>\r\n        <a href=\'https:\/\/www.facebook.com\/theopenness\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/facebook.svg\'><\/a>\r\n    <\/div>'

document.getElementsByClassName('header')[0].innerHTML = header;

/* #endregion */

/* #region videos */

var videotext = '';
/*
<div class='vid'>
    <div class='container'>
        <iframe class='responsive-iframe' src='https://www.youtube.com/embed/Dcm6nnO5FW4?controls=0' frameborder='0' allowfullscreen></iframe>
    </div>
</div>
*/
for(var i=0;i<videos.length;i++){
    videotext += '<div class=\'vid\'>\r\n\t\t\t\t<div class=\'container\'>\r\n\t\t\t\t\t<iframe class=\'responsive-iframe lazyload\' data-src=\''
        +videos[i]+'\' frameborder=\'0\' allowfullscreen><\/iframe>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>';
}

document.getElementById('videoreleases').innerHTML = videotext;

/* #endregion */

/* #region music releases */

var musictext = '';
/*
<a href='/journey/' target='_blank'><div class='rcrd'><img src='/assets/pics/icons/journey.jpg'/><h1>Adore the Journey</h1></div></a>
*/
for(var i=0;i<music.length;i++){
    musictext += '<a href=\''
        +music[i].link+'\' target=\'_blank\'><div class=\'rcrd\'><img data-src=\''
        +music[i].image+'\' class=\'lazyload\'\/><h1>'+music[i].name+'<\/h1><\/div><\/a>';
}

document.getElementById('musicreleases').innerHTML = musictext;

/* #endregion */

/* #region collab */

var collabtext ='';
/*
<a href='https://open.spotify.com/artist/3PqrDJmnmIbb2KJV70SYKH?si=tbBFGDtJQh6IasKV58Vt6w' target='_blank'>Joseph Figueroa</a><br>
Alex Kah<br>
*/
for(var i=0;i<collaborators.length;i++){
    var c = collaborators[i];
    if(c.link=='none'){
        collabtext+=c.name;
    }
    else{
        collabtext+='<a href=\''+c.link+'\' target=\'_blank\'>'+c.name+'<\/a>'
    }
    if(i!=collaborators.length-1){
        collabtext+='<br>'
    }
}

document.getElementById('textnames').innerHTML = collabtext;

/* #endregion */

/* #region bio */

var biotext ='';

for(var i=0;i<bio.length;i++){
    if(bio[i]=='image'){
        biotext+='<img data-src=\'assets\/bio.jpg\' class=\'lazyload\' style=\'width:80%;max-width:800px;\'\/>';
    }else{
        biotext+='<p>'+bio[i]+'<\/p>';
    }
}

document.getElementById('text').innerHTML = biotext;

/* #endregion */

/* #region merch */

var merchpicstxt = '';
/*
<img src='assets/merch1tee.jpg'/></div>
<div class='merchpic'><img src='assets/merch2tees.jpg'/></div>
<div class='merchpic'><img src='assets/merch3maliatees.jpg'/></div>
<div class='merchpic'><img src='assets/merch4hoodie.jpg'/></div>
<div class='merchpic'><img src='assets/merch5tanks.jpg'/></div>
*/

for(var i=0;i<merchpics.length;i++){
    merchpicstxt += '<div class=\'merchpic\'><img data-src=\''+merchpics[i]+'\' class="lazyload"\/><\/div>';
}
document.getElementById('merchpics').innerHTML = merchpicstxt;

var merchtxt ='';

for(var i=0;i<merchtext.length;i++){
    if(merchtext[i].includes("Keelanmcd@gmail.com")){
        var place = merchtext[i].indexOf("Keelanmcd@gmail.com");
        console.log("sup");
        merchtxt+='<p>'+merchtext[i].substring(0,place)+'<a href="mailto:someone@yoursite.com">Keelanmcd@gmail.com</a>'+merchtext[i].substring(place+19)+'<\/p>';
    }
    else{
        merchtxt+='<p>'+merchtext[i]+'<\/p>';
    }
}

document.getElementById('textmerch').innerHTML = merchtxt;

/* #endregion */

/* #region pics */

notGrid(document.getElementById('gallery'),'photos',400);
$(window).on('resize', function(){
    notGrid(document.getElementById('gallery'),'photos',400);
});

/* #endregion */

/* #region footer */
var footer = '';
/*
    <a href='https://www.instagram.com/theopenness/' target='_blank'><img src='/assets/pics/icons/instagram.svg'></a>
    <a href='https://openness.bandcamp.com/' target='_blank'><img src='/assets/pics/icons/bandcamp.svg'></a>
    <a href='https://music.apple.com/us/artist/openness/1469974662' target='_blank'><img src='/assets/pics/icons/apple.svg'></a>
    <a href='https://soundcloud.com/opennessmusic' target='_blank'><img src='/assets/pics/icons/soundcloud.svg'></a>
    <a href='https://open.spotify.com/artist/671PTL2M4TT9q3vh9tkba4' target='_blank'><img src='/assets/pics/icons/spotify.svg'></a>
    <a href='https://www.facebook.com/theopenness/' target='_blank'><img src='/assets/pics/icons/facebook.svg'></a>
*/
footer += '<a href=\'https:\/\/www.instagram.com\/theopenness\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/instagram.svg\'><\/a>\r\n    <a href=\'https:\/\/openness.bandcamp.com\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/bandcamp.svg\'><\/a>\r\n    <a href=\'https:\/\/music.apple.com\/us\/artist\/openness\/1469974662\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/apple.svg\'><\/a>\r\n    <a href=\'https:\/\/soundcloud.com\/opennessmusic\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/soundcloud.svg\'><\/a>\r\n    <a href=\'https:\/\/open.spotify.com\/artist\/671PTL2M4TT9q3vh9tkba4\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/spotify.svg\'><\/a>\r\n    <a href=\'https:\/\/www.facebook.com\/theopenness\/\' target=\'_blank\'><img src=\'\/assets\/pics\/icons\/facebook.svg\'><\/a>'

document.getElementsByClassName('footer')[0].innerHTML = footer;

/* #endregion */