/* eslint-disable default-case */
const init = {
  tasks: [
    {
      Id: 1,
      title: 'to nowe zadanie',
      content: 'na tym polega zadanie',
    },
    {
      Id: 2,
      title: 'to nowe zadanie 2',
      content: 'na tym polega zadanie',
    },
    {
      Id: 3,
      title: 'to nowe zadanie 3',
      content: 'na tym polega zadanie',
    },
  ],
};

const TaskReducer = (state = init, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
  }

  return state;
};
export default TaskReducer;
