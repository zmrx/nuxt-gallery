export const state = () => ({
  categories: [
    {
      title: 'sfw',
      sections: [
        'waifu',
        'neko',
        'shinobu',
        'megumin',
        'bully',
        'cuddle',
        'cry',
        'hug',
        'awoo',
        'kiss',
        'lick',
        'pat',
        'smug',
        'bonk',
        'yeet',
        'blush',
        'smile',
        'wave',
        'highfive',
        'handhold',
        'nom',
        'bite',
        'glomp',
        'slap',
        'kill',
        'kick',
        'happy',
        'wink',
        'poke',
        'dance',
        'cringe'
      ]
    },
    {
      title: 'nsfw',
      sections: [
        'waifu',
        'neko',
        'trap',
        'blowjob'
      ]
    }
  ]
})

export const getters = {
  getCategories: (state) => {
    return state.categories
  }
}
