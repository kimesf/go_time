// this file only contains fixtures
// TODO: (id: 2) remove skip by configuring jest to ignore it
// see https://stackoverflow.com/a/68523435/10331739
test.skip('Skip fixtures file', () => { })

export const TASKS_MOCK = [
  {
    name: 'Task 1',
    tags: ['Task 1 tag 1', 'Task 1 tag 2'],
    subtasks: [
      {
        name: 'Tag 1 subtask 1',
        steps: [
          {
            time: 1,
            name: 'Task 1 subtask 1 step 1',
          },
          {
            time: 2,
            name: 'Task 1 subtask 1 step 2',
          },
          {
            time: 3,
            name: 'Task 1 subtask 1 step 3'
          }
        ],
        tags: ['Task 1 subtask 1 tag 1', 'Task 1 subtask 1 tag 2']
      },
      {
        name: 'Task 1 subtask 2',
        steps: [
          {
            time: 4,
            name: 'Task 1 subtask 2 step 1',
          },
          {
            time: 5,
            name: 'Task 1 subtask 2 step 2',
          },
          {
            time: 6,
            name: 'Task 1 subtask 2 step 3',
          }
        ],
        tags: ['Task 1 subtask 2 tag 1', 'Task 1 subtask 2 tag 2']
      },
    ]
  },
  {
    name: 'Task 2',
    tags: ['Task 2 tag 1', 'Task 2 tag 2', 'Task 2 tag 3'],
    subtasks: [
      {
        name: 'Task 2 subtask 1',
        steps: [
          {
            time: 7,
            name: 'Task 2 subtask 1 step 1',
          },
          {
            time: 8,
            name: 'Task 2 subtask 1 step 2',
          },
          {
            time: 9,
            name: 'Task 2 subtask 1 step 3',
          }
        ],
        tags: ['Task 2 subtask 1 tag 1', 'Task 2 subtask 1 tag 2'],
      },
      {
        name: 'Task 2 subtask 2',
        steps: [
          {
            time: 10,
            name: 'Task 2 subtask 2 step 1',
          },
          {
            time: 11,
            name: 'Task 2 subtask 2 step 2',
          },
          {
            time: 12,
            name: 'Task 2 subtask 2 step 3',
          }
        ],
        tags: ['Task 2 subtask 2 tag 1', 'Task 2 subtask 2 tag 2', 'Task 3 subtask 2 tag 3', 'Task 2 subtask 2 tag 4', 'Task 3 subtask 2 tag 5'],
      },
      {
        name: 'Task 2 subtask 3',
        steps: [
          {
            time: 13,
            name: 'Task 2 subtask 3 step 1',
          },
          {
            time: 14,
            name: 'Task 2 subtask 3 step 2',
          },
          {
            time: 15,
            name: 'Task 2 subtask 3 step 3',
          }
        ],
        tags: ['Task 2 subtask 3 tag 1', 'Task 2 subtask 3 tag 2'],
      },
    ]
  }
]

