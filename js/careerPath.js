const pathTitle = document.querySelector('.path-title');
const outerContainer = document.querySelector('.career-path-outer-container');
const pathContainer = document.querySelector('.career-path-container');

// careers in data.js;

///////////****   Create Career Path Map  ****\\\\\\\\\\\

function pathMap(rolePicked) {
    let focusedRole = (careers.filter(career => career.role === rolePicked));
    if (focusedRole.length === 0) {
        return console.log("role name not found or spell incorrectly");
    }
    focusedRole = focusedRole[0].path;
    console.log(focusedRole);
    let initialSplit = false;

    const pathHtml = focusedRole.map(role => {
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
                <div class="line-dot right">
                    <div class="line right" ${role.level === 1 ? 'style="border-color: white"' : ''} ></div>
                    <div class="dot right"><a href="${mainRole.url}" class="level-title item-hl">${mainRole.shortTitle}</a></div>
                </div>
            </div>
            `
        } else if (numberOfRoutes === 2 && initialSplit === false) { // for level with 2 route; assumes maximum 2 routes per level
            initialSplit = true;
            return `
            <div class="level-container">
                <div class="curve-dot left">
                    <svg class="svg-curve-line" width="80px" height="80px" viewBox="0 17 80 40">
                        <path class="curve-line-path" stroke="black" strok-width="1" fill="none" 
                            d="m81 0 v10 
                                q5 30 -30 30 
                                h-20
                                q-35 0 -30 30
                                v10 
                            " />
                    </svg>
                    <div class="dot left"><a href="${altRole.url}" class="level-title item-hl">${altRole.shortTitle}</a></div>
                </div>
                <div class="line-dot right">
                    <div class="line right"></div>
                    <div class="dot right"><a href="${mainRole.url}" class="level-title item-hl">${mainRole.shortTitle}</a></div>
                </div>
            </div>
            `
        } else if (numberOfRoutes === 2 && initialSplit === true) { // for level with 2 routes and 2nd route has already been created
            return `
            <div class="level-container">
                <div class="line-dot left">
                    <div class="line left"></div> 
                    <div class="dot left"><a href="${altRole.url}" class="level-title item-hl">${altRole.shortTitle}</a></div>
                </div>
                <div class="line-dot right">
                    <div class="line right"></div>
                    <div class="dot right"><a href="${mainRole.url}" class="level-title item-hl">${mainRole.shortTitle}</a></div>
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

// pathMap('Front-end Developer');