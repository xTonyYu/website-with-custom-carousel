/**** Carousel section in the Detail page ****/
let prevWindowWidth = window.innerWidth
const leftButton = document.querySelector('.left-btn');
const leftArrow = document.querySelector('.arrow.left');
const rightButton = document.querySelector('.right-btn');
const rightArrow = document.querySelector('.arrow.right');
const teammemberList = document.querySelector('.teammember-list');

// teamData in data.js;
// const teamData = [
//     {genericTitle: 'Sr. Product Manager', role: 'Product Manager', url: '#Placeholder' },
//     {genericTitle: 'Product Manager', role: 'Product Manager', url: '#Placeholder' },
//     {genericTitle: 'UX Designer', role: 'UX/Product Designer', url: '#Placeholder' },
//     {genericTitle: 'UX Researcher', role: 'UX Researcher', url: '#Placeholder' },
//     {genericTitle: 'Design Developer', role: 'Front-end Developer', url: '#Placeholder' },
//     {genericTitle: 'Front-end Developer', role: 'Front-end Developer', url: '#Placeholder' },
//     {genericTitle: 'Back-end Developer', role: 'Back-end Developer', url: '#Placeholder' },
// ];

//////////****   Creating carousel content cards  ****\\\\\\\\\\\\

const carouselHtml = teamData.map(member => {
    return `
    <li class="teammember" >
        <a href="#${member.role}" class="list-inline-item" data-role="${member.role}">
            ${member.genericTitle}  
        </a>
    </li>
    `
}).join('');
teammemberList.innerHTML = carouselHtml;
// targeting DOM elements after they're created
const teammembers = document.querySelectorAll('.teammember');
// const teammembersArr = new Array(...teammembers);
const teammembersArr = [...teammembers];
let leadingMemberIndex;
teammembersArr.map(member => {
    member._allowToShow = true;
    member._totalWidth = totalWidth(member);
});
showCarouselBtn(teammembersArr, isLastMemberVisible(teammembersArr));

//////////****   Carousel functionality  ****\\\\\\\\\\\

function totalWidth(DOMElement) {
    const curStyle = DOMElement.currentStyle || window.getComputedStyle(DOMElement), // need this to get margin width
    rec = DOMElement.getBoundingClientRect(), // width from rect are more accurate, no rounding
    // rect.width depends on box-sizing style. if it's content-box (as in this case) then rec.width = only content width, not incl padding, border, nor margin.  if it is border-box then rec.width = content + padding + border but not incl margin
    width = rec.width, 
    // use below if box-sizing = border-box
    // padding = 0, border = 0,
    //use next two is box-sizing = content-box
    padding = parseFloat(curStyle.paddingLeft) + parseFloat(curStyle.paddingRight),
    border = parseFloat(curStyle.borderLeftWidth) + parseFloat(curStyle.borderRightWidth),

    marginLeft = parseFloat(curStyle.marginLeft),
    marginRIght = parseFloat(curStyle.marginRight),
    margin = marginLeft + marginRIght,
    totalWidth = width + padding + border + margin;

    DOMElement._contentWidth = width;
    DOMElement._marginLeft = marginLeft;
    // console.log('totalWidth', DOMElement.innerText, totalWidth);
    return totalWidth;
}

function isLastMemberVisible(teammembersArr, addOnePriorHiddenMember) {
    // getting the accurate visible width of teammemberList; in floating point number instead of less accurate integern from offsetWidth
    const teammemberListVisibleWidth = teammemberList.getBoundingClientRect().width;

    let sumWidthMembersAllowToShow = 0;
    // summing the width of all members that are _allowToShow which has display="showing" (i.e. NOT "display: none")
    teammembersArr.forEach(member => {
        console.log('visible member:', member.innerText, member._allowToShow);
        if (member._allowToShow) {
            // member._totalWidth = totalWidth(member);
            sumWidthMembersAllowToShow += member._totalWidth;
            console.log('member:', member.innerText, member._totalWidth, sumWidthMembersAllowToShow);
        }
        // console.log('rec.width+margin of', member._allowToShow, member.innerText, member._totalWidth);
    });
    
    //** testing area reduce sumWidthMembersAllowToShow by the right margin of last memeber */
    adjSumWidthMembersAllowToShow = sumWidthMembersAllowToShow - (teammembersArr[teammembersArr.length-1]._totalWidth - teammembersArr[teammembersArr.length-1]._contentWidth);
    
    console.log('addOnePriorHiddenMember:', addOnePriorHiddenMember);
    if (addOnePriorHiddenMember) {
        leadingMemberIndex = teammembersArr.findIndex(member => member._allowToShow === true);
        let onePriorHiddenMember = teammembersArr[leadingMemberIndex-1] || teammembersArr[0];
        console.log('Yo prior hidden member:', onePriorHiddenMember.innerText, onePriorHiddenMember._totalWidth);
        adjSumWidthMembersAllowToShow += onePriorHiddenMember._totalWidth;
    }
    console.log('adjSumWidthMembersAllowToShow:', adjSumWidthMembersAllowToShow);

    // console.log('%cSUM members\' rec.width+margin', 'color: blue', sumWidthMembersAllowToShow);
    console.log('%cteammemberList visible width:', 'color: blue', teammemberListVisibleWidth);
    
    // if sum of all _allowToShow members's width is smaller than teammemberList width (container's visible width)
    // then that means last member is visible on the page
    if (adjSumWidthMembersAllowToShow <= teammemberListVisibleWidth) {
        console.log('%cisLastMemberVisible? TRUE', 'color: blue');
        return true;
    } else {
        console.log('%cisLastMemberVisible? FALSE', 'color: blue');
        return false;
    }
}

function showCarouselBtn(teammembersArr, lastMemberVisible) {
    if (teammembersArr[0]._allowToShow === true) {
        // leftButton.style.width = '0px';
        leftButton.style.visibility = 'hidden';
        leftButton.style.opacity = 0;
        leftArrow.style.marginLeft = 'var(--hide-arrow)';
        // console.log('do NOT show LEFT Btn');
    } else {
        // leftButton.style.width = 'var(--arrow)';
        leftButton.style.visibility = 'visible';
        leftButton.style.opacity = 1;
        leftArrow.style.marginLeft = '0px';
        // console.log('show LEFT Btn');
    }

    if (lastMemberVisible) {
        // rightButton.style.width = '0px';
        rightButton.style.visibility = 'hidden';
        rightButton.style.opacity = 0;
        rightArrow.style.marginRight = 'var(--hide-arrow)';
        // console.log('do NOT show RIGHT Btn');
    } else {
        // rightButton.style.width = 'var(--arrow)';
        rightButton.style.visibility = 'visible';
        rightButton.style.opacity = 1;
        rightArrow.style.marginRight = '0px';
        // console.log('show RIGHT Btn');
    }

    let speed = 500,
        delay = 2000;
    leftButton.style.transition = 'visibility ' + speed +'ms' +' ease 1s';
    rightButton.style.transition ='visibility ' + speed +'ms' +' ease 1s';
    leftButton.style.transition = 'opacity ' + delay +'ms';
    rightButton.style.transition ='opacity ' + delay +'ms';
    leftButton.style.transition = 'ease-in-out var(--ease-speed)';
    rightButton.style.transition = 'ease-in-out var(--ease-speed)';
}

function slideLeftOrRight(slideDirection, lastMemberVisibility) {
    let lastMemberVisible;
    if (lastMemberVisibility === undefined) {
        lastMemberVisible = isLastMemberVisible(teammembersArr);
    } else {
        lastMemberVisible = lastMemberVisibility;
    }
    leadingMemberIndex = teammembersArr.findIndex(member => member._allowToShow === true);
    // leadingMemberIndex = leadingMemberIndex < 0 ? teammembersArr.length : leadingMemberIndex; // set to last obj if it is -1
    // console.log('leadingMemberIndex:', leadingMemberIndex);
    let leadingMember = teammembersArr[leadingMemberIndex];
    // const curMarginLeft = parseFloat(teammemberList.style.marginLeft) || 0;
    
    // console.log("teammembersArr", teammembersArr);
    console.log("slideDirection", slideDirection);
    // console.log('lastMemberVisible:', lastMemberVisible);

    if (slideDirection === 'left' && lastMemberVisible === false 
        && leadingMemberIndex < teammembersArr.length - 1) {
        // leadingMember = teammembersArr[leadingMemberIndex];
        // console.log('leadingMember:', leadingMember);
        leadingMember._allowToShow = false;
        leadingMember.style.marginLeft = -leadingMember._totalWidth +'px'; // margin left
    } else if (slideDirection === 'right') {
        leadingMember = teammembersArr[leadingMemberIndex-1] || teammembersArr[0];
        // console.log('leadingMember:', leadingMember);
        leadingMember._allowToShow = true;
        leadingMember.style.marginLeft = '0px'; // margin left
    }
    let speed = 550,
        carouselEffect = 'cubic-bezier(0.54, 0.07, 0, 0.76)',
        delay = 0;
    leadingMember.style.transition = 'all ' + speed + 'ms' + ' ' + carouselEffect + ' ' + delay + 'ms';

    // after sliding action
    setTimeout(function() {
        console.log('%cAFTER sliding', 'color: red', slideDirection, '...');
        lastMemberVisible = isLastMemberVisible(teammembersArr);
        console.log('%cAFTER sliding - lastMemberVisible', 'color: red', lastMemberVisible);
        showCarouselBtn(teammembersArr, lastMemberVisible, slideDirection);
    }, 550);
}

function resizeCarousel(e) {
    const lastMemberVisible = isLastMemberVisible(teammembersArr);
    console.log('lastMemberVisible:', lastMemberVisible);
    let slideDirection;
    inspect();
    // need the AFTER resized teammemberListVisibleWidth (from isLastMemberVisible func)
    // keep sliding RIGHT as long as POST-slide adjSumWidthMembersAllowToShow <= teammemberListVisibleWidth (from isLastMemberVisible func)
    // POST-slide = adjSumWidthMembersAllowToShow + totalWidth from 1 prior "_allowToShow=false"

    if (window.innerWidth > prevWindowWidth && lastMemberVisible === true) {
        // expand carousel and show extra member is space available
        console.log("%cDOING something", 'color: red');
        do {
            slideDirection = 'right';
            slideLeftOrRight(slideDirection, lastMemberVisible);
            console.log("%cresize: sliding right", 'color: blue');
        } while (isLastMemberVisible(teammembersArr, true));
        // } while (false);
    } else {
        // after window resizing
        console.log("show btn after resize?");
        showCarouselBtn(teammembersArr, lastMemberVisible, slideDirection);
        prevWindowWidth = window.innerWidth;
        inspect('AFTER');
    }
}

function debounce(func, wait = 250, immediate = false) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
                // console.count("later");
            }
        };
        // console.log("debounce", wait, immediate);
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        // console.log("timeout:", timeout);
        if (callNow) {
            func.apply(context, args);
            // console.count("CALL NOW");
        }
    };
}

/*** Event listeners ***/
leftButton.addEventListener('click', e => slideLeftOrRight('right'));
rightButton.addEventListener('click', e => slideLeftOrRight('left'));
window.addEventListener('resize', debounce(resizeCarousel));


/*** Research AREA ***/

function inspect(text) {
    // console.log(text, 'lastMemberVisible:', lastMemberVisible);
    // console.dir(e);
    console.log(text, 'window.innerWidth', window.innerWidth)
    console.log(text, 'prevWindowWidth', prevWindowWidth);
    // console.dir(this);
}
