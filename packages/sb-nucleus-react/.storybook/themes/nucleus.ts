import { create } from '@storybook/theming';
import CoverImage from '../../src/assets/img/logo.svg';

export default create({
    base: 'light',
    brandTitle: 'Nucleus - Angular',
    brandUrl: 'https://github.com/geromegrignon/angular-material-storybook',
    brandImage: CoverImage,
    brandTarget: '_self',
    colorSecondary: "#ffcc00",
    appBg: "#f0f0f0",
    appBorderColor: "#ccc",
    appBorderRadius: 0,
    textColor: "#333",
    barTextColor: "#666"
});
