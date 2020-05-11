const pathTitle = document.querySelector('.path-title');
const outerContainer = document.querySelector('.career-path-outer-container');
const pathContainer = document.querySelector('.career-path-container');

const careers = [
    {   role: 'UX/Product Designer',
        path: [
            {   level: 1,
                title: 'UX/Product Designer',
                shortTitle: 'Designer',
                url:'#Placeholder',
                route: 1
            },
            {   level: 2,
                title: 'Senior UX/Product Designer',
                shortTitle: 'Senior Designer',
                url:'#Placeholder',
                route: 1
            },


            {   level: {
                    number: 3,
                    route: 2,
                    title: 'Lead/Principal UX/Product Designer',
                    shortTitle: 'Lead/Principal Designer',
                    url:'#Placeholder'}
            },
            {   level: 3,
                title: 'UX/Product Design Manager',
                shortTitle: 'Design Manager',
                url:'#Placeholder',
                route: 1,
            },


            {   level: 3,
                title: 'Lead/Principal UX/Product Designer',
                shortTitle: 'Lead/Principal Designer',
                url:'#Placeholder',
                route: 2
            },
            {   level: 3,
                title: 'UX/Product Design Manager',
                shortTitle: 'Design Manager',
                url:'#Placeholder',
                route: 1
            },
            {   level: 4,
                title: 'Director of UX/Product Design',
                shortTitle: 'Director of Design',
                url:'#Placeholder',
                route: 1
            },
            {   level: 5,
                title: 'VP of UX/Product Design',
                shortTitle: 'VP of Design',
                url:'#Placeholder',
                route: 1
            }]
    },
    {   role: 'Front-end Developer',
        path: [
            {   level: 1,
                title: 'Front-end Developer',
                shortTitle: 'Developer',
                url:'#Placeholder',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 2,
                title: 'Senior Front-end Developer',
                shortTitle: 'Senior Developer',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 3,
                title: 'Lead/Principal Front-end Developer',
                shortTitle: 'Lead/Principal Developer',
                url:'#Placeholder',
                route: 'B'
            },
            {   level: 3,
                title: 'Front-end Engieering Manager',
                shortTitle: 'Engineering Manager',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 4,
                title: 'Director of Front-end Engineering',
                shortTitle: 'Director of Engineering',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 5,
                title: 'VP of Front-end Engineering',
                shortTitle: 'VP of Engineering',
                url:'#Placeholder',
                route: 'A'
            }]
    },
    {   role: 'Product Manager',
        path: [
            {   level: 1,
                title: 'Associate Product Manager',
                shortTitle: 'Associate Product Manager',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 2,
                title: 'Product Manager',
                shortTitle: 'Product Manager',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 3,
                title: 'Senior Product Manager',
                shortTitle: 'Senior Product Manager',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 4,
                title: 'Director of Product',
                shortTitle: 'Director of Product',
                url:'#Placeholder',
                route: 'A'
            },
            {   level: 5,
                title: 'VP of Product',
                shortTitle: 'VP of Product',
                url:'#Placeholder',
                route: 'A'
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
    
    focusedRole.map(role => {
        if (role.level === 1 && role.route === 'A') { // starting point of the path
            return `
            <div class="level-container">
                <div class="line-dot left">
                </div>
                <div class="line-dot right">
                    <div class="line right" style="border-color: white"></div>
                    <div class="dot right"><a href="${role.url}" class="level-title item-hl">${role.shortTitle}</a></div>
                </div>
            </div>
            `
        } else if {

        }
        console.log(role.level, role.route, role.title);
    })

    pathTitle.innerText = `Career Path for a ${rolePicked}`;
}

path('UX/Product Designer');