'use strict';

module.exports = {
  name: 'ember-cli-chartjs',

  included: function included(app) {
    this._super.included(app);

    app.import('node_modules/chart.js/dist/Chart.js');
  }
};
