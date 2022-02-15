const email1 = "SepidehMontazer@gmail.com";
const email2 = "FaranakHakimi@yahoo.com";
const email3 = "SharareRahimi@hotmail.com";

function convertUnameToShortUname(params) {
  const shortUsername = params.slice(0, 3);
  const seperator = params.split("@");
  const differentEmails = seperator[1];
  const result = `"${shortUsername}...@${differentEmails}"\n`;
  return result;
}

console.log(`${email1} => ${convertUnameToShortUname(email1)}`);
console.log(`${email2} => ${convertUnameToShortUname(email2)}`);
console.log(`${email3} => ${convertUnameToShortUname(email3)}`);
