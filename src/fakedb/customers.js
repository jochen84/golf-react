let customers = [
    {
        picture: 'https://images.generated.photos/rZTXgEa98QHHqt82IepSWlSM2yJZb_grSQ36BR5wZ5w/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA3NTE2MzAu/cG5n.png',
        firstname: 'Olle',
        lastname: 'Svensson',
        golfId: '142561-311',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '11',
        booked: true,
        bookedAt: '10:00'
    },
    {
        picture: 'https://images.generated.photos/SBh89WMF8reEmcuXAh3mKrS9OVjvIZypB-aidbwWO24/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA5MTk1NDMu/cG5n.png',
        firstname: 'Nisse',
        lastname: 'Svensson',
        golfId: '1232451-111',
        membertype: 'Juniormedlem',
        handicap: '15',
        profhandicap: '32',
        booked: true,
        bookedAt: '10:00'
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Olle',
        lastname: 'Persson',
        golfId: '1114441-111',
        membertype: 'Passiv',
        handicap: '15',
        profhandicap: '11',
        booked: true,
        bookedAt: '10:20'
    },
    {
        picture: 'https://images.generated.photos/aR_ysRKtOAM3ollAKsyJHWDm3HB7s6U9i1uqM7Hp9As/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA3MjM2MDUu/cG5n.png',
        firstname: 'Pelle',
        lastname: 'Svensson',
        golfId: '1124241-111',
        membertype: 'Passiv',
        handicap: '45',
        profhandicap: '11',
        booked: true,
        bookedAt: '10:30'
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Olle',
        lastname: 'Svensson',
        golfId: '111111-5632',
        membertype: 'Passiv',
        handicap: '15',
        profhandicap: '11',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.generated.photos/aR_ysRKtOAM3ollAKsyJHWDm3HB7s6U9i1uqM7Hp9As/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA3MjM2MDUu/cG5n.png',
        firstname: 'Nisse',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '32',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.generated.photos/aR_ysRKtOAM3ollAKsyJHWDm3HB7s6U9i1uqM7Hp9As/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA3MjM2MDUu/cG5n.png',
        firstname: 'Olle',
        lastname: 'Persson',
        golfId: '111111-111',
        membertype: 'Juniormedlem',
        handicap: '15',
        profhandicap: '11',
        booked: true,
        bookedAt: '11:30'
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Pelle',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Juniormedlem',
        handicap: '45',
        profhandicap: '11',
        booked: true,
        bookedAt: '11:30'
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Olle',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '11',
        booked: true,
        bookedAt: '12:00'
    },
    {
        picture: 'https://images.generated.photos/rZTXgEa98QHHqt82IepSWlSM2yJZb_grSQ36BR5wZ5w/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA3NTE2MzAu/cG5n.png',
        firstname: 'Nisse',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '32',
        booked: true,
        bookedAt: '12:00'
    },
    {
        picture: 'https://images.generated.photos/SBh89WMF8reEmcuXAh3mKrS9OVjvIZypB-aidbwWO24/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA5MTk1NDMu/cG5n.png',
        firstname: 'Olle',
        lastname: 'Persson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '11',
        booked: true,
        bookedAt: '12:00'
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Pelle',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '45',
        profhandicap: '11',
        booked: true,
        bookedAt: '13:00'
    },
    {
        picture: 'https://images.generated.photos/SBh89WMF8reEmcuXAh3mKrS9OVjvIZypB-aidbwWO24/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA5MTk1NDMu/cG5n.png',
        firstname: 'Olle',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '11',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Nisse',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '32',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.generated.photos/aR_ysRKtOAM3ollAKsyJHWDm3HB7s6U9i1uqM7Hp9As/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA3MjM2MDUu/cG5n.png',
        firstname: 'Olle',
        lastname: 'Persson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '11',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Pelle',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '45',
        profhandicap: '11',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Olle',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '11',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.generated.photos/aR_ysRKtOAM3ollAKsyJHWDm3HB7s6U9i1uqM7Hp9As/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA3MjM2MDUu/cG5n.png',
        firstname: 'Nisse',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '15',
        profhandicap: '32',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Olle',
        lastname: 'Persson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '10',
        profhandicap: '5',
        booked: false,
        bookedAt: ''
    },
    {
        picture: 'https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png',
        firstname: 'Pelle',
        lastname: 'Svensson',
        golfId: '111111-111',
        membertype: 'Fullvärdig',
        handicap: '45',
        profhandicap: '',
        booked: false,
        bookedAt: ''
    },
];

export default customers;