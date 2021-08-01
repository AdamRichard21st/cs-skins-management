$(e => {

    let settings = {
        totalParts: 0
    };

    let totalAddedSkins;


    const copySkinIdToClipBoard = skinId => {

        let $input = $(`<input type="text" value="${skinId}"/>`)
            .appendTo(document.body);

        $input[0].select();
        $input[0].setSelectionRange(0, 99999);

        if (!document.execCommand('copy'))
        {
            console.log('App could not copy skin id to clipboard');
        }

        $input.remove();
    };


    const addSkin = skin => {

        console.log(skin);

        let skinTextureFile = 'assets/images/bg.jpg';
        let skinTextureName = 'default';

        let randomId = Math.floor(Math.random() * (9999 - 1)) + 1;

        if ( skin.texture.length )
        {
            let file = skin.texture[0];
            let reader = new FileReader();

            skinTextureName = file.name;

            let img = document.createElement("img");

            img.file = file;

            reader.onload = (aImg => {
                return e => {

                    $(`.skin#${randomId} .skin-cover`).css({
                        backgroundImage: `url(${e.target.result})`
                    });
                };
            })(img);

            reader.readAsDataURL(file);
        }

        $(`<div class="col-sm-6 col-md-6 col-xl-4 col-xxl-3 mb-4">
            <div class="skin shadow-lg" id="${randomId}">
                <div class="skin-cover"
                    style="background-image: url('${skinTextureFile}')">
                </div>
                <div class="skin-content px-4 py-3">
                    <span class="skin-subid float-end"> - </span>
                    <p class="skin-name mb-2">${skin.name}</p>
                    <span class="skin-texture btn btn-sm btn-primary mb-0">${skinTextureName}</span>
                </div>
            </div>
        </div>`).appendTo('#skins');

        updateSkins();
    };


    const updateSkins = () => {

        let $skins = $('#skins .skin');

        totalAddedSkins = $skins.length;

        $skins.each((i, e) => {

            let subgroupId = getSkinSubgroupId(i);

            $(e).find('.skin-subid').text(` ${subgroupId} `);
        });
    };


    const readSettings = () => {

        settings.totalParts = $('#set-skin').find('#total-parts').val();
    };


    const getSkinSubgroupId = currentSkinId => {

        return SubGroups.selectSkin(settings.totalParts, totalAddedSkins, currentSkinId);
    };


    $('.skin-subid').on('click', e => {

        copySkinIdToClipBoard($(e.target).text().trim());
    });


    $('#add-skin').on('submit', e => {

        e.preventDefault();

        addSkin({
            name: $(e.target).find('#skin-name').val(),
            texture: $(e.target).find('#skin-texture')[0].files
        });

        readSettings();
        updateSkins();
    });


    $('#set-skin').on('change', function (e) {

        readSettings();
        updateSkins();
    });
});