export const findByTestAttr = (component, attr) => (
    component.find(`[data-test="${attr}"]`)
)