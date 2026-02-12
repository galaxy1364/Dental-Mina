export type FlagName = string;

export const flags: Record<string, boolean> = {};

export function isEnabled(name: FlagName): boolean {
  return !!flags[name];
}

export default flags;