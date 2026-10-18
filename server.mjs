import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
const root = join(process.cwd(), "dist");
const mime = { ".html":"text/html", ".css":"text/css", ".js":"text/javascript", ".svg":"image/svg+xml", ".webmanifest":"application/manifest+json" };
createServer(async (req,res)=>{
  try {
    const path = req.url === "/" ? "index.html" : req.url.split("?")[0].replace(/^\//, "");
    const body = await readFile(join(root,path));
    res.writeHead(200,{"content-type":mime[extname(path)]||"application/octet-stream"});
    res.end(body);
  } catch { res.writeHead(404); res.end("Not found"); }
}).listen(4173,"127.0.0.1",()=>console.log("PennyFlow preview: http://127.0.0.1:4173"));
