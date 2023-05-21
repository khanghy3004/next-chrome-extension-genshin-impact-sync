import {Genshin, LanguageEnum} from '@vermaysha/hoyolab-api'

module.exports.genshinRecord = async function (cookie, game_uid) {
  try {
    const genshin = new Genshin({
      cookie: cookie, // Required. Cookie can be string or object, see the api refeence below
      lang: LanguageEnum.ENGLISH, // optional
      uid: game_uid
    })
    const dailyNote = await genshin.dailyNote();
    const dailyInfo = await genshin.dailyInfo();
  
    return {dailyNote, dailyInfo}
  } catch (error) {
    console.log(error);
    return {error: 'error'}
  }
}
