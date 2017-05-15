export const allBenches = (state) => (
  Object.keys(state.benches).map((key) => state.benches[key])
);
