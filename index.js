const http = require('http');
const proxyaddr = require('proxy-addr');
const path = require('path');
const gm = require('gm');
const parser = require('ua-parser-js');
const moment = require('moment');
const IPDB = require('ipdb');
const qqwry_ipdb = require('qqwry.ipdb');
const ipdb = new IPDB(qqwry_ipdb);
const url = require('url');

let advanceArray = [];
moment.locale('zh-cn');

const splitText = (text,top,left)=>{
    let tempstr='',templen=0,line=0;
    for(let i=0;i<text.length;++i){
        tempstr+=text[i];
        if(/[\u4e00-\u9fff\uf900-\ufaff]/g.test(text[i])||/^[0-9]*$/g.test(text[i])||/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g.test(text[i])) templen+=1.6;
        else templen+=0.9;
        if(templen>=15){
            advanceArray.push({
                text:tempstr,
                top: top+line*14,
                left
            })
            line++;
            templen=0;
            tempstr='';
        }
    }
    advanceArray.push({
        text: tempstr,
        top: top+line*14,
        left
    })
}
const server = http.createServer(async (req, res)=> {
            const query = url.parse(req.url ,true).query;
            const geo = ipdb.find(proxyaddr.all(req).slice(-1)[0]);
            const parseResult = parser(req.headers['user-agent']);
            const browser = parseResult.browser;
            const os = parseResult.os;
            const ins = gm(path.join(__dirname, query.mode==='2'?'xhxh.jpg':'xhxh_basic.jpg'));
            ins.font(path.join(__dirname, 'msyh_2.otf'),18)
            .fill('#ff2d51')
            const basicArray = [{
                    text: `欢迎您，来自${(geo.data.region_name||'未知区域') + '-' +(geo.data.city_name||'未知城市')}的朋友`,
                    left: 13,
                    top: 44,
                },{
                    text: `今天是${moment().format('YYYY[年]MM[月]DD[日] dddd')}`,
                    left: 13,
                    top: 76,
                },
                {
                    text: `您的IP是:${proxyaddr.all(req).slice(-1)[0]}`,
                    left: 13,
                    top: 109,
                },{
                    text: `您使用的操作系统是:${os.name}(${os.version})`,
                    left: 13,
                    top: 144,
                },{
                    text: `您使用的浏览器是:${browser.name}(${browser.version})`,
                    left: 13,
                    top: 178,
                }];
                advanceArray = [];
                splitText(query.github || '还没呐',27,560);
                splitText(query.luogu || '还没呐',65,560);
                splitText(query.bilibili || '还没呐',104,560);
                splitText(query.mail || '还没呐',137,560);
                basicArray.forEach(item=>{
                    ins.drawText(item.left,item.top,item.text);
                })
                if(query.mode==='2'){
                    ins.font(path.join(__dirname, 'msyh_1.otf'),16)
                    .fill('#000000')
                    advanceArray.forEach(item=>{
                        ins.drawText(item.left,item.top,item.text);
                    })
                }
                ins.toBuffer('PNG', (err, data)=>{
                    if (err) throw err;
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                })
});

server.listen(1314, '0.0.0.0', () =>{
    console.log("Server Started!");
    console.log("Listening on the port 1314");
});