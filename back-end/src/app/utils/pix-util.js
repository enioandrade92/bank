const { encode, decode } = require('js-base64');

module.exports = {
  encodeKey(userID, value, registerID) {
    const part1 = encode(userID.toString());
    const part2 = encode(value.toString());
    const part3 = encode(registerID.toString());

    return `${part1}-${part2}-${part3}`;
  },

  decodeKey(key) {
    const decoded = key.split('-');
    const id = decode(decoded[0]);
    const value = decode(decoded[1]);
    const registerId = decode(decoded[2]);

    return {
      id: +id,
      value: +value,
      registerId: +registerId,
    };
  },
};
