
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (dash) => ({
  type: OPEN_MODAL,
  dash
});

export const closeModal = () => ({
  type: CLOSE_MODAL
})