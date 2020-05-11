/**** Carousel section in the Detail page ****/
let prevWindowWidth = window.innerWidth
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
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

///////////****   Creating carousel content cards  ****\\\\\\\\\\\

const carouselHtml = teamData.map(member => {
    return `
    <li class="teammember" >
        <a href="${member.url}" class="list-inline-item" data-role="${member.role}">
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
teammembersArr.map(member => member._allowToShow = true);


///////////****   Carousel functionality  ****\\\\\\\\\\\

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

    margin = parseFloat(curStyle.marginLeft) + parseFloat(curStyle.marginRight);

    // console.log('marginRight', DOMElement.innerText, margin);
    return (width + padding + border + margin);
}

function isLastMemberVisible(teammembersArr) {
    // getting the accurate visible width of teammemberList; in floating point number instead of less accurate integern from offsetWidth
    const teammemberListVisibleWidth = teammemberList.getBoundingClientRect().width;
    
    let sumWidthMembersAllowToShow = 0;
    // summing the width of all members that are _allowToShow which has display="showing" (i.e. NOT "display: none")
    teammembersArr.forEach(member => {
        if (member._allowToShow) {
            member._totalWidth = totalWidth(member);
            sumWidthMembersAllowToShow += member._totalWidth;
        }
        // console.log('rec.width+margin of', member._allowToShow, member.innerText, member._totalWidth);
    });

    console.log('%cSUM members\' rec.width+margin', 'color: blue', sumWidthMembersAllowToShow);
    console.warn('teammemberList visible width:', teammemberListVisibleWidth);

    // if sum of all _allowToShow members's width is smaller than teammemberList width (container's visible width)
    // then that means last member is visible on the page
    if (sumWidthMembersAllowToShow <= teammemberListVisibleWidth) {
        console.log('%cisLastMemberVisible? TRUE', 'color: blue');
        return true;
    } else {
        console.log('%cisLastMemberVisible? FALSE', 'color: blue');
        return false;
    }
}

function slideLeftOrRight(slideDirection, lastMemberVisibility) {
    let lastMemberVisible;
    if (lastMemberVisibility === undefined) {
        lastMemberVisible = isLastMemberVisible(teammembersArr);
    } else {
        lastMemberVisible = lastMemberVisibility;
    }
    let leadingMemberIndex = teammembersArr.findIndex(member => member._allowToShow === true);
    // leadingMemberIndex = leadingMemberIndex < 0 ? teammembersArr.length : leadingMemberIndex; // set to last obj if it is -1
    console.log('leadingMemberIndex:', leadingMemberIndex);
    let leadingMember = teammembersArr[leadingMemberIndex],
        speed = 550,
        effect = 'cubic-bezier(0.54, 0.07, 0, 0.76)',
        delay = 0;
    const curMarginLeft = parseFloat(teammemberList.style.marginLeft) || 0;
    
    // console.log("teammembersArr", teammembersArr);
    console.log("slideDirection", slideDirection);
    console.log('lastMemberVisible:', lastMemberVisible);
    
    if (slideDirection === 'left' && lastMemberVisible === false 
        && leadingMemberIndex < teammembersArr.length - 1) {
        // leadingMember = teammembersArr[leadingMemberIndex];
        console.log('leadingMember:', leadingMember);
        leadingMember._allowToShow = false;
        // leadingMember.style.display = 'none'; // original
        leadingMember.style.marginLeft = -leadingMember._totalWidth +'px'; // margin left
    } else if (slideDirection === 'right') {
        leadingMember = teammembersArr[leadingMemberIndex-1] || teammembersArr[0];
        console.log('leadingMember:', leadingMember);
        leadingMember._allowToShow = true;
        // leadingMember.style.display = 'block'; // original
        leadingMember.style.marginLeft = '0px'; // margin left
    }
    leadingMember.style.transition = 'all ' + speed + 'ms' + ' ' + effect + ' ' + delay + 'ms';
}

function resizeCarousel(e) {
    const lastMemberVisible = isLastMemberVisible(teammembersArr);
    inspect();
    if (window.innerWidth > prevWindowWidth && lastMemberVisible === true) {
        // expand carousel and show extra member is space available
        console.log("%cDOING something", 'color: red');
        slideLeftOrRight('right', lastMemberVisible);
    }
    prevWindowWidth = window.innerWidth;
    inspect();
}

function debounce(func, wait = 200, immediate = true) {
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
// teammembers.forEach(member => member.addEventListener('mouseover', inspect));

// console.dir(body);

function inspect(e) {
    // console.log(e);
    // console.dir(e);
    console.log('prevWindowWidth', prevWindowWidth);
    console.log('window.innerWidth', window.innerWidth)
    // console.dir(this);
    // console.log(teammembers[5].innerText);
    // console.dir(teammembers[5]);
    // console.log(teammembers[2].innerText);
    // console.dir(teammembers[2]);
}

