const util = require('util');

const phrases = {
  'Hello': 'Привет',
  'world': 'мир'
};

class PhraseError {
  constructor(message) {
    this.name = 'PhraseError';
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
  }
}

util.inherits(PhraseError, Error);

class HttpError {
  constructor(status, message) {
    this.name = 'HttpError';
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
  }
}

util.inherits(HttpError, Error);

function getPhrase(name) {
  if (!phrases[name]) {
    throw new PhraseError(`Нет такой фразы ${name}`);
  } else {
    return phrases[name];
  }
}

function makePage(url) {
  if (url !== 'index.html') {
    throw new HttpError(404, 'Нет такой страницы');
  } else {
    return util.format('%s, %s!', getPhrase('Hell'), getPhrase('world'));
  }
}


try {
  const page = makePage('index.html');
  console.log(page);
} catch(e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error('Ошибка %s\n сообщение: %s\n стек: %s', e.name, e.message, e.stack);
  }
}
