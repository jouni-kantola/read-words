export const UPPERCASE = "UPPERCASE";
export const LOWERCASE = "LOWERCASE";

export function toggleCharCase(toState) {
  return {
    type: toState.charCase === 'lowercase' ? LOWERCASE : UPPERCASE
  };
}