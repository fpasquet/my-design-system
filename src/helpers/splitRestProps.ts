export const splitRestProps = <P extends { [key: PropertyKey]: unknown }, K extends PropertyKey>(
  props: P,
  keys: K[] = []
): { omited: Record<string, unknown>; picked: Record<string, unknown>; className?: undefined | string } => {
  const omited: Record<string, unknown> = {};
  const picked: Record<string, unknown> = {};
  let className: undefined | string;
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'className') {
      className = value as string;
    } else {
      (keys.includes(key as K) ? picked : omited)[key] = value;
    }
  });
  return { omited, picked, className };
};
