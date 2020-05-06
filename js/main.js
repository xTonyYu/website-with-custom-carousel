const searchContainer = document.querySelector('.search-container');
const whiteOut = document.querySelectorAll('.white-out');
const search = document.querySelector('.search');
const listContainer = document.querySelector('.list-container');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const teammemberList = document.querySelector('.teammember-list');
const teammembers = document.querySelectorAll('.teammember');
const teammembersArr = new Array(...teammembers);
console.log("teammembersArr", teammembersArr);
teammembersArr.map(member => member._showing = true);

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

function totalWidth(leadingCard) {
    if (leadingCard === -1) {
        return -1;
    }
    const curStyle = leadingCard.currentStyle || window.getComputedStyle(leadingCard),
    width = leadingCard.offsetWidth, // or use curStyle.width
    margin = parseFloat(curStyle.marginLeft) + parseFloat(curStyle.marginRight),
    padding = parseFloat(curStyle.paddingLeft) + parseFloat(curStyle.paddingRight),
    border = parseFloat(curStyle.borderLeftWidth) + parseFloat(curStyle.borderRightWidth);
    return (width + padding + border + margin);
}

function slideLeftOrRight(e, slideDirection) {
    // 
    console.dir(e.target.className);
    const leadingCardIndex = teammembersArr.findIndex(member => member._showing === true);
    let leadingCard, newMarginLeft;
    const curMarginLeft = parseFloat(teammemberList.style.marginLeft) || 0;
    
    
    console.log("teammembersArr", teammembersArr);
    console.log("%ccurMarginLeft:", 'color: blue', curMarginLeft);
    console.log("marginLeft BEFORE:",teammemberList.style.marginLeft);
    
    if (slideDirection === 'left') {
        leadingCard = teammembersArr[leadingCardIndex];
        leadingCard._showing = false;
        newMarginLeft = curMarginLeft - totalWidth(leadingCard) -1 + 'px';
    } else {
        leadingCard = teammembersArr[leadingCardIndex-1] || -1;
        leadingCard._showing = true;
        newMarginLeft = curMarginLeft + totalWidth(leadingCard) +1 + 'px';
    }
    
    console.log(leadingCard.innerText, "- total width", totalWidth(leadingCard));
    console.log("newMarginLeft", newMarginLeft);
    teammemberList.style.setProperty('margin-left', newMarginLeft);
    console.log("%cmargLeft AFTER:", 'color: red', teammemberList.style.marginLeft);

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

