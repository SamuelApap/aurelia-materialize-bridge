import 'materialize';

//Configure Bluebird Promises.
(Promise.config || P.config)({
  warnings: {
    wForgottenReturn: false
  }
});

import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge/validation/validationRenderer';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', plugin => {
      plugin.useClickCounter()
        .useAutoComplete()
        .useBadge()
        .useBreadcrumbs()
        .useBox()
        .useButton()
        .useCard()
        .useCarousel()
        .useCharacterCounter()
        .useCheckbox()
        .useChip()
        .useCollapsible()
        .useCollection()
        .useColors()
        .useDatePicker()
        .useDropdown()
        .useFab()
        .useFile()
        .useFooter()
        .useInput()
        .useModal()
        .useNavbar()
        .usePagination()
        .useParallax()
        .useProgress()
        .usePushpin()
        .useRadio()
        .useRange()
        .useScrollfire()
        .useScrollSpy()
        .useSelect()
        .useSidenav()
        .useSlider()
        .useSwitch()
        .useTabs()
        .useTooltip()
        .useTransitions()
        .useWaves()
        .useWell();
    })
    .plugin('aurelia-validatejs')
    .plugin('aurelia-validation');

  aurelia.container.registerHandler('materialize-form', container => container.get(MaterializeFormValidationRenderer));

  aurelia.use.globalResources('shared/collapse-panel');
  aurelia.use.globalResources('shared/markdown');
  aurelia.use.globalResources('shared/logger');
  aurelia.use.globalResources('shared/au-code');
  aurelia.use.globalResources('shared/sampleValueConverters');

  aurelia.start()
    .then(au => au.setRoot('app'));
}
