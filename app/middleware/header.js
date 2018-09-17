module.exports = options => {
  return function* header(next) {
    yield next;
    this.set('Access-Control-Allow-Origin', '*');
    this.set('Access-Control-Allow-Methods','GET, POST, PUT,OPTIONS');
    this.set('Access-Control-Allow-Credentials',true);
    return ;
  }
}