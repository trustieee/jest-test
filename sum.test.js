const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(1, 2)).toBe(3);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBe(undefined);
});

test('zero', () => {
  const z = 0;
  expect(z).toBe(0);
  expect(z).toEqual(0);
  expect(z).not.toBe(1);
  expect(z).not.toBeTruthy();
});

test('regex', () => {
  const test = 'foo_bar';
  expect(test).toMatch(/bar/);
  expect(test).not.toMatch(/foobar/);
});

function func() {
  throw new Error('hi');
}

test('func', () => {
  expect(func).toThrow();
  expect(func).toThrow(Error);
  expect(func).toThrow('hi');
  expect(func).toThrow(/hi/);
});

test('the data is peanut butter', done => {
  function cb(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  cb('peanut butter');
});

const fetchData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('foo');
    }, 2500);
  });

test('promise', () => {
  return fetchData().then(data => {
    expect(data).toBe('foo');
  });
});
