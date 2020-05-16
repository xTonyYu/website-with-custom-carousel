const searchContainer = document.querySelector('.search-container');
const focusSearch = document.querySelectorAll('.focus-search');
const search = document.querySelector('.search');
const svgSearch = document.querySelector('#svg-search');
const clearSearchBtn = document.querySelector('.clear-search-x');
const svgX = document.querySelector('#svg-X');
const listWrapper = document.querySelector('.list-wrapper');

// searchList in data.js;

function filteringList(searchText, option) {
    // console.log(searchText);
    // show the filtered drop down list
    const re = new RegExp(searchText, option);
    const result = searchList.filter(item => {
        return item.title.match(re);  //filtering by title
    });
    // console.log('result:', result);
    return result;
}

function displayResult(e) {    
    const searchText = this.value;
    const result = filteringList(searchText,'gi');

    // display clear search "x" botton
    clearSearchBtn.style.visibility = 'visible';
    svgX.style.fill = '#000000';
    if (searchText.length === 0) {
        svgX.style.fill = 'none';
        clearSearchBtn.style.visibility = 'hidden';
    }
    // displaying the dropdown list
    let htmlDropdown;
    if (!searchText == '' && result.length > 0) {
        const re = new RegExp(searchText, 'gi');
        const tempHtml = result.map(item => {
            let titleHl = item.title.replace(re, `<span id="dropdown-item-hl">${searchText}</span>`);
            // check if current page is index.html; <a> tag will trigger href, if it is in detail.html pathMap func will be called instead
            const urlHasIndexHtml = window.location.href.includes('index.html');
            let aTagAttribute;
            if (urlHasIndexHtml) {
                aTagAttribute = `href="${item.url}#${item.role}"`;
            } else {
                aTagAttribute = `onclick="pathMap('${item.role}')" href="${item.url}#${item.role}"`;
            };
            // display
            return `
                <a ${aTagAttribute} class="dropdown-a">
                    <li class="dropdown-item dropdown-hl whiteBkgrnd">
                        ${titleHl}
                    </li>
                </a>
            `
        }).join('');
        htmlDropdown = `<div class="list-container">
                            <ul class="dropdownList">${tempHtml}</ul>
                        </div>`;
        // addWhiteBkgrnd();
    } else {
        htmlDropdown = '';
    }
    listWrapper.innerHTML = htmlDropdown;
    const dropdownATag = document.querySelectorAll('.dropdown-a');
    
    // adding event listeners and max height for list container once dropdown list is created
    if (document.querySelector('.dropdownList')) {
        const listContainer = document.querySelector('.list-container');
        // console.log('window.innerHeight:', window.innerHeight);
        // console.log('listWrapper.offsetHeight:', listWrapper.offsetTop);
        const listWrapperMaxHeight = window.innerHeight - listWrapper.offsetTop - 10 + 'px';
        listContainer.style.maxHeight = listWrapperMaxHeight;

        document.querySelector('.dropdownList').addEventListener('mouseleave', () => listWrapper.innerHTML = '');
        dropdownATag.forEach(item => item.addEventListener('click', () => {
            // console.log("%cclicking", 'color: red');
            listWrapper.innerHTML = '';
            // console.log(item.innerText);
            let displayTitle = filteringList(item.innerText.trim(), 'i');
            displayTitle = displayTitle[0].title;
            // console.log('displayTitle:', displayTitle);
            search.value = displayTitle;
        }));
    }
}

function toggleBkgrndHL(e) {
    const searchText = this.querySelector('.search').value;
    if (e.type === 'mouseover' || !searchText == '') {
        focusSearch.forEach(ele => {
            ele.classList.add('whiteBkgrnd');
        })
        svgSearch.style.fill = '#000000';
    } else {
        focusSearch.forEach(ele => {
            ele.classList.remove('whiteBkgrnd');
        })
        svgSearch.style.fill = 'var(--pp-grey)';
    }
    svgSearch.style.transition = 'ease-in-out var(--ease-speed)';
}

function clearSearchBoxnList() {
    search.value = '';
    clearSearchBtn.style.visibility = 'hidden';
    svgX.style.fill = 'none';
    if (document.querySelector('.dropdownList')) {
        listWrapper.innerHTML = '';
    }
}

function toDetailPage(role, url) {
    // console.log(role, url);
    window.location.href = url + '#' + role;
}

/*** Event listeners ***/
searchContainer.addEventListener('mouseover', toggleBkgrndHL);
searchContainer.addEventListener('mouseleave', toggleBkgrndHL);
clearSearchBtn.addEventListener('click', clearSearchBoxnList);
search.addEventListener('keyup', displayResult);

/*** Research AREA ***/


function inspect(e) {
    // console.log(e);
    // console.dir(e);
    console.log(this.innerText);
    console.dir(this);
}

