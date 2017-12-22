let phrases;

exports.connect = () => {
  phrases = require('./ru');
};

exports.getPhrase = (name) => {
  if (!phrases[name]) {
    throw new Error(`Нет такой фразы: ${name}`);
  } else {
    return phrases[name];
  }
};
