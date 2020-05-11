const pathTitle = document.querySelector('.path-title');
const outerContainer = document.querySelector('.career-path-outer-container');
const pathContainer = document.querySelector('.career-path-container');

// const teammembers = document.querySelectorAll('.teammember');

const careers = [
    {   role: 'UX/Product TESTING',
        path: [
            {   level: 1,
                route: [
                    {number:1,
                    title: 'UX/Product Designer',
                    shortTitle: 'Designer',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 2,
                route: [
                    {number:1,
                    title: 'Senior UX/Product Designer',
                    shortTitle: 'Senior Designer',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 3,
                route: [
                    {number: 2,
                    title: 'Lead/Principal UX/Product Designer',
                    shortTitle: 'Lead/Principal Designer',
                    url:'#Placeholder'},
                    {number: 1,
                    title: 'UX/Product Design Manager',
                    shortTitle: 'Design Manager',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 4,
                route: [
                    {number: 1,
                    title: 'Director of UX/Product Design',
                    shortTitle: 'Director of Design',
                    url:'#Placeholder'},
                    {number: 2,
                    title: 'Senior Lead/Principal UX/Product Designer',
                    shortTitle: 'Senior Principal Designer',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 5,
                route: [
                    {number:1,
                    title: 'VP of UX/Product Design',
                    shortTitle: 'VP of Design',
                    url:'#Placeholder'}
                    ]
            },
        ]
    },
    {   role: 'Front-end Developer',
        path: [
            {   level: 1,
                route: [
                    {number:1,
                    title: 'Front-end Developer',
                    shortTitle: 'Developer',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 2,
                route: [
                    {number:1,
                    title: 'Senior Front-end Developer',
                    shortTitle: 'Senior Developer',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 3,
                route: [
                    {number: 2,
                    title: 'Lead/Principal Front-end Developer',
                    shortTitle: 'Lead/Principal Developer',
                    url:'#Placeholder'},
                    {number: 1,
                    title: 'Front-end Engieering Manager',
                    shortTitle: 'Engineering Manager',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 4,
                route: [
                    {number:1,
                    title: 'Director of Front-end Engineering',
                    shortTitle: 'Director of Engineering',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 5,
                route: [
                    {number:1,
                    title: 'VP of Front-end Engineering',
                    shortTitle: 'VP of Engineering',
                    url:'#Placeholder'}
                    ]
            }]
    },
    {   role: 'Product Manager',
        path: [
            {   level: 1,
                route: [
                    {number:1,
                    title: 'Associate Product Manager',
                    shortTitle: 'Associate Product Manager',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 2,
                route: [
                    {number:1,
                    title: 'Product Manager',
                    shortTitle: 'Product Manager',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 3,
                route: [
                    {number:1,
                    title: 'Senior Product Manager',
                    shortTitle: 'Senior Product Manager',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 4,
                route: [
                    {number:1,
                    title: 'Director of Product',
                    shortTitle: 'Director of Product',
                    url:'#Placeholder'}
                    ]
            },
            {   level: 5,
                route: [
                    {number:1,
                    title: 'VP of Product',
                    shortTitle: 'VP of Product',
                    url:'#Placeholder'}
                    ]
            }]
    },
];

function path(rolePicked) {
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
        console.log("mainRole:", mainRole);
        console.log("altRole1:", altRole);


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
            console.log('initialSplit BEFORE:', initialSplit);
            initialSplit = true;
            console.log('initialSplit AFTER:', initialSplit);
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
        } else if (numberOfRoutes === 2 && initialSplit === true) {
            console.log('initialSplit:', initialSplit);
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
    }).join(' ')
    
    console.log('html', pathHtml);
    pathTitle.innerText = `Career Path for a ${rolePicked}`;
    pathContainer.innerHTML = pathHtml;
}

teammembers.forEach(member => member.addEventListener('click', e => console.dir(e.target)));

path('Front-end Developer');