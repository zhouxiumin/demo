'use strict';

import footerDirective from './footer.directive';
import './asset-line.scss';

const assetLineModule = angular.module('asset-line-module', []);

assetLineModule
  .directive('footerTest', footerDirective);

export default assetLineModule;
