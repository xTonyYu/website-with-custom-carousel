
const uxList = [
    {title: 'UX Designer', url: './detail.html'},
    {title: 'UX Researcher', url: '#researcher'},
    {title: 'UX Writer', url: '#writer'},
    {title: 'UX Mama', url: '#mom'},
    {title: 'UX Dad', url: '#dad'},
    {title: 'UX Reader', url: '#reader'},
    {title: 'UX Worker', url: '#worker'},
    {title: 'UX Dude', url: '#dude'}
];

const teamData = [
    {genericTitle: 'Sr. Product Manager', role: 'Product Manager', url: './detail.html' },
    {genericTitle: 'Product Manager', role: 'Product Manager', url: './detail.html' },
    {genericTitle: 'UX Designer', role: 'UX Product Designer', url: './detail.html' },
    {genericTitle: 'UX Researcher', role: 'UX Researcher', url: './detail.html' },
    {genericTitle: 'Design Developer', role: 'Front-end Developer', url: './detail.html' },
    {genericTitle: 'Front-end Developer', role: 'Front-end Developer', url: './detail.html' },
    {genericTitle: 'Back-end Developer', role: 'Back-end Developer', url: './detail.html' },
    {genericTitle: 'Full Stack Developer', role: 'Full-stack Engineer', url: './detail.html' },
];

const careers = [
    {   role: 'UX Product Designer',
        path: [
            {   level: 1,
                route: [
                    {number:1,
                    title: 'UX Product Designer',
                    shortTitle: 'Designer',
                    url:'./detail.html'}
                    ]
            },
            {   level: 2,
                route: [
                    {number:1,
                    title: 'Senior UX Product Designer',
                    shortTitle: 'Senior Designer',
                    url:'./detail.html'}
                    ]
            },
            {   level: 3,
                route: [
                    {number: 2,
                    title: 'Lead/Principal UX Product Designer',
                    shortTitle: 'Lead/Principal Designer',
                    url:'./detail.html'},
                    {number: 1,
                    title: 'UX Product Design Manager',
                    shortTitle: 'Design Manager',
                    url:'./detail.html'}
                    ]
            },
            {   level: 4,
                route: [
                    {number: 1,
                    title: 'Director of UX Product Design',
                    shortTitle: 'Director of Design',
                    url:'./detail.html'},
                    {number: 2,
                    title: 'Senior Lead/Principal UX Product Designer',
                    shortTitle: 'Senior Principal Designer',
                    url:'./detail.html'}
                    ]
            },
            {   level: 5,
                route: [
                    {number:1,
                    title: 'VP of UX Product Design',
                    shortTitle: 'VP of Design',
                    url:'./detail.html'}
                    ]
            },
        ]
    },
    {   role: 'UX Researcher',
    path: [
        {   level: 1,
            route: [
                {number:1,
                title: 'UX Researcher',
                shortTitle: 'Researcher',
                url:'./detail.html'}
                ]
        },
        {   level: 2,
            route: [
                {number:1,
                title: 'Senior UX Researcher',
                shortTitle: 'Senior Researcher',
                url:'./detail.html'}
                ]
        },
        {   level: 3,
            route: [
                {number: 2,
                title: 'Lead/Principal UX Researcher',
                shortTitle: 'Lead/Principal Researcher',
                url:'./detail.html'},
                {number: 1,
                title: 'UX Researcher Manager',
                shortTitle: 'Researcher Manager',
                url:'./detail.html'}
                ]
        },
        {   level: 4,
            route: [
                {number: 1,
                title: 'Director of UX Researcher',
                shortTitle: 'Director of UX',
                url:'./detail.html'},
                {number: 2,
                title: 'Senior Lead/Principal UX Researcher',
                shortTitle: 'Senior Principal Researcher',
                url:'./detail.html'}
                ]
        },
        {   level: 5,
            route: [
                {number:1,
                title: 'VP of UX Product Design',
                shortTitle: 'VP of Design',
                url:'./detail.html'}
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
                    url:'./detail.html'}
                    ]
            },
            {   level: 2,
                route: [
                    {number:1,
                    title: 'Senior Front-end Developer',
                    shortTitle: 'Senior Developer',
                    url:'./detail.html'}
                    ]
            },
            {   level: 3,
                route: [
                    {number: 2,
                    title: 'Lead/Principal Front-end Developer',
                    shortTitle: 'Lead/Principal Developer',
                    url:'./detail.html'},
                    {number: 1,
                    title: 'Front-end Engieering Manager',
                    shortTitle: 'Engineering Manager',
                    url:'./detail.html'}
                    ]
            },
            {   level: 4,
                route: [
                    {number:1,
                    title: 'Director of Front-end Engineering',
                    shortTitle: 'Director of Engineering',
                    url:'./detail.html'}
                    ]
            },
            {   level: 5,
                route: [
                    {number:1,
                    title: 'VP of Front-end Engineering',
                    shortTitle: 'VP of Engineering',
                    url:'./detail.html'}
                    ]
            }]
    },
    {   role: 'Back-end Developer',
    path: [
        {   level: 1,
            route: [
                {number:1,
                title: 'Back-end Developer',
                shortTitle: 'Developer',
                url:'./detail.html'}
                ]
        },
        {   level: 2,
            route: [
                {number:1,
                title: 'Senior Back-end Developer',
                shortTitle: 'Senior Developer',
                url:'./detail.html'}
                ]
        },
        {   level: 3,
            route: [
                {number: 2,
                title: 'Lead/Principal Back-end Developer',
                shortTitle: 'Lead/Principal Developer',
                url:'./detail.html'},
                {number: 1,
                title: 'Back-end Engieering Manager',
                shortTitle: 'Engineering Manager',
                url:'./detail.html'}
                ]
        },
        {   level: 4,
            route: [
                {number:1,
                title: 'Director of Engineering',
                shortTitle: 'Director of Engineering',
                url:'./detail.html'},
                {number: 2,
                title: 'Software Architect',
                shortTitle: 'Architect',
                url:'./detail.html'}
                ]
        },
        {   level: 5,
            route: [
                {number:1,
                title: 'VP of Engineering',
                shortTitle: 'VP of Engineering',
                url:'./detail.html'}
                ]
        }]
    },
    {   role: 'Full-stack Engineer',
    path: [
        {   level: 1,
            route: [
                {number:1,
                title: 'Software Engineer',
                shortTitle: 'Engineer',
                url:'./detail.html'}
                ]
        },
        {   level: 2,
            route: [
                {number:1,
                title: 'Senior Software Engineer',
                shortTitle: 'Senior Engineer',
                url:'./detail.html'}
                ]
        },
        {   level: 3,
            route: [
                {number: 2,
                title: 'Lead/Principal Software Engineer',
                shortTitle: 'Lead/Principal Engineer',
                url:'./detail.html'},
                {number: 1,
                title: 'Software Engineering Manager',
                shortTitle: 'Engineering Manager',
                url:'./detail.html'}
                ]
        },
        {   level: 4,
            route: [
                {number:1,
                title: 'Director of Engineering',
                shortTitle: 'Director of Engineering',
                url:'./detail.html'},
                {number: 2,
                title: 'Software Architect',
                shortTitle: 'Architect',
                url:'./detail.html'}
                ]
        },
        {   level: 5,
            route: [
                {number:1,
                title: 'VP of Engineering',
                shortTitle: 'VP of Engineering',
                url:'./detail.html'}
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
                    url:'./detail.html'}
                    ]
            },
            {   level: 2,
                route: [
                    {number:1,
                    title: 'Product Manager',
                    shortTitle: 'Product Manager',
                    url:'./detail.html'}
                    ]
            },
            {   level: 3,
                route: [
                    {number:1,
                    title: 'Senior Product Manager',
                    shortTitle: 'Senior Product Manager',
                    url:'./detail.html'}
                    ]
            },
            {   level: 4,
                route: [
                    {number:1,
                    title: 'Director of Product',
                    shortTitle: 'Director of Product',
                    url:'./detail.html'}
                    ]
            },
            {   level: 5,
                route: [
                    {number:1,
                    title: 'VP of Product',
                    shortTitle: 'VP of Product',
                    url:'./detail.html'}
                    ]
            }]
    },
];

// creating Search list from careers data...

function flatten(a) {  // recursive function to flatten deep nested arrays
    return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : a;
}

const searchList1 = careers.map(role => {
    // console.log('careers', careers);
    return role.path.map(ele => {
        // console.log('role.path:', role.path);
        return ele.route.map(e => {
            // console.log('ele.route:', ele.route);
            return {
                title: e.title,
                role: role.role,
                url: e.url
            }
        })
    })
});
// console.log('searchList1:', searchList1); //multiple layers of arrays

const searchList2 = flatten(searchList1); //flatten the array
// console.log('searchList2:', searchList2);

function sortByTitle(a, b) {  // sorting by ascending title func
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB) {return -1;}
    if (titleA > titleB) {return 1;}
}
function unique(item, index, arr) { // func to make unique list
    return (index === 0) || (item.title !== arr[index-1].title);
}

function uniqueTest(arr) { // alternative func to make unique list
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        // console.log(u.hasOwnProperty(arr[i].title));
        if(!u.hasOwnProperty(arr[i].title)) {
            a.push(arr[i]);
            // console.log('pushing');
            u[arr[i].title] = 1;
            // console.log('u:', u);
        }
    }
    return a;
}

const sortedList = searchList2.sort(sortByTitle);
const searchList = sortedList.filter(unique); //sorted and unique

const arr = [1,1,2,2,3,3,3,4,4,5,5,5,5]
// const searchList = uniqueTest(sortedList); //sorted and unique

// console.log('searchList:', searchList);

