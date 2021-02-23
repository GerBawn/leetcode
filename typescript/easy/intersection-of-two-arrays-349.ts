function intersection(nums1: number[], nums2: number[]): number[] {
  const s1 = new Set<number>(nums1);
  return Array.from(new Set(nums2.filter(n => s1.has(n))));
};
