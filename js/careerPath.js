const pathTitle = document.querySelector('.path-title');
const outerContainer = document.querySelector('.career-path-outer-container');
const pathContainer = document.querySelector('.career-path-container');


// careers in data.js;

///////////****   Create Career Path Map  ****\\\\\\\\\\\

function pathMap(rolePicked) {
    let selectedRole = (careers.filter(career => career.role === rolePicked));
    if (selectedRole.length === 0) {
        return console.log("role name not found or spell incorrectly");
    }
    // console.log('selectedRole BEFORE:', selectedRole);
    const theRole = selectedRole[0].role;
    // console.log('theRole:', theRole);
    selectedPath = selectedRole[0].path;
    // console.log('selectedPath:', selectedPath);
    let initialSplit = false;

    const pathHtml = selectedPath.map(role => {
        const numberOfRoutes = role.route.length;
        // console.log("numberOfRoute:", numberOfRoutes);

        const mainRole = role.route.filter(route => route.number === 1)[0];
        const altRole = role.route.filter(route => route.number !== 1)[0] || '';
        // console.log("mainRole:", mainRole);
        // console.log("altRole1:", altRole);

        if (numberOfRoutes === 1) { // div container for levels with only 1 route
            return `
            <div class="level-container">
                <div class="line-dot left">
                </div>
                <div class="line-dot middle">
                </div>
                <div class="line-dot right">
                    <div class="line right" ${role.level === 1 ? 'style="border-color: var(--white-bkgd)"' : ''} ></div>
                    <div class="dot right"><a href="${mainRole.url}#${theRole}" class="level-title right item-hl">${mainRole.shortTitle}</a></div>
                </div>
            </div>
            `
        } else if (numberOfRoutes === 2 && initialSplit === false) { // for level with 2 routes, initial split; assumes maximum 2 routes per level
            initialSplit = true;
            return `
            <div class="level-container">
                <div class="line-dot left">
                    <div class="line right" style="border-color: var(--white-bkgd"></div>
                    <div class="textbox left"><a href="${altRole.url}#${theRole}" class="level-title left item-hl">${altRole.shortTitle}</a></div>
                </div>
                <div class="curve-dot middle">
                    <svg class="svg-curve-line" width="80px" height="80px" viewBox="0 17 80 40">
                        <path class="curve-line-path" stroke="black" strok-width="1" fill="none" 
                            d="m81 0 v10 
                                q5 30 -30 30 
                                h-20
                                q-35 0 -30 30
                                v10 
                            " />
                    </svg>
                    <div class="dot middle"></div>
                </div>
                <div class="line-dot right">
                    <div class="line right"></div>
                    <div class="dot right"><a href="${mainRole.url}#${theRole}" class="level-title right item-hl">${mainRole.shortTitle}</a></div>
                </div>
            </div>
            `
        } else if (numberOfRoutes === 2 && initialSplit === true) { // for level with 2 routes and 2nd route has already been created
            return `
            <div class="level-container">
                <div class="line-dot left">
                    <div class="line left" style="border-color: var(--white-bkgd"></div>
                    <div class="textbox left"><a href="${altRole.url}#${theRole}" class="level-title left item-hl">${altRole.shortTitle}</a></div> 
                </div>
                <div class="line-dot middle">
                    <div class="line middle"></div>
                    <div class="dot middle"></div>
                </div>
                <div class="line-dot right">
                    <div class="line right"></div>
                    <div class="dot right"><a href="${mainRole.url}#${theRole}" class="level-title right item-hl">${mainRole.shortTitle}</a></div>
                </div>
            </div>
            `
        } else {
            return ''
        }
    }).join('')
    
    // console.log('html', pathHtml);
    pathTitle.innerText = `Career Path for a ${rolePicked}`;
    pathContainer.innerHTML = pathHtml;
}

teammembers.forEach(member => member.addEventListener('click', e => pathMap(e.target.dataset.role)));

const curUrl = window.location.href;
// console.log(curUrl);
const index = curUrl.indexOf('#') +1 || curUrl.length;
let re = new RegExp('%20', 'gi');
const roleKeyWord = curUrl.slice(index).replace(re, ' ');
// console.log('roleKeyWord', roleKeyWord);

pathMap(roleKeyWord); // updating path map based on what was clicked before this page
// console.log("%crunning untriggered pathMap func", 'color: red');