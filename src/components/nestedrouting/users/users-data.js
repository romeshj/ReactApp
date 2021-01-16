const users = [
  {
    name: 'Param',
    description:
      'Guy who writes lorem ipsum all the time when he needs content placeholder',
    tabs: [
      {
        name: 'personal',
        content: {
          firstname: 'Param',
          lastname: 'Harrison',
        },
      },
      {
        name: 'employer',
        content: {
          name: 'Jobbatical',
          city: 'Tallinn, Estonia',
        },
      },
    ],
  },
  {
    name: 'Miguel',
    description:
      'the best guy doing deployment in his own clusters of kubernetes world',
    tabs: [
      {
        name: 'personal',
        content: {
          firstname: 'Miguel',
          lastname: 'Medina',
        },
      },
      {
        name: 'employer',
        content: {
          name: 'Skype',
          city: 'Arizona, US',
        },
      },
      {
        name: 'other',
        content: {
          country: 'Mexico',
		  gender : 'Male',
          age: 30,
        },
      },
    ],
  },
];

export default users