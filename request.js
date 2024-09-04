const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<body>
  <div id="content"></div>
  <script>new Request();</script>
</body>`, { runScripts: "dangerously" });
