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

// export {uxList};
// export default uxList;
// module.exports = uxList;