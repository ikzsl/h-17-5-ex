export const updateText = (text) => ({
  type: 'UPDATE_TEXT',
  payload: {
    text,
  },
});

export const resetText = () => ({
  type: 'RESET_TEXT',
  payload: {},
});
