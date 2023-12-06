import { h, Host, getAssetPath } from '@stencil/core/internal/client';

const StyledHost = (attrs, children) => {
    return (h(Host, Object.assign({}, attrs),
        h("link", { rel: 'stylesheet', href: getAssetPath('nucleus.css') }),
        children));
};

export { StyledHost as S };

//# sourceMappingURL=styledHost.js.map