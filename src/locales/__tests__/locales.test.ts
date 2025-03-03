import pl from '../pl';
import en from '../en';

type LocalesType = Record<string | number, string | Object>;

const compareKeys = (
  o1: LocalesType,
  o2: LocalesType,
  { noConsole, noSort }: { noConsole?: boolean; noSort?: boolean } = { noConsole: false, noSort: false }
): boolean => {
  const k1 = Object.keys(o1);
  const k2 = Object.keys(o2);

  if (k1.length !== k2.length || JSON.stringify(noSort ? k1 : k1.sort()) !== JSON.stringify(noSort ? k2 : k2.sort())) {
    !noConsole && console.error("keys of o1 doesn't match keys of o2", { k1, k2 });
    return false;
  }

  return !k1
    .map(key =>
      typeof o1[key] === 'object' ? compareKeys(o1[key] as any, o2[key] as any, { noConsole, noSort }) : true
    )
    .includes(false);
};

describe('compareKeys', () => {
  it('should return true if simple objects are the same ', () => {
    const simple = {
      a: 'test',
    };
    expect(compareKeys(simple, simple)).toBeTruthy();
  });

  it('should return false if simple objects are not the same ', () => {
    const simpleA = {
      a: 'test',
    };
    const simpleB = {
      B: 'test',
    };
    expect(compareKeys(simpleA, simpleB, { noConsole: true })).toBeFalsy();
  });

  it('should return true if complex objects are the same ', () => {
    const complex = {
      a: 'test',
      keys: {
        aa: 'test',
        1: 'test',
      },
    };
    expect(compareKeys(complex, complex)).toBeTruthy();
  });

  it('should return false if complex objects are not the same ', () => {
    const complexA = {
      a: 'test',
      keys: {
        aa: 'test',
        1: 'test',
      },
    };
    const complexB = {
      B: 'test',
      keys: {
        bb: 'test',
        2: 'test',
      },
    };
    expect(compareKeys(complexA, complexB, { noConsole: true })).toBeFalsy();
    const complexA2 = {
      a: 'test',
      keys2: {
        aa: 'test',
        1: 'test',
      },
    };
    expect(compareKeys(complexA, complexA2, { noConsole: true })).toBeFalsy();
  });
});

describe('locales', () => {
  it('should contain the same translations', () => {
    expect(compareKeys(en, pl)).toBeTruthy();
    // expect(compareKeys(en, pl, { noSort: true })).toBeTruthy();
  });
});
