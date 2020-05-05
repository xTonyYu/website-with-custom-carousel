const searchContainer = document.querySelector('.search-container');
const whiteOut = document.querySelectorAll('.white-out');
const search = document.querySelector('.search');
const listContainer = document.querySelector('.list-container');
const teammember = document.querySelectorAll('.teammember');
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
searchContainer.addEventListener('mouseover', toggleBkgrnd);
searchContainer.addEventListener('mouseleave', toggleBkgrnd);
search.addEventListener('keyup', filteredList);

teammember.forEach(member => member.addEventListener('mouseover', inspect));


// teammember[1].setAttribute('hidden','');
function inspect(e) {
    // console.log(e);
    // console.dir(e);
    console.log(this.innerText);
    console.dir(this);
    console.log(teammember[5].innerText);
    console.dir(teammember[5]);
}
