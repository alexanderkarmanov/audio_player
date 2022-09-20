        function audioPlayer(){
            var currentSong = 0;
            // console.log(currentSong);
            const audioLog = document.querySelector('audio');
            // console.log(audioLog);

            $("#audioPlayer")[0].src = $("#playlist li a")[0];
            $("#audioPlayer")[0].play();
            $("#playlist li a").click(function(e){
               e.preventDefault(); 
               $("#audioPlayer")[0].src = this;
               $("#audioPlayer")[0].play();
               $("#playlist li").removeClass("current-song");
                currentSong = $(this).parent().index();
                $(this).parent().addClass("current-song");

                const SongName = document.querySelector('li.current-song>a.songItems');
                // console.log(SongName);
                let song = SongName.innerText;

                const AlbumName = document.querySelector('li.current-song>p.album');
                let album = AlbumName.innerText;
                console.log(album);

                const tatalPriceElement = document.getElementById('total-price');
                 tatalPriceElement.innerText = song;

                const totalAlbumElement = document.getElementById('total-album');
                totalAlbumElement.innerText = album;

                // if (album=='Kara-n-teen'){
                //     console.log('да')
                //     $("#AlbumIcon").removeClass("img-Ne");
                //     $("#AlbumIcon").addClass("img-Kara");

                // } else {
                //     console.log('нет')
                //     $("#AlbumIcon").removeClass("img-Kara");
                //     $("#AlbumIcon").addClass("img-Ne");
                // }
                });
            
            // $("#audioPlayer")[0].addEventListener("ended", function(){
            //    currentSong++;
            //     if(currentSong == $("#playlist li a").length)
            //         currentSong = 0;
            //     $("#playlist li").removeClass("current-song");
            //     $("#playlist li:eq("+currentSong+")").addClass("current-song");
            //     $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
            //     $("#audioPlayer")[0].play();

            //     const SongName = document.querySelector('li.current-song>a.songItems');
            //     console.log(SongName);
            //     let song = SongName.innerText;

            //     const AlbumName = document.querySelector('li.current-song>p.album');
            //     let album = AlbumName.innerText;
            //     console.log(album);

            //     const tatalPriceElement = document.getElementById('total-price');
            //      tatalPriceElement.innerText = song;

            //     const totalAlbumElement = document.getElementById('total-album');
            //     totalAlbumElement.innerText = album;

            //     if (album=='Kara-n-teen'){
            //         console.log('да')
            //         $("#AlbumIcon").removeClass("img-Ne");
            //         $("#AlbumIcon").addClass("img-Kara");

            //     } else {
            //         console.log('нет')
            //         $("#AlbumIcon").removeClass("img-Kara");
            //         $("#AlbumIcon").addClass("img-Ne");
            //     }
            // });
        }