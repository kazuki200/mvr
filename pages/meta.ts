interface Meta {
  route: string;
  title: string
}

export const meta:Meta[] = [
  {
    route: '/popularMovie',
    title: '人気の映画'
  },
  {
    route: '/filmsInProgress',
    title: '上映中の映画'
  },
  {
    route: '/upComingMovies',
    title: '近日公開の映画'
  },
  {
    route: '/popularDramas',
    title: '人気のドラマ'
  },
  {
    route: '/dramaOnAir',
    title: '放送中のドラマ'
  },
  {
    route: '/popularAnimation',
    title: '人気のアニメ'
  },
  {
    route: '/animeOnAir',
    title: '放送中のアニメ'
  },
  {
    route: '/myPage',
    title: 'マイページ'
  },
  {
    route: '/individualPage',
    title: '個別ページ'
  },
  {
    route: '/search',
    title: '検索結果'
  }
]
