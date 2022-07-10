export const HARD_CODED_TASKS = [
  {
    name: "Pedido #9889",
    tags: ['Custom'],
    subtasks: [
      {
        description: "New York",
        steps: [
          {
            time: 3,
            description: 'Forno primeiro lado',
          },
          {
            time: 5,
            description: 'Forno segundo lado',
          },
          {
            time: 6,
            description: 'Descanso'
          }
        ],
        tags: ["x2 All In"]
      },
      {
        description: "Recheado",
        steps: [
          {
            time: 360,
            description: 'Forno primeiro lado',
          },
          {
            time: 360,
            description: 'Forno segundo lado',
          },
          {
            time: 360,
            description: 'Descanso'
          }
        ],
        tags: ["1x Lemon Up", "3x Nutellas"]
      },
    ]
  },
  {
    name: "Pedido #1234",
    tags: ["One For All"],
    subtasks: [
      {
        description: "New York",
        steps: [
          {
            time: 420,
            description: 'Forno primeiro lado',
          },
          {
            time: 420,
            description: 'Forno segundo lado',
          },
          {
            time: 360,
            description: 'Descanso'
          }
        ],
        tags: ["1x All In", '1x Fragmellow'],
      },
      {
        description: "Recheados",
        steps: [
          {
            time: 360,
            description: 'Forno primeiro lado',
          },
          {
            time: 360,
            description: 'Forno segundo lado',
          },
          {
            time: 360,
            description: 'Descanso'
          }
        ],
        tags: ['1x Nutella', '1x Lemon Up', '1x Choco Bomb', '1x Red Velvet', '1x Call of Churros']
      },
      {
        description: "Tradicionais",
        steps: [
          {
            time: 300,
            description: 'Forno primeiro lado',
          },
          {
            time: 300,
            description: 'Forno segundo lado',
          },
          {
            time: 360,
            description: 'Descanso'
          }
        ],
        tags: ['1x Macadâmia', '1x Choco Chip']
      }
    ]
  }
]

