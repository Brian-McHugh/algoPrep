// I: two rectangles (objects) parallel with the x and/or y axis
// O: object representing the overlap of two input rectangles
// C: false positive overlap if just considering the x or y axes alone (not both together)
// E: return null for properties where the rectangles are only touching

function findRectangularOverlap(rect1, rect2) {
  let overlap = { leftX: null, bottomY: null, width: null, height: null };
  
  let rect1RightEdge = rect1.leftX + rect1.width;
  let rect2RightEdge = rect2.leftX + rect2.width;
  let rect1TopEdge = rect1.bottomY + rect1.height;
  let rect2TopEdge = rect2.bottomY + rect2.height;
  
  // edge cases of rectangles just touching at a point or an edge, or not touching at all
  if (rect1RightEdge === rect2.leftX || rect2RightEdge === rect1.leftX) {
    return overlap;
  }
  if (rect1TopEdge === rect2.bottomY || rect2TopEdge === rect1.bottomY) {
    return overlap;
  }
  if ((rect1.leftX > rect2RightEdge || rect2.leftX > rect1RightEdge) &&
      (rect1.bottomY > rect2TopEdge || rect2.bottomY > rect1TopEdge)) {
    return overlap;
  }
  
  
  // Calculate the overlap along the x-axis between the two rectangles
  function xOverlap(rect1, rect2, rect1RightEdge, rect2RightEdge) {
    
    if (rect1.leftX < rect2RightEdge || rect2.leftX < rect1RightEdge) {
      const highestStartingX = Math.max(rect1.leftX, rect2.leftX);
      const lowestEndingX = Math.min(rect1RightEdge, rect2RightEdge);
      
      overlap.leftX = highestStartingX;
      overlap.width = lowestEndingX - highestStartingX;

      return overlap.leftX, overlap.width;
    } else {
      return;
    }
  }
  
  // Calculate the overlap along the y-axis between the two rectangles
  function yOverlap(rect1, rect2, rect1TopEdge, rect2TopEdge) {
    
    if (rect1.bottomY < rect2TopEdge || rect2.bottomY < rect1TopEdge) {
      const highestStartingY = Math.max(rect1.bottomY, rect2.bottomY);
      const lowestEndingY = Math.min(rect1TopEdge, rect2TopEdge);
    
      overlap.bottomY = highestStartingY;
      overlap.height = lowestEndingY - highestStartingY;

      return overlap.bottomY, overlap.height;
    } else {
      return;
    }
  }
  
  xOverlap(rect1, rect2, rect1RightEdge, rect2RightEdge);
  yOverlap(rect1, rect2, rect1TopEdge, rect2TopEdge);

  return overlap;
}


// Tests

let desc = 'overlap along both axes';
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a, Object.keys(a).sort());
  const objectB = JSON.stringify(b, Object.keys(b).sort());
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}