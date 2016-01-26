System.register(['aurelia-framework', '../common/cssClassSetter', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, CssClassSetter, getBooleanFromAttributeValue, MdButton;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_commonCssClassSetter) {
      CssClassSetter = _commonCssClassSetter.CssClassSetter;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      MdButton = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(MdButton, [{
          key: 'disabled',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'flat',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'large',
          decorators: [bindable()],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function MdButton(element) {
          _classCallCheck(this, _MdButton);

          _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'flat', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'large', _instanceInitializers);

          this.classSetter = new CssClassSetter(element);
        }

        MdButton.prototype.attached = function attached() {
          var classes = [];

          if (getBooleanFromAttributeValue(this.flat)) {
            classes.push('btn-flat');
          }
          if (getBooleanFromAttributeValue(this.large)) {
            classes.push('btn-large');
          }

          if (classes.length === 0) {
            classes.push('btn');
          }

          if (getBooleanFromAttributeValue(this.disabled)) {
            classes.push('disabled');
          }

          if (!getBooleanFromAttributeValue(this.flat)) {
            classes.push('accent');
          }
          this.classSetter.addClasses(classes);
        };

        MdButton.prototype.detached = function detached() {
          this.classSetter.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
        };

        MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
          if (getBooleanFromAttributeValue(newValue)) {
            this.classSetter.addClasses('disabled');
          } else {
            this.classSetter.removeClasses('disabled');
          }
        };

        var _MdButton = MdButton;
        MdButton = inject(Element)(MdButton) || MdButton;
        MdButton = customAttribute('md-button')(MdButton) || MdButton;
        return MdButton;
      })();

      _export('MdButton', MdButton);
    }
  };
});