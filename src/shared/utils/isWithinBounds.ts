export function isWithinBounds(
  position: [number, number, number],
  bounds: { min: [number, number, number]; max: [number, number, number] }
): boolean {
  return (
    position[0] >= bounds.min[0] &&
    position[0] <= bounds.max[0] &&
    position[1] >= bounds.min[1] &&
    position[1] <= bounds.max[1] &&
    position[2] >= bounds.min[2] &&
    position[2] <= bounds.max[2]
  );
}
