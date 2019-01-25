/* $( document ).ready( function() { */
    const textObject = {
        content1: '<h4 class="blackText">Alles goed?<i class="fas fa-times float-right"></i></h4><br>Een wraaksausje kent vele aromas. Een beetje een peper, een beetje zout. Een beetje waar je al dan niet van houdt.',
        content2: '<h4 class="blackText">Lorem ipsum<i class="fas fa-times float-right"></i></h4><ul><li> dolor sit amet, consectetur adipiscing elit</li> <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>',
        content3: '<h4 class="blackText">Soundcloud M4ddn3zz<i class="fas fa-times float-right"></i></h4><iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fuser-508800509%2Fzak-aardappels-demo&color=orange_white&size=32" style="width: 32px; height: 32px;"></iframe>',
        content4: '<h4 class="blackText">Lorem ipsum<i class="fas fa-times float-right"></i></h4>Toen onze Mop een Mopje was<br>Was hij aardig om te zien<br>Nu bromt hij alle dagen<br>En bijt nog bovendien<br>Waf-woef, waf-woef<br>Waf-woef, waf-woef<br>En bijt nog bovendien<br>Nu bromt hij alle dagen<br>En bijt nog bovendien',
        row1div1: '<h4 id="content1" class="grow2">Wat is een Wraaksaus?</h4>',
        row1div2: '<h4 id="content2" class="grow2">Agenda</h4>',
        row2div1: '<h4 id="content3" class="grow2">Muziek</h4>',
        row2div2: "<h4 id='content4' class='grow2'>Appeltaart...</h4>",
        bottomTabs: "<div class='bg-dark row'> <div class='col-4'>TOEN ONZE MOPS</div><div class='col-4'>TOEN ONZE MOPS</div><div class='col-4'>TOEN ONZE MOPS</div> </div>"
    }

/*     $('#headerText').click()
    $('#row1div1').click()
    $('#row1div2').click()
    $('#row2div1').click()
    $('#row2div2').click() */

    function getSlideshow() {
        var windowsize = $(window).width();
        if (windowsize < 1000) {
            let mockEvent = { target: { id: 'headerText' } }
            handleClick(mockEvent)
            $('.fillerRow').remove()
        }
        else {
            const headerImage = document.getElementById("headerImage")
            headerImage.setAttribute("src", "../../public/images/ws_1.jpg")
            return interval = setInterval(genRandomImage, 2000)        
        }
    }

    function genRandomImage() {
        const headerImage = document.getElementById("headerImage")
        const src = headerImage.getAttribute('src')
        let fileNum = ( parseFloat(src.split('_')[1].split('.')[0]) + 1 )
        fileNum = (fileNum == 13) ? 1 : fileNum
        headerImage.setAttribute("src", "../../public/images/ws_" + fileNum + ".jpg")           
    }

    function handleClick(event) {
        if (event.target.id === "headerText") {
            closeSlideshow()
        }
        else if (event.target.className === "grow2"){
            openTab(event.path, event.target) 
        }
        else if (event.target.className.includes( "mainTextDivs" )) {
            const evPath = event.path
            evPath.shift()
            openTab(evPath, event.target)
        }
        else if (event.target.className === "blackText"){
            closeTab(event.path)
        }
        else if (event.target.className === "fas fa-times float-right"){
            const evPath = event.path
            evPath.shift()
            closeTab(evPath)
        }        
    }

    function closeTab(eventPath){
        const ID = eventPath[2].id
        $('#'+ID+'>.bg-light').remove()
        if (ID.includes('div1')) {
            const otherID = ID.replace("div1", "div2");
            $('#' + ID).attr( "class" , "col-lg-4 offset-lg-1 col-8 offset-2 mb-5 mt-5 p-3 mainTextDivs" );
            if ($('#' + otherID).attr("class") == 'Appeltaart') {
                $('#' + otherID).attr( "class" , "col-lg-4 offset-lg-2 col-8 offset-2 mb-5 mt-5 p-3 mainTextDivs" );             
            }     
        }
        else {
            $('#' + ID).attr( "class" , "col-lg-4 offset-lg-2 col-8 offset-2 mb-5 mt-5 p-3 mainTextDivs" );      
        }
        $('#' + ID).append(textObject[ID])
    }

    function openTab(eventPath, eventTarget){
        let ID
        if (event.path[0].className === "grow2") {
            ID = eventPath[1].id
            $(eventTarget).wrap( "<div class='bg-light col-lg-6 col-10 p-4 m-4'></div>" );        
            $(eventTarget).remove()    
        }
        else { 
            ID = eventTarget.id
            $(Array.from(eventTarget.children)[0]).wrap( "<div class='bg-light col-lg-6 col-10 p-4 m-4'></div>" );
        }

        $('#' + ID).attr( "class" , "wide p-5 mb-2" );

        assortContent(ID)
        getBottomTabs(eventPath, ID)
    }

    function getBottomTabs(eventPath, ID) {
        let divArray = Array.from(document.getElementsByClassName('mainTextDivs'))
        divArray = sortDivArray(divArray, eventPath)
        insertBottomTabs()
    }

    function insertBottomTabs(ID) {
        console.log('AAAHHHH')
        console.log(document.getElementById('row1div1').classList)
        $(textObject.bottomTabs).insertAfter( $(  ".row ro1 mt-3"  ) );
    }

    function sortDivArray(divArray, eventPath) {
        if (eventPath[1].className.includes('mainTextDivs')) {
            const ID = eventPath[1].id
            return divArray.filter( e => e.id != ID)
        }
        else if (eventPath[0].className.includes('mainTextDivs')) {
            const ID = eventPath[0].id
            return divArray.filter( e => e.id != ID)
        }    
    }

    function assortContent(ID) {
        if ((ID.includes('row1div1'))) {
            addContent(ID, textObject.content1)
        }
        else if ((ID.includes('row1div2'))) { 
            addContent(ID, textObject.content2)
        }
        else if (ID.includes('row2div1')) {
            addContent(ID, textObject.content3)
        }  
        else if (ID.includes('row2div2')) {
            addContent(ID, textObject.content4)
        }
    }


    function addContent(ID, content) {
        $('div#'+ID+'>div.bg-light').html(content)
        const otherID = ID.replace("div1", "div2");
    }

    function closeSlideshow() {
        if (typeof interval === Number) { clearInterval(interval) }
        $( '.photoDiv' ).remove()
        $.ajax({
            url: '../../app/views/partials/nav.phtml',
            success: (res) => {
                $( '#navvvy' ).append(res)
            }
        })
    }
/* }) */