/**
 * @jest-environment jsdom
 */

/* eslint-disable */

let store = [
  [
    {
      id: 0,
      name: 'Under the hood',
    },
    {
      id: 1,
      name: 'Bitten',
    },
  ],
  [
    {
      likeid: 0,
      likes: 2,
    },
    {
      likeid: 1,
      likes: 6,
    }
  ],
  [
    {
      id: 0,
      name: 'John',
      insight: 'Good',
    },
    {
      id: 1,
      name: 'micheal',
      insight: 'Nice',
    }
  ],
]
 
 document.body.innerHTML = '<div class=\'shows\'></div>';

 // like method
describe('display amount of likes', () => {
   it('counts likes', () => {
    const [ shows, likes, comments ] = store;
    const id = 1;
    const likeCount = 6;
    let counter = 0;
    likes.forEach((element) => {
      if (id === element.likeid) {
        counter = likeCount;
      }
    });
     expect(counter).toEqual(likeCount);
   });
})
