module.exports = options => {
  return function* analog(next) {
    yield next;
    const location = yield this.curl('http://pv.sohu.com/cityjson?ie=utf-8', {
      agent: false,
      dataType: 'text',
    });
    const location_obj = location.data.substr(19);
    const location_fin = JSON.parse(location_obj.substring(0, location_obj.length - 1));
    yield this.app.mysql.insert('sitelocation', { ip: location_fin.cip, location: location_fin.cname, location_id: location_fin.cid});

  }
};