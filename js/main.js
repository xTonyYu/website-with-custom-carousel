const searchContainer = document.querySelector('.search-container');
const whiteOut = document.querySelectorAll('.white-out');
const search = document.querySelector('.search');
const listContainer = document.querySelector('.list-container');
const crossBarContainer = document.querySelector('.cross-bar-container');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const teammemberList = document.querySelector('.teammember-list');
const teammembers = document.querySelectorAll('.teammember');
const PM1 = document.querySelector('.member0');
// const teammembersArr = new Array(...teammembers);
const teammembersArr = [...teammembers];
console.dir(leftButton);
console.dir(PM1);
teammembersArr.map(member => member._visible = true);
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
    if (DOMElement === -1) {
        return -1;
    }
    // const curStyle = DOMElement.currentStyle || window.getComputedStyle(DOMElement),
    const rect = DOMElement.getBoundingClientRect(),
    width = rect.width, padding = 0, border = 0, margin = DOMElement.style.marginRight;
    // width = DOMElement.offsetWidth, padding = 0, border = 0,
    // width = parseFloat(curStyle.width), // or use curStyle.width
    // offsetWidth incl body, padding, border; need to comment next 2 out if using offsetWidth
    // padding = parseFloat(curStyle.paddingLeft) + parseFloat(curStyle.paddingRight),
    // border = parseFloat(curStyle.borderLeftWidth) + parseFloat(curStyle.borderRightWidth),
    // margin = parseFloat(curStyle.marginLeft) + parseFloat(curStyle.marginRight);
    console.log('marginRight', DOMElement.innerText, margin);
    return (width + padding + border + margin);
}

function isLastMemberVisible(teammembersArr) {
    let memberTotalWidthSum = 0, offsetWidthSum = 0;
    // const startingOffsetLeft = leftButton.offsetLeft;
    // const startingOffsetLeft = leftButton.offsetWidth + leftButton.offsetLeft;
    const startingOffsetLeft = totalWidth(leftButton) + leftButton.offsetLeft;
    // const teammemberListVisibleWidth = teammemberList.offsetWidth + teammemberList.offsetLeft;
    const teammemberListVisibleWidth = teammemberList.getBoundingClientRect().width;
    // summing the width of visible member
    teammembersArr.forEach(member => {
        // console.log(totalWidth(member));
        if (member._visible) {
            memberTotalWidthSum += totalWidth(member);
            offsetWidthSum += member.offsetWidth;
            // console.log('current visible memberTotalWidthSum', memberTotalWidthSum);
        } else {
            // console.log('current memberTotalWidthSum', memberTotalWidthSum);
        }
        console.log('rect.width of', member._visible, member.innerText, memberTotalWidthSum);
    });
    console.log('sum of offsetWidths', offsetWidthSum);
    console.log('%cmember rec.width', 'color: blue', memberTotalWidthSum);
    // console.warn(' teammemberList.offsetWidth', teammemberList.offsetWidth);
    // console.warn('+teammemberList.offsetLeft', teammemberList.offsetLeft);
    // console.warn('-startingOffsetLeft', startingOffsetLeft);
    console.warn('teammemberList getBoundingClientRect:', teammemberListVisibleWidth);

    // see if sum of currently visible memebers width is smaller than teammemberList width
    // if so then slide left not execute
    // else slide left still works
    if (memberTotalWidthSum < teammemberListVisibleWidth) {
        console.log('%cisLastMemberVisible? TRUE', 'color: blue');
        return true;
    } else {
        console.log('%cisLastMemberVisible? FALSE', 'color: blue');
        return false;
    }
}


function slideLeftOrRight(e, slideDirection) {
    // 
    console.dir(e.target.className);
    const lastMemberVisible = isLastMemberVisible(teammembersArr);
    const leadingMemberIndex = teammembersArr.findIndex(member => member._visible === true);
    let leadingMember, newMarginLeft;
    const curMarginLeft = parseFloat(teammemberList.style.marginLeft) || 0;
    
    console.log("teammembersArr", teammembersArr);
    console.log("%ccurMarginLeft:", 'color: blue', curMarginLeft);
    console.log("marginLeft BEFORE:",teammemberList.style.marginLeft);
    console.log("slideDirection", slideDirection);
    console.log('lastMemberVisible:', lastMemberVisible);
    console.log("leading teammember", teammembersArr[leadingMemberIndex]);
    
    if (slideDirection === 'left' && lastMemberVisible === false) {
        leadingMember = teammembersArr[leadingMemberIndex];
        leadingMember._visible = false;
        leadingMember.style.display = 'none';
        // newMarginLeft = curMarginLeft - totalWidth(leadingMember) -1 + 'px';
    } else if (slideDirection === 'right') {
        leadingMember = teammembersArr[leadingMemberIndex-1] || teammembersArr[0];
        console.log('leadingMember:', leadingMember);
        leadingMember._visible = true;
        leadingMember.style.display = 'block';
        // newMarginLeft = curMarginLeft + totalWidth(leadingMember) +1 + 'px';
    }
    
    // console.log(leadingMember.innerText, "- total width", totalWidth(leadingMember));
    // console.log("newMarginLeft", newMarginLeft);
    // teammemberList.style.setProperty('margin-left', newMarginLeft);
    console.log("%cmargLeft AFTER:", 'color: red', curMarginLeft);
}

searchContainer.addEventListener('mouseover', toggleBkgrnd);
searchContainer.addEventListener('mouseleave', toggleBkgrnd);
search.addEventListener('keyup', filteredList);
leftButton.addEventListener('click', e => slideLeftOrRight(e, 'right'));
rightButton.addEventListener('click', e => slideLeftOrRight(e, 'left'));

teammembers.forEach(member => member.addEventListener('mouseover', inspect));

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
    // leadingEleHideOrShow(totalWidth);
}

