const searchContainer = document.querySelector('.search-container');
const whiteOut = document.querySelectorAll('.white-out');
const search = document.querySelector('.search');
const listContainer = document.querySelector('.list-container');
const crossBarContainer = document.querySelector('.cross-bar-container');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const teammemberList = document.querySelector('.teammember-list');
const teammembers = document.querySelectorAll('.teammember');
// const teammembersArr = new Array(...teammembers);
const teammembersArr = [...teammembers];
console.dir(teammembersArr[0]);
teammembersArr.map(member => member._allowToShow = true);
// let lastMemberVisible = false;

const uxList = [
    {title: 'UX Designer', url: '../PlumPear/designer.html'},
    {title: 'UX Researcher', url: '#researcher'},
    {title: 'UX Writer', url: '#writer'},
    {title: 'UX Mama', url: '#mom'},
    {title: 'UX Dad', url: '#dad'},
    {title: 'UX Reader', url: '#reader'},
    {title: 'UX Worker', url: '#worker'},
    {title: 'UX Dude', url: '#dude'}];

function filteredList(e) {
    const searchText = this.value;
    console.log(searchText);
    // show the filtered drop down list
    const result = uxList.filter(item => {
        return item.title.toLowerCase().includes(searchText.toLowerCase())
    })
    // console.log(result.length);
    let htmlDropdown;
    if (!searchText == '' && result.length > 0) {
        const tempHtml = result.map(item => {
            return `
                <a href="${item.url}" class="dropdown-a">
                    <li class="dropdown-item hl whiteBkgrnd">
                        ${item.title}
                    </li>
                </a>
            `
        }).join('');
        htmlDropdown = `<ul class="dropdownList">${tempHtml}</ul>`
        // addWhiteBkgrnd();
    } else {
        htmlDropdown = '';
    }
    listContainer.innerHTML = htmlDropdown;
}

function toggleBkgrnd(e) {
    const searchText = this.querySelector('.search').value;
    if (e.type === 'mouseover' || !searchText == '') {
        whiteOut.forEach(ele => {
            ele.classList.add('whiteBkgrnd');
        })
    } else {
        whiteOut.forEach(ele => {
            ele.classList.remove('whiteBkgrnd');
        })
    }
}

function totalWidth(DOMElement) {
    const curStyle = DOMElement.currentStyle || window.getComputedStyle(DOMElement), // need this to get margin width
    rec = DOMElement.getBoundingClientRect(), // width from rect are more accurate, no rounding
    // rect.width depends on box-sizing style. if it's content-box (as in this case) then rec.width = only content width, not incl padding, border, nor margin.  if it is border-box then rec.width = content + padding + border but not incl margin
    width = rec.width, 
    padding = 0, border = 0,
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
            sumWidthMembersAllowToShow += totalWidth(member);
        }
        console.log('rec.width+margin of', member._allowToShow, member.innerText, totalWidth(member));
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

function slideLeftOrRight(slideDirection) {
    console.dir(this);
    const lastMemberVisible = isLastMemberVisible(teammembersArr);
    const leadingMemberIndex = teammembersArr.findIndex(member => member._allowToShow === true);
    let leadingMember;
    const curMarginLeft = parseFloat(teammemberList.style.marginLeft) || 0;
    
    // console.log("teammembersArr", teammembersArr);
    console.log("slideDirection", slideDirection);
    console.log('lastMemberVisible:', lastMemberVisible);
    
    if (slideDirection === 'left' && lastMemberVisible === false) {
        leadingMember = teammembersArr[leadingMemberIndex];
        console.log('leadingMember:', leadingMember);
        leadingMember._allowToShow = false;
        leadingMember.style.display = 'none';
    } else if (slideDirection === 'right') {
        leadingMember = teammembersArr[leadingMemberIndex-1] || teammembersArr[0];
        console.log('leadingMember:', leadingMember);
        leadingMember._allowToShow = true;
        leadingMember.style.display = 'block';
    }
}

/*** Event listeners ***/
searchContainer.addEventListener('mouseover', toggleBkgrnd);
searchContainer.addEventListener('mouseleave', toggleBkgrnd);
search.addEventListener('keyup', filteredList);
leftButton.addEventListener('click', e => slideLeftOrRight('right'));
rightButton.addEventListener('click', e => slideLeftOrRight('left'));
teammembers.forEach(member => member.addEventListener('mouseover', inspect));

/*** Research AREA ***/
// teammembers[1].setAttribute('hidden','');
console.dir(teammemberList);

function inspect(e) {
    // console.log(e);
    // console.dir(e);
    console.log(this.innerText);
    console.dir(this);
    // console.log(teammembers[5].innerText);
    // console.dir(teammembers[5]);
    // console.log(teammembers[2].innerText);
    // console.dir(teammembers[2]);
}

