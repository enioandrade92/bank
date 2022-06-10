const { encode, decode } = require('js-base64');

module.exports = {
  encodeKey(userId, value, pixId) {
    const part1 = encode(userId.toString());
    const part2 = encode(value.toString());
    const part3 = encode(pixId.toString());

    return `${part1}-${part2}-${part3}`;
  },

  decodeKey(key) {
    const decoded = key.split('-');
    const userId = decode(decoded[0]);
    const value = decode(decoded[1]);
    const pixId = decode(decoded[2]);

    return {
      userId: +userId,
      value: +value,
      pixId: +pixId,
    };
  },
};
