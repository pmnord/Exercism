export const hey = (message) => {
  const responses = {
    '[^!][?](\\s+)?$': 'Sure.',
    '(^[^a-z]+?([A-Z])+[^a-z]+?$)': 'Whoa, chill out!',
    '(^[A-Z ]+[?]$)': `Calm down, I know what I'm doing!`,
    '^(\\s*|bob|Bob)$': `Fine. Be that way!`,
  };
  let result;

  for (let key of Object.keys(responses)) {
    if (message.match(new RegExp(key, 'g'))) { result = responses[key] }
  }

  return result ? result : 'Whatever.';
};