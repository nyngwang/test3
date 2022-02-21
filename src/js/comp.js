const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Moe_anime_girl_in_sailor_fuku.png'

export default function MyComp() {
  return (
    <>
      <div>
        {'# Hello World'}
      </div>
      <img src={imgUrl} width="700" alt="apple logo"/>
    </>
  )
}
