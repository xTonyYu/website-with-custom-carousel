const uxList = [
    {title: 'UX Designer', url: '../PlumPear/designer.html'},
    {title: 'UX Researcher', url: '#researcher'},
    {title: 'UX Writer', url: '#writer'},
    {title: 'UX Mama', url: '#mom'},
    {title: 'UX Dad', url: '#dad'},
    {title: 'UX Reader', url: '#reader'},
    {title: 'UX Worker', url: '#worker'},
    {title: 'UX Dude', url: '#dude'}];

const teamData = [
    {genericTitle: 'Sr. Product Manager', role: 'Product Manager', url: '#Placeholder' },
    {genericTitle: 'Product Manager', role: 'Product Manager', url: '#Placeholder' },
    {genericTitle: 'UX Designer', role: 'UX/Product Designer', url: '#Placeholder' },
    {genericTitle: 'UX Researcher', role: 'UX Researcher', url: '#Placeholder' },
    {genericTitle: 'Design Developer', role: 'Front-end Developer', url: '#Placeholder' },
    {genericTitle: 'Front-end Developer', role: 'Front-end Developer', url: '#Placeholder' },
    {genericTitle: 'Back-end Developer', role: 'Back-end Developer', url: '#Placeholder' },
];

const careers = [
    {   role: 'UX/Product Designer',
        path: [
            {   level: 1,
                route: [
                    {number:1,
                    title: 'UX/Product Designer',
                    shortTitle: 'Designer',
                    url:'../PlumPear/designer.html'}
                    ]
            },
            {   level: 2,
                route: [
                    {number:1,
                    title: 'Senior UX/Product Designer',
                    shortTitle: 'Senior Designer',
                    url:'../PlumPear/designer.html'}
                    ]
            },
            {   level: 3,
                route: [
                    {number: 2,
                    title: 'Lead/Principal UX/Product Designer',
                    shortTitle: 'Lead/Principal Designer',
                    url:'../PlumPear/designer.html'},
                    {number: 1,
                    title: 'UX/Product Design Manager',
                    shortTitle: 'Design Manager',
                    url:'../PlumPear/designer.html'}
                    ]
            },
            {   level: 4,
                route: [
                    {number: 1,
                    title: 'Director of UX/Product Design',
                    shortTitle: 'Director of Design',
                    url:'../PlumPear/designer.html'},
                    {number: 2,
                    title: 'Senior Lead/Principal UX/Product Designer',
                    shortTitle: 'Senior Principal Designer',
                    url:'../PlumPear/designer.html'}
                    ]
            },
            {   level: 5,
                route: [
                    {number:1,
                    title: 'VP of UX/Product Design',
                    shortTitle: 'VP of Design',
                    url:'../PlumPear/designer.html'}
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
                url:'#Placeholder'}
                ]
        },
        {   level: 2,
            route: [
                {number:1,
                title: 'Senior UX Researcher',
                shortTitle: 'Senior Researcher',
                url:'#Placeholder'}
                ]
        },
        {   level: 3,
            route: [
                {number: 2,
                title: 'Lead/Principal UX Researcher',
                shortTitle: 'Lead/Principal Researcher',
                url:'#Placeholder'},
                {number: 1,
                title: 'UX Researcher Manager',
                shortTitle: 'Researcher Manager',
                url:'#Placeholder'}
                ]
        },
        {   level: 4,
            route: [
                {number: 1,
                title: 'Director of UX Researcher',
                shortTitle: 'Director of UX',
                url:'#Placeholder'},
                {number: 2,
                title: 'Senior Lead/Principal UX Researcher',
                shortTitle: 'Senior Principal Researcher',
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
    {   role: 'Back-end Developer',
    path: [
        {   level: 1,
            route: [
                {number:1,
                title: 'Back-end Developer',
                shortTitle: 'Developer',
                url:'#Placeholder'}
                ]
        },
        {   level: 2,
            route: [
                {number:1,
                title: 'Senior Back-end Developer',
                shortTitle: 'Senior Developer',
                url:'#Placeholder'}
                ]
        },
        {   level: 3,
            route: [
                {number: 2,
                title: 'Lead/Principal Back-end Developer',
                shortTitle: 'Lead/Principal Developer',
                url:'#Placeholder'},
                {number: 1,
                title: 'Back-end Engieering Manager',
                shortTitle: 'Engineering Manager',
                url:'#Placeholder'}
                ]
        },
        {   level: 4,
            route: [
                {number:1,
                title: 'Director of Engineering',
                shortTitle: 'Director of Engineering',
                url:'#Placeholder'},
                {number: 2,
                title: 'Software Architect',
                shortTitle: 'Architect',
                url:'#Placeholder'}
                ]
        },
        {   level: 5,
            route: [
                {number:1,
                title: 'VP of Engineering',
                shortTitle: 'VP of Engineering',
                url:'#Placeholder'}
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
                url:'#Placeholder'}
                ]
        },
        {   level: 2,
            route: [
                {number:1,
                title: 'Senior Software Engineer',
                shortTitle: 'Senior Engineer',
                url:'#Placeholder'}
                ]
        },
        {   level: 3,
            route: [
                {number: 2,
                title: 'Lead/Principal Software Engineer',
                shortTitle: 'Lead/Principal Engineer',
                url:'#Placeholder'},
                {number: 1,
                title: 'Software Engineering Manager',
                shortTitle: 'Engineering Manager',
                url:'#Placeholder'}
                ]
        },
        {   level: 4,
            route: [
                {number:1,
                title: 'Director of Engineering',
                shortTitle: 'Director of Engineering',
                url:'#Placeholder'},
                {number: 2,
                title: 'Software Architect',
                shortTitle: 'Architect',
                url:'#Placeholder'}
                ]
        },
        {   level: 5,
            route: [
                {number:1,
                title: 'VP of Engineering',
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

// creating title list...
console.log('careers', careers);
// let searchList = [];

// searchList = careers.map(role => {
//     console.log("role.path:", role.path); // role.path is an array
//     role.path.map(ele => {
//         console.log("role.path[i].route:",ele.route); //ele.route is also an array
//         ele.route.map(e => {
//             // console.log("role.path[i].route[j]:",e.title, e.url); //ele.route is also an array
//             e.title !== ''
//             // return {
//             //     title: e.title,
//             //     url: e.url
//             // }
//         })
//     })
// })
// console.log('searchList:', searchList);

function flatten(a) {  // recursive to flatten deep nested arrays
    return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : a;
}

const searchList1 = careers.map(role => {
    return role.path.map(ele => {
        return ele.route.map(e => {
            return {
                title: e.title,
                url: e.url
            }
        })
    })
});
console.log('searchList1:', searchList1);

const searchList2 = flatten(searchList1);
console.log('searchList2:', searchList2);

function sortByTitle(a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB) {return -1;}
    if (titleA > titleB) {return 1;}
}
const searchList = searchList2.sort(sortByTitle);
console.log(searchList);

// export {uxList};
// export default uxList;
// module.exports = uxList;