import { toPrefix } from '../functions';

describe('utils/functions', () => {
  describe('toPrefix', () => {
    it('should return correct prefix for single element', () => {
      expect(toPrefix([])).toEqual('')
      expect(toPrefix([''])).toEqual('')
      expect(toPrefix(['test'])).toEqual('test');
      expect(toPrefix(['.test'])).toEqual('test');
      expect(toPrefix(['test.'])).toEqual('test');
      expect(toPrefix(['.test.'])).toEqual('test');
      expect(toPrefix(['...test...'])).toEqual('test');
      expect(toPrefix(['.test.test'])).toEqual('test.test');
    });
    it('should return correct prefix for multiple elements', () => {
      expect(toPrefix(['test', ''])).toEqual('test');
      expect(toPrefix(['.test', '.'])).toEqual('test');
      expect(toPrefix(['test.', 'test'])).toEqual('test.test');
      expect(toPrefix(['.test.', '.test.'])).toEqual('test.test');
      expect(toPrefix(['.test', 'test.', '.test.'])).toEqual('test.test.test');
    });
  });

  describe('withPrefix', () => {});
});
