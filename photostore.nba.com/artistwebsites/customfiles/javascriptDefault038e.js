    var httpobject = [];
    var requestcount = 0;

    function newHttpReq()
    {
        var newRequest = null;

        try
        {
            newRequest = new XMLHttpRequest();
        }
        catch(trymicrosoft)
        {
            try
            {
                newRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch(othermicrosoft)
            {
                try
                {
                    newRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(failed)
                {
                    newRequest = null;
                }
            }
        }

        return newRequest;

    }

    httpobject[-1] = newHttpReq();

    if(!httpobject[-1])
    {
        alert("Error Initializing XMLHttpRequest!");
    }

    function showname(id)
    {
        document.getElementById('link' + id).style.height = '102px';
        document.getElementById('box' + id).style.visibility = 'visible';
    }

    function hidename(id)
    {
        document.getElementById('link' + id).style.height = '100%';
        document.getElementById('box' + id).style.visibility = 'hidden';
    }

    image1 = new Image();
    image1.src = '/assets/images/Searching.gif';

    
    var currentindex = 0;
    var targetindex = 0;
    var slidedirection = '';
    var currentx1 = 0;
    var targetx1 = 0;
    var currentx2 = 0;
    var targetx2 = 0;
    var slideshowcontainer;
    var position = [];
    var link = [];
    var slideincrement;
    var slidecounter;
    var timerautomatic;
    var timerslide;

    function manualStartSlide(index)
    {
        slidetoposition(index);
    }

    function slidetoposition(index)
    {
        clearTimeout(timerautomatic);

        targetindex = index;

        if(targetindex == currentindex)
        {
            return;
        }

        if(targetindex > currentindex)
        {
            slidedirection = 'righttoleft';
        }
        else
        {
            slidedirection = 'lefttoright';
        }

        if(targetindex == -1)
        {
            targetindex = numslides - 1;
        }

        if(targetindex == numslides)
        {
            targetindex = 0;
        }

        for(var i = 0; i < numslides; i++)
        {
            if(document.getElementById('slideshow' + i))
            {
                if(i != targetindex && i != currentindex)
                {
                    document.getElementById('slideshow' + i).style.zIndex = 0;
                    document.getElementById('slideshow' + i).tabIndex = -1;
                }
                else
                {
                    if(i == currentindex)
                    {
                        document.getElementById('slideshow' + i).style.zIndex = 1;
                        document.getElementById('slideshow' + i).tabIndex = -1;
                    }

                    if(i == targetindex)
                    {
                        if(slidedirection == 'righttoleft')
                        {
                            document.getElementById('slideshow' + i).style.left = '100%';

                            targetx1 = 0;
                            targetx2 = -100;
                            slideincrement = -5;

                        }

                        if(slidedirection == 'lefttoright')
                        {
                            document.getElementById('slideshow' + i).style.left = '-100%';

                            targetx1 = 0;
                            targetx2 = 100;
                            slideincrement = 5;

                        }

                        document.getElementById('slideshow' + i).style.zIndex = 2;
                        document.getElementById('slideshow' + i).tabIndex = 0;
                    }

                }
            }

            if(document.getElementById('squareDiv[' + i + ']'))
            {
                if(i === targetindex)
                {
                    document.getElementById('squareDiv[' + i + ']').className = 'h';
                }
                else
                {
                    document.getElementById('squareDiv[' + i + ']').className = 'n';
                }
            }
        }

        slidecounter = 0;
        slide();
    }

    function slide()
    {
        currentx1 = document.getElementById('slideshow' + targetindex).style.left;
        currentx1 = parseInt(currentx1.replace('%',''));

        currentx2 = document.getElementById('slideshow' + currentindex).style.left;
        currentx2 = parseInt(currentx2.replace('%',''));

        if(slidecounter == 0)
        {
            //alert(currentx1);
        }

        if((currentx1 != targetx1))
        {
            var newx1 = currentx1 + slideincrement;
            var newx2 = currentx2 + slideincrement;

            if(Math.abs(newx1 - targetx1) <= Math.abs(slideincrement))
            {
                newx1 = targetx1;
            }

            if(Math.abs(newx2 - targetx2) <= Math.abs(slideincrement))
            {
                newx2 = targetx2;
            }

        }
        else
        {
            var previousindex = parseInt(targetindex) - 1;
            var nextindex = parseInt(targetindex) + 1;

            currentindex = targetindex;

            document.getElementById('slideshowArrowLeftLink').setAttribute("href","javascript: manualStartSlide(" + previousindex + ");");
            document.getElementById('slideshowArrowRightLink').setAttribute("href","javascript: manualStartSlide("+ nextindex + ");");

            return;
        }

        //alert('currentx = ' + currentx + '    targetx = ' + targetx + '    newx = ' + newx);

        document.getElementById('slideshow' + currentindex).style.left = newx2 + '%';
        document.getElementById('slideshow' + targetindex).style.left = newx1 + '%';

        slidecounter++;

        timerslide = setTimeout('slide()',10);

    }

    function slideautomatic()
    {
        slidetoposition(parseInt(targetindex) + 1);
        clearTimeout(timerautomatic);
        timerautomatic = setTimeout('slideautomatic()',8000);
    }

    var flagemailcleared = 0;

    function clearemail()
    {
        if(flagemailcleared == 0)
        {
            document.getElementById('promotionemail').value = '';
            flagemailcleared = 1;
        }
    }

    function registeremail()
    {

        var localvalue = requestcount;
        var email = document.getElementById('promotionemail').value;

        if(email.length < 5 || email == 'Enter E-Mail Address')
        {
            alert('You must enter an e-mail address.');
            return;
        }

        var poststring = "email=" + email + '&sourcepage=FAA+Home+Page';

        document.getElementById('promotionemaildiv').innerHTML = "<img src='/assets/images/Searching.gif'>";

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                document.getElementById('promotionemaildiv').innerHTML = httpobject[localvalue].responseText;
            }


        };

        var url = 'queries/querysubscribeemaillist.php';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

    }

    function showemailform()
    {

        if(!document.getElementById('foregrounddiv') || !document.getElementById('backgrounddiv'))
        {
            var newdiv;
            var cssstyle;

            // Background Div
            if(!document.getElementById('backgrounddiv'))
            {
                newdiv = document.createElement('div');
                cssstyle = 'position: fixed; z-index: 5000; left: 0px; top: 0px; width: 10px; height: 10px; background-color: #000000; visibility: hidden; opacity: 0.50; filter: alpha(opacity=50);';
                newdiv.id = 'backgrounddiv';
                newdiv.setAttribute('style',cssstyle);
                newdiv.style.cssText = cssstyle;
                document.body.appendChild(newdiv);
            }

            // Foreground Div
            if(!document.getElementById('foregrounddiv'))
            {
                newdiv = document.createElement('div');
                cssstyle = 'position: fixed; z-index: 5001; left: 0px; top: 0px; width: 700px; min-height: 50px; padding: 40px; overflow: auto; border: 15px solid #666666; background-color: #FFFFFF; visibility: hidden; box-shadow: 0px 0px 50px #000000;';
                newdiv.id = 'foregrounddiv';
                newdiv.setAttribute('style',cssstyle);
                newdiv.style.cssText = cssstyle;
                document.body.appendChild(newdiv);
            }
        }

        var backgroundobject = document.getElementById('backgrounddiv');
        backgroundobject.style.width = '100%';
        backgroundobject.style.height = '100%';
        backgroundobject.style.visibility = 'visible';

        var widthclient = parseInt(document.documentElement.clientWidth);
        var heightclient = parseInt(document.documentElement.clientHeight);

        //alert(widthclient);

        var widthtarget = parseInt(widthclient*0.80);
        var heighttarget = parseInt(heightclient*0.60);

        if((widthtarget + 110) > widthclient)
        {
            widthtarget = widthclient - 50 - 110;
        }

        if((heighttarget + 110) > heightclient)
        {
            heighttarget = heightclient - 50 - 110;
        }

        if(widthtarget > 800)
        {
            widthtarget = 800;
        }

        if(heighttarget > 600)
        {
            heighttarget = 600;
        }

        var offsetleft = 0;
        var offsettop = 0;

        var offsetx = 0;
        var offsety = 0;

        if(document.documentElement.scrollTop && !document.body.scrollTop)
        {
            //offsetleft = document.documentElement.scrollLeft;
            //offsettop = document.documentElement.scrollTop;
        }
        else
        {
            //offsetleft = document.body.scrollLeft;
            //offsettop = document.body.scrollTop;
        }

        var logindiv = document.getElementById('foregrounddiv');
        logindiv.style.width = widthtarget + 'px';
        logindiv.style.height = heighttarget + 'px';
        logindiv.style.visibility = 'visible';
        logindiv.innerHTML = "<img src='/assets/images/Searching.gif' style='float: left;'>";

        logindiv.style.left = (offsetx + offsetleft + parseInt((widthclient - (widthtarget + 110)) / 2)) + 'px';
        logindiv.style.top = (offsety + offsettop + parseInt((heightclient - (heighttarget + 110)) / 2)) + 'px';

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                document.getElementById('foregrounddiv').innerHTML = httpobject[localvalue].responseText;
            }


        };

        var url = 'queries/queryemailsubscriptionforeground.php';
        var poststring = 'action=refresh';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

        return;
    }

    function submitsubscriptionemail()
    {

        var localvalue = requestcount;
        var email = document.getElementById('subscriptionemail').value;

        if(email == '' || email == 'E-Mail Address')
        {
            alert('You must enter an e-mail address.');
            return;
        }

        document.getElementById('submitsubscriptiondiv').innerHTML = "<img src='/assets/images/Searching.gif' style='float: left; padding-top: 5px;'>";

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                var response = httpobject[localvalue].responseText.split("<EXTRAINSTRUCTIONS>");

                document.getElementById('foregrounddiv').innerHTML = response[0];

                if(response[1])
                {
                    eval(response[1]);
                }

            }


        };

        var url = 'queries/queryemailsubscriptionforeground.php';
        var poststring = 'action=submit&sourcepage=FAA+Home+Page+Popup&email=' + email;

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

        return;

    }


    function hideforegrounddiv()
    {
        if(document.getElementById('backgrounddiv'))
        {
            document.getElementById('backgrounddiv').style.visibility = 'hidden';
        }

        if(document.getElementById('foregrounddiv'))
        {
            document.getElementById('foregrounddiv').style.visibility = 'hidden';
            document.getElementById('foregrounddiv').innerHTML = '&nbsp;';
        }
    }

    function checkforentersubscriptionemail(theEvent)
    {
        if (theEvent == null)
        {
            theEvent = window.event;
        }

        if (theEvent.target)
        {
            theTarget = theEvent.target;
        }
        else
        {
            theTarget = theEvent.srcElement;
        }

        if (theEvent.keyCode == 13)
        {
            submitsubscriptionemail();
        }
    }

    function checkkeyup(theevent)
    {
        if (theevent.keyCode == 27)
        {
            hideforegrounddiv();
        }

    }

    function facebookpopup(url)
    {
        var width = 680;
        var height = 400;

        var leftposition = Number((screen.width/2)-(width/2));
        var topposition = Number((screen.height/2)-(height/2));

        window.open(url,'facebookwindow','width=' + width + ',height=' + height + ',resizable=1,toolbar=0,menubar=0,status=0,location=0,left=' + leftposition + ',top=' + topposition);
    }

    function googlepluspopup(url)
    {
        var width = 720;
        var height = 500;

        var leftposition = Number((screen.width/2)-(width/2));
        var topposition = Number((screen.height/2)-(height/2));

        window.open(url,'googlepluswindow','width=' + width + ',height=' + height + ',resizable=1,toolbar=0,menubar=0,status=0,location=0,left=' + leftposition + ',top=' + topposition);
    }

    function twitterpopup(url)
    {
        var width = 600;
        var height = 400;

        var leftposition = Number((screen.width/2)-(width/2));
        var topposition = Number((screen.height/2)-(height/2));

        window.open(url,'twitterwindow','width=' + width + ',height=' + height + ',resizable=1,toolbar=0,menubar=0,status=0,location=0,left=' + leftposition + ',top=' + topposition);
    }


    function checkfacebookcount(sourceurl)
    {
        $.get('https://graph.facebook.com/' + sourceurl + '', function(data) {

            var fbshares = 0;
            var fblikes = 0;
            var fbtotal = 0;

            if ((data.shares != 0) && (data.shares != undefined) && (data.shares != null))
            {
                fbshares = data.shares;
            }

            if ((data.likes != 0) && (data.likes != undefined) && (data.likes != null))
            {
                fblikes = data.likes;
            }

            fbtotal = fbshares + fblikes;

            if(true || fbtotal > 0)
            {
                if(fbtotal >= 1000)
                {
                    if(fbtotal >= 10000)
                    {
                        fbtotal = fbtotal / 1000;
                        fbtotal = fbtotal.toFixed(0) + 'K';
                    }
                    else
                    {
                        fbtotal = fbtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                }

                document.getElementById('facebookcountdiv').style.display = 'inline-block';
                document.getElementById('facebookcount').innerHTML = fbtotal;
            }

        },'jsonp');

    }

    function checkgooglepluscount(sourceurl)
    {

        $.get('/queries/querysocialapis.php?target=googleplus&url=' + sourceurl, function(data) {

            if ((data != 0) && (data != undefined) && (data != null))
            {
                if(data >= 1000)
                {
                    if(data >= 10000)
                    {
                        data = data / 1000;
                        data = data.toFixed(0) + 'K';
                    }
                    else
                    {
                        data = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                }

                document.getElementById('googlepluscountdiv').style.display = 'inline-block';
                document.getElementById('googlepluscount').innerHTML = data;
            }
        },'html');

    }

    function checktwittercount(sourceurl)
    {

        $.get('http://urls.api.twitter.com/1/urls/count.json?url=' + sourceurl, function(data) {

            if ((data.count != 0) && (data.count != undefined) && (data.count != null))
            {
                if(data.count >= 1000)
                {
                    if(data.count >= 10000)
                    {
                        data.count = data.count / 1000;
                        data.count = data.count.toFixed(0) + 'K';
                    }
                    else
                    {
                        data.count = data.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                }

                document.getElementById('twittercountdiv').style.display = 'inline-block';
                document.getElementById('twittercount').innerHTML = data.count;
            }
        },'jsonp');

    }

    function mouseoverfacebook()
    {
        var targetobject = document.getElementById('facebookimage');
        targetobject.src = 'https://fineartamerica.com/assets/images/IconFacebookSmall.png';
    }

    function mouseoutfacebook()
    {
        var targetobject = document.getElementById('facebookimage');
        targetobject.src = 'https://fineartamerica.com/assets/images/IconFacebookSmallGrayscale.png';
    }

    function mouseovergoogleplus()
    {
        var googlePlusImage = document.getElementById('googleplusimage');
        googlePlusImage.src = 'https://fineartamerica.com/assets/images/IconGooglePlusSmall.png';
    }

    function mouseoutgoogleplus()
    {
        var googlePlusImage = document.getElementById('googleplusimage');
        googlePlusImage.src = 'https://fineartamerica.com/assets/images/IconGooglePlusSmallGrayscale.png';
    }

    function expandgallerydiv()
    {
        var galleryDiv = document.getElementById("gallerydiv");
        galleryDiv.style.height = "";
        galleryDiv.style.overflow = "visible";
    }

    function collapsegallerydiv()
    {
        var galleryDiv = document.getElementById("gallerydiv");
        galleryDiv.style.overflow = "hidden";
    }

    function expandartistdiv()
    {
        var artistDiv = document.getElementById("artistdiv");
        artistDiv.style.height = "";
        artistDiv.style.overflow = "visible";
    }

    function collapseartistdiv()
    {
        var artistDiv = document.getElementById("artistdiv");
        artistDiv.style.overflow = "hidden";
    }
    
    function showCollectionGroup(collectionGroupId, action, memberIdType, memberId, tag, page, productType)
    {
        var localvalue = requestcount;
        var targetDivId = 'collectionsContainerDiv';
        
        if(typeof productType === undefined)
        {
            productType = '';
        }

        var availableTabs = document.getElementsByClassName('collectionGroupTab');

        for (i = 0; i < availableTabs.length; i++)
        {
            if(availableTabs[i].id == 'collectionGroupTab-' + collectionGroupId)
            {
                availableTabs[i].className = 'collectionGroupTab collectionGroupTabSelected';
            }
            else
            {
                availableTabs[i].className = 'collectionGroupTab';
            }
        }        

        //var productType = '';
        
        var postString = 'action=' + action + '&collectionGroupId=' + collectionGroupId + '&memberIdType=' + memberIdType + '&memberId=' + memberId + '&tag=' + encodeURIComponent(tag) + "&page=" + page + "&productType=" + productType;

        //alert(postString);
        //return;
        
        document.getElementById(targetDivId).innerHTML = "<img src='/assets/images/Searching.gif' style='display: inline-block; padding-top: 25px; padding-bottom: 25px;'>";
        document.getElementById(targetDivId).style.display = 'inline-block';

        if(action === 'showPage')
        {
            if(document.getElementById('sectionCollections'))
            {
                document.getElementById('sectionCollections').scrollIntoView(true);
            }
            else
            {
                if(document.getElementById('collectionsContainerDiv'))
                {
                    document.getElementById('collectionsContainerDiv').scrollIntoView(true);
                }
            }
        }

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                document.getElementById(targetDivId).innerHTML = httpobject[localvalue].responseText;
            }


        };

        var url = '/queries/querySearchEngineCollectionsHomepageWhiteLabel.php';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader("content-type", "application/x-www-form-urlencoded");
        httpobject[localvalue].send(postString);

        requestcount += 1;
    }    
    
