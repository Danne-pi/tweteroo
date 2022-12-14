import fs from 'fs';
const path = './content/'

export function CheckFirsLoad(){
  let content = []
  content = JSON.stringify(content)
  if (!fs.existsSync(path+"users.json")) {
    fs.writeFile(path+"users.json", content, { flag: 'w+' }, err => {
      console.error(err);
    })
  }
  if (!fs.existsSync(path+"tweets.json")) {
    fs.writeFile(path+"tweets.json", content, { flag: 'w+' }, err => {
      console.error(err);
    })
  }

}

export function InfoSave(info, type){
  let content = fs.readFileSync(path+type+"s.json")
  content = JSON.parse(content)
  content.unshift(info)
  content = JSON.stringify(content)
  fs.writeFile(path+type+'s.json', content, { flag: 'w+' }, err => {
    if (err) {
      console.error(err);
    }
  })
}

export function GetTweets(){
  let content = fs.readFileSync(path+"tweets.json")
  let profile = fs.readFileSync(path+"users.json")
  profile = JSON.parse(profile)
  content = JSON.parse(content)
  content = content.slice(0, 10)
  return content.map((item) => ({
    avatar: profile.find(o => o.username === item.username).avatar,
    username: item.username,
    tweet: item.tweet
  }))
}