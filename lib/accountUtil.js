import {Hoyolab, LanguageEnum, GamesEnum} from '@vermaysha/hoyolab-api'

module.exports.accountRecord = async function (cookie) {
  try {
    const hoyolab = new Hoyolab({
      cookie: cookie,
      lang: LanguageEnum.ENGLISH,
    })
    const accountList = await hoyolab.gamesList(GamesEnum.GENSHIN_IMPACT)

    return accountList
  } catch (error) {
    console.log(error);
    return {error: 'error'}
  }
}
