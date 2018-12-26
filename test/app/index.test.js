define(['app/index'], ({
  add
}) => {
  describe('test', () => {
    it('should run', () => {
      expect(add(1, 2, 3)).toBe(6)
    })
    it('should fail', () => {
      expect(add(1, 2, 3)).toBe(7)
    })
  })
})