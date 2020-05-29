const { readFileSync } = require("fs");

const getFile = () => {
  try {
    const text = readFileSync("text.txt", "utf8");
  } catch (err) {
    throw new Error(err);
  }

  console.log(text);
};
module.exports = getFile;

const getFile = require("./getFile");
describe("readFile", () => {
  const mocks = {
    fs: {
      readFileSync: jest.fn(),
    },
    other: {
      text: "Test text",
    },
  };

  beforeAll(() => {
    jest.mock("fs", () => mocks.fs);
  });

  test("read file success run console.log", () => {
    mocks.fs.readFileSync.mockImplementation(() => this.mocks.other.text);

    getFile();

    expect(console.log).toBeCalled();
  });
});
