export default class Status {

 status = {
    valueBellNotify: true,
    qtdNotify:123,
    warnings: 5,
    responses: 12,
  };

  getStatus(req, res) {
    res.send(this.status);
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;

    app.get('/status/status.json', this.getStatus.bind(this));

  }

}
