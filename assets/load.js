var videotext = '';
/*
<div class='vid'>
    <div class='container'>
        <iframe class='responsive-iframe' src='https://www.youtube.com/embed/Dcm6nnO5FW4?controls=0' frameborder='0' allowfullscreen></iframe>
    </div>
</div>
*/
for(var i=0;i<videos.length;i++){
    videotext += '<div class=\'vid\'>\r\n\t\t\t\t<div class=\'container\'>\r\n\t\t\t\t\t<iframe class=\'responsive-iframe\' src=\''
        +videos[i]+'\' frameborder=\'0\' allowfullscreen><\/iframe>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>';
}

document.getElementById('videoreleases').innerHTML = videotext;

var musictext = '';
/*
<a href='/journey/' target='_blank'><div class='rcrd'><img src='assets/journey.jpg'/><h1>Adore the Journey</h1></div></a>
*/
for(var i=0;i<music.length;i++){
    musictext += '<a href=\''
        +music[i].link+'\' target=\'_blank\'><div class=\'rcrd\'><img src=\'..\/assets\/'
        +music[i].image+'\'\/><h1>'+music[i].name+'<\/h1><\/div><\/a>';
}

document.getElementById('musicreleases').innerHTML = musictext;

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

var biotext ='';

for(var i=0;i<bio.length;i++){
    if(bio[i]=='image'){
        biotext+='<img src=\'assets\/bio.jpg\' style=\'width:80%;max-width:800px;\'\/>';
    }else{
        biotext+='<p>'+bio[i]+'<\/p>';
    }
}

document.getElementById('text').innerHTML = biotext;